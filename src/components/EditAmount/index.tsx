import {
  Button,
  Card,
  Box,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "./styles/index.css";
import { useState } from "react";
import { notificationContainer } from "../../utils/notification";
import { useExpenseContext } from "../../context/ExpenseContext";
import {
  BudgetsInfoProperties,
  ExpenseInfoProperties,
} from "../../context/definations/types";

type EditAmountProperties = {
  Info: BudgetsInfoProperties | ExpenseInfoProperties;
  setModal: any;
};

const EditAmount = ({ Info, setModal }: EditAmountProperties) => {
  const { updateAmount } = useExpenseContext();

  const InfoObject =
    Object.keys(Info).length === 4
      ? { ...Info, tariff: "Budget" }
      : { ...Info, tariff: "Expense" };

  const tariffName =
    InfoObject?.tariff === "Budget"
      ? (Info as BudgetsInfoProperties)?.budgetName
      : (Info as ExpenseInfoProperties)?.expenseName;

  const tariffAmount =
    InfoObject?.tariff === "Budget"
      ? (Info as BudgetsInfoProperties)?.budgetAmount
      : (Info as ExpenseInfoProperties)?.expenseAmount;

  const tariffId =
    InfoObject?.tariff === "Budget"
      ? (Info as BudgetsInfoProperties)?.budgetId
      : (Info as ExpenseInfoProperties)?.expenseId;

  const [amount, setAmount] = useState<number>(tariffAmount);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const handleClick = () => {
    if (amount !== tariffAmount) {
      let updateObject = {
        _amount: amount,
        _tariff: InfoObject?.tariff,
        _tariffId: tariffId,
      };
      updateAmount(updateObject);
      setModal(false);
    } else {
      notificationContainer({ action: "error", theme: "light" });
    }
  };

  return (
    <>
      <Card className="edit-container">
        <CardContent>
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box>
                <Typography
                  variant="h3"
                  component="h3"
                  color="text.secondary"
                  gutterBottom
                >
                  Edit {tariffName.toLocaleUpperCase()}
                </Typography>
                <Typography variant="h5" component="p" color="red" gutterBottom>
                  You can only edit the amount
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TextField
                id="standard-basic"
                label="Amount"
                variant="outlined"
                color="primary"
                className="text-field"
                required
                sx={{
                  "& .MuiFormLabel-root": {
                    fontSize: "1.4rem",
                  },
                  "& .MuiInputBase-input": {
                    fontSize: "1.8rem",
                  },
                }}
                name={tariffName}
                value={amount}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button variant="contained" fullWidth onClick={handleClick}>
            Update {tariffName.toLocaleUpperCase()}
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default EditAmount;

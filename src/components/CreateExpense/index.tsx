import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useExpenseContext } from "../../context/ExpenseContext";
import { BudgetsInfoProperties } from "../../context/definations/types";
import { notificationContainer } from "../../utils/notification";
import "./styles/index.css";

interface ExpenseInfo {
  expenseName: string;
  expenseAmount: number;
  associatedBudgetId: string;
}

export const CreateExpense = () => {
  const [expenseInfo, setExpenseInfo] = useState<ExpenseInfo>({
    expenseName: "",
    expenseAmount: 0,
    associatedBudgetId: "",
  });
  const { budgetInfo, handleExpenseInfo } = useExpenseContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExpenseInfo({ ...expenseInfo, [name]: value });
  };

  const handleBudgetChange = (event: SelectChangeEvent) => {
    setExpenseInfo({
      ...expenseInfo,
      associatedBudgetId: event.target.value,
    });
  };

  const handleClick = () => {
    if (
      expenseInfo.expenseName !== "" ||
      expenseInfo.associatedBudgetId !== ""
    ) {
      handleExpenseInfo({
        expenseName: expenseInfo.expenseName,
        expenseAmount: expenseInfo.expenseAmount,
        associatedBudgetId:
          budgetInfo.length === 1
            ? budgetInfo[0].budgetId
            : expenseInfo.associatedBudgetId,
      });
      notificationContainer({ action: "info", theme: "colored", text: "You have successfully created a new expense" });
      setExpenseInfo({
        expenseName: "",
        expenseAmount: 0,
        associatedBudgetId: "",
      });
    } else {
      notificationContainer({ action: "error", theme: "light" });
    }
  };

  return (
    <Card className="create-expense-card dashed-border">
      <CardContent>
        <Box className="create-expense-head">
          <Typography
            variant="h3"
            component="h3"
            color="text.secondary"
            gutterBottom
          >
            {budgetInfo.length === 1
              ? `Create New ${budgetInfo[0].budgetName} expense`
              : "Create New expense"}
          </Typography>
        </Box>
        <Grid container columnSpacing={2} rowSpacing={1}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              id="standard-basic"
              label="expense name"
              variant="outlined"
              color="primary"
              className="text-field"
              name="expenseName"
              value={expenseInfo.expenseName}
              onChange={handleChange}
              required
              sx={{
                "& .MuiFormLabel-root": {
                  fontSize: "1.4rem",
                },
                "& .MuiInputBase-input": {
                  fontSize: "1.8rem",
                },
              }}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              id="standard-basic"
              label="Amount"
              variant="outlined"
              color="primary"
              className="text-field"
              name="expenseAmount"
              value={expenseInfo.expenseAmount}
              onChange={handleChange}
              required
              sx={{
                "& .MuiFormLabel-root": {
                  fontSize: "1.4rem",
                },
                "& .MuiInputBase-input": {
                  fontSize: "1.8rem",
                },
              }}
            />
          </Grid>
          {budgetInfo.length !== 1 && (
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <FormControl fullWidth>
                <InputLabel sx={{ fontSize: 14 }}>Budget</InputLabel>
                <Select
                  label="Budget"
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: "1.8rem",
                    },
                  }}
                  name="associatedBudgetName"
                  value={expenseInfo.associatedBudgetId}
                  onChange={handleBudgetChange}
                  required
                >
                  {budgetInfo.map((budget: BudgetsInfoProperties) => {
                    return (
                      <MenuItem
                        key={budget.budgetId}
                        sx={{ fontSize: 12 }}
                        value={budget.budgetId}
                      >
                        {budget.budgetName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
          )}
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          className="create-expense-btn"
          variant="contained"
          onClick={() => handleClick()}
        >
          Create Expense
        </Button>
      </CardActions>
    </Card>
  );
};

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "./styles/index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface BudgetInfo {
  budgetName: string;
  budgetAmount: number;
}

export const CreateBudget = () => {
  const navigate = useNavigate();
  const [budgetInfo, setbudgetInfo] = useState<BudgetInfo>({
    budgetName: "",
    budgetAmount: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setbudgetInfo({ ...budgetInfo, [name]: value });
  };

  const handleClick = () => {
    console.log("budgetInfo", budgetInfo);
    // navigate("/dashboard");
  };

  return (
    <Card className="create-budget-card dashed-border">
      <CardContent>
        <Box className="create-budget-head">
          <Typography
            variant="h3"
            component="h3"
            color="text.secondary"
            gutterBottom
          >
            Create New Budget
          </Typography>
        </Box>
        <Grid container columnSpacing={2} rowSpacing={1}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TextField
              id="standard-basic"
              label="Budget name"
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
              name="budgetName"
              value={budgetInfo.budgetName}
              onChange={handleChange}
            />
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
              name="budgetAmount"
              value={budgetInfo.budgetAmount}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          className="create-budget-btn"
          onClick={() => handleClick()}
          variant="contained"
        >
          Create New Budget
        </Button>
      </CardActions>
    </Card>
  );
};

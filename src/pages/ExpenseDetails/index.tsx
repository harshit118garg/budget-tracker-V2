import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { BudgetTracker } from "../../components/BudgetTracker";
import { CreateExpense } from "../../components/CreateExpense";
import { ExpenseTracker } from "../../components/ExpenseTracker";
import "./styles/index.css";
import { useNavigate, useParams } from "react-router-dom";
import { useExpenseContext } from "../../context/ExpenseContext";
import { BudgetsInfoProperties } from "../../context/definations/types";

const ExpenseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { budgetInfo, expenseInfo } = useExpenseContext();

  const budget = budgetInfo.filter(
    (budget: BudgetsInfoProperties) => budget.budgetId === id
  )[0];

  return (
    <Container className="expense-details-container">
      <Box className="expense-details-box">
        <Box>
          <div className="expense-details-title">
            <Typography variant="h3" component="h2">
              {budget.budgetName.toLocaleUpperCase()} OVERVIEW
            </Typography>
            <Button
              variant="contained"
              className="back-btn"
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>
          </div>
        </Box>
        <Grid container rowSpacing={2} columnSpacing={3} sx={{ padding: 2 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <BudgetTracker budget={budget} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <CreateExpense />
          </Grid>
        </Grid>
        <Box>
          <ExpenseTracker expenses={[]} />
        </Box>
      </Box>
    </Container>
  );
};

export default ExpenseDetails;

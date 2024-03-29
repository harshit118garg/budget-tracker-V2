import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { BudgetTracker } from "../../components/BudgetTracker";
import { CreateExpense } from "../../components/CreateExpense";
import { ExpenseTracker } from "../../components/ExpenseTracker";
import "./styles/index.css";
import { useNavigate, useParams } from "react-router-dom";
import { useExpenseContext } from "../../context/ExpenseContext";
import {
  BudgetsInfoProperties,
  ExpenseInfoProperties,
} from "../../context/definations/types";

const ExpenseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { budgetInfo, expenseInfo } = useExpenseContext();

  const budget = budgetInfo.filter(
    (budget: BudgetsInfoProperties) => budget.budgetId === id
  )[0];

  const associatedBudgetExpenses = expenseInfo.filter(
    (expense: ExpenseInfoProperties) => expense.associatedBudgetId === id
  );

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
            <BudgetTracker budget={budget} showBudgetDeleteBtn={false} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <CreateExpense budgets={[budget]} />
          </Grid>
        </Grid>
        {associatedBudgetExpenses.length > 0 && (
          <Box>
            <ExpenseTracker
              expenses={associatedBudgetExpenses}
              showBudgetCol={false}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ExpenseDetails;

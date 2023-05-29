import { Box, Container, Grid, Typography } from "@mui/material";
import "../../App.css";
import { BudgetTracker } from "../../components/BudgetTracker";
import { CreateBudget } from "../../components/CreateBudget";
import { CreateExpense } from "../../components/CreateExpense";
import { ExpenseTracker } from "../../components/ExpenseTracker";
import PageHeader from "../../components/PageHeader";
import "./styles/index.css";
import { useExpenseContext } from "../../context/ExpenseContext";
import { BudgetsInfoProperties } from "../../context/definations/types";

const DashBoard = () => {
  const { expenseInfo, budgetInfo } = useExpenseContext();

  return (
    <Container className="page-container">
      <Box className="page-box">
        <PageHeader />
        <div className="dashboard-add-expenditure">
          <Grid container rowSpacing={2} columnSpacing={3} sx={{ padding: 2 }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <CreateBudget />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <CreateExpense budgets={budgetInfo} />
            </Grid>
          </Grid>
        </div>
        {budgetInfo && budgetInfo.length > 0 && (
          <Box className="dashboard-budget">
            <div className="page-title">
              <Typography variant="h3" component="h2">
                Existing Budgets
              </Typography>
            </div>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={3}
              sx={{ padding: 2 }}
            >
              {budgetInfo.map((budget: BudgetsInfoProperties) => {
                return (
                  <Grid key={budget.budgetId} item xs={12} sm={6} md={4} lg={4}>
                    <BudgetTracker budget={budget} showBudgetDeleteBtn={true} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        )}
        {expenseInfo && expenseInfo.length > 0 && (
          <Box className="dashboard-expenses">
            <div className="page-title">
              <Typography variant="h3" component="h2">
                Existing Expenses
              </Typography>
            </div>
            <ExpenseTracker expenses={expenseInfo} showBudgetCol={true} />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default DashBoard;

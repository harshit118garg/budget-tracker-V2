import { Box, Container, Grid, Typography } from "@mui/material";
import { BudgetTracker } from "../../components/BudgetTracker";
import { CreateBudget } from "../../components/CreateBudget";
import { CreateExpense } from "../../components/CreateExpense";
import { ExpenseTracker } from "../../components/ExpenseTracker";
import "./styles/index.css";

const DashBoard = () => {
  return (
    <Container className="dashboard-container">
      <Box className="dashboard-box">
        <Box className="dashboard-add-expenditure">
          <div className="dashboard-title">
            <Typography variant="h3" component="h2">
              Welcome Harshit
            </Typography>
          </div>
          <Grid container rowSpacing={2} columnSpacing={3} sx={{ padding: 2 }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <CreateBudget />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <CreateExpense />
            </Grid>
          </Grid>
        </Box>
        <Box className="dashboard-budget">
          <div className="dashboard-title">
            <Typography variant="h3" component="h2">
              Existing Budgets
            </Typography>
          </div>
          <Grid container rowSpacing={2} columnSpacing={3} sx={{ padding: 2 }}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <BudgetTracker />
            </Grid>
          </Grid>
        </Box>
        <Box className="dashboard-expenses">
          <div className="dashboard-title">
            <Typography variant="h3" component="h2">
              Existing Expenses
            </Typography>
          </div>
          <ExpenseTracker />
        </Box>
      </Box>
    </Container>
  );
};

export default DashBoard;

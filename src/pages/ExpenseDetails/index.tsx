import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { BudgetTracker } from "../../components/BudgetTracker";
import { CreateExpense } from "../../components/CreateExpense";
import { ExpenseTracker } from "../../components/ExpenseTracker";
import "./styles/index.css";

const ExpenseDetails = () => {
  return (
    <Container className="expense-details-container">
      <Box className="expense-details-box">
        <Box>
          <div className="expense-details-title">
            <Typography variant="h3" component="h2">
              Food Overview
            </Typography>
            <Button variant="contained" className="back-btn">
              Go Back
            </Button>
          </div>
        </Box>
        <Grid container rowSpacing={2} columnSpacing={3} sx={{ padding: 2 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <BudgetTracker />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <CreateExpense />
          </Grid>
        </Grid>
        <Box>
          <ExpenseTracker />
        </Box>
      </Box>
    </Container>
  );
};

export default ExpenseDetails;

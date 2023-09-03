import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useExpenseContext } from "../../context/ExpenseContext";
import {
  BudgetsInfoProperties,
  ExpenseInfoProperties,
} from "../../context/definations/types";
import ExpenseTrackerTable from "../ExpenseTrackerTable";
import "./styles/index.css";

interface ExpenseTrackerProperties {
  expenses: ExpenseInfoProperties[];
  showBudgetCol: boolean;
}

export const ExpenseTracker = ({
  expenses,
  showBudgetCol,
}: ExpenseTrackerProperties) => {
  const { budgetInfo } = useExpenseContext();

  return (
    <React.Fragment>
      <div className="expense-tracker-table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead
              sx={{
                bgcolor: "#A2D6F9",
              }}
            >
              <TableRow>
                <TableCell>Expense Name</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Date</TableCell>
                {showBudgetCol ? (
                  <TableCell align="center">Budget</TableCell>
                ) : (
                  <TableCell align="center">Edit Expense</TableCell>
                )}
                <TableCell align="center">Delete Expense</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses.map((expense: ExpenseInfoProperties) => {
                const associatedBudget =
                  budgetInfo &&
                  budgetInfo.length > 0 &&
                  budgetInfo.filter(
                    (budget: BudgetsInfoProperties) =>
                      budget.budgetId === expense.associatedBudgetId
                  );

                return (
                  <ExpenseTrackerTable
                    key={expense.expenseId}
                    expense={expense}
                    associatedBudget={associatedBudget}
                    showBudgetCol={showBudgetCol}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </React.Fragment>
  );
};

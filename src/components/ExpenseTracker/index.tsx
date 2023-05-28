import {
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./styles/index.css";
import {
  BudgetsInfoProperties,
  ExpenseInfoProperties,
} from "../../context/definations/types";
import { formatDateToLocaleString } from "../../utils";
import { useExpenseContext } from "../../context/ExpenseContext";

interface ExpenseTrackerProperties {
  expenses: ExpenseInfoProperties[];
}

export const ExpenseTracker = ({ expenses }: ExpenseTrackerProperties) => {
  const { budgetInfo, deleteExpense } = useExpenseContext();

  return (
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
              <TableCell align="center">Budget</TableCell>
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
                <TableRow key={expense.expenseId}>
                  <TableCell>
                    {expense.expenseName.toLocaleUpperCase()}
                  </TableCell>
                  <TableCell align="center">{expense.expenseAmount}</TableCell>
                  <TableCell align="center">
                    {formatDateToLocaleString(expense.createdAt)}
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      component={"p"}
                      label={associatedBudget[0].budgetName.toLocaleUpperCase()}
                      color="info"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Button>
                      <DeleteIcon
                        sx={{ fontSize: 30, color: "red" }}
                        onClick={() => deleteExpense(expense.expenseId)}
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

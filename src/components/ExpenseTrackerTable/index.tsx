import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button, Chip, Modal, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useExpenseContext } from "../../context/ExpenseContext";
import {
  BudgetsInfoProperties,
  ExpenseInfoProperties,
} from "../../context/definations/types";
import { formatDateToLocaleString } from "../../utils";
import EditAmount from "../EditAmount";
import React from "react";

interface ExpenseTrackerTable {
  expense: ExpenseInfoProperties;
  associatedBudget: BudgetsInfoProperties[];
  showBudgetCol: boolean;
}

const ExpenseTrackerTable = ({
  expense,
  associatedBudget,
  showBudgetCol,
}: ExpenseTrackerTable) => {
  const [openExpenseModal, setOpenExpenseModal] = useState(false);
  const { deleteExpense } = useExpenseContext();
  return (
    <React.Fragment>
      <TableRow>
        <TableCell>{expense.expenseName.toLocaleUpperCase()}</TableCell>
        <TableCell align="center">{expense.expenseAmount}</TableCell>
        <TableCell align="center">
          {formatDateToLocaleString(expense.createdAt)}
        </TableCell>
        {showBudgetCol ? (
          <TableCell align="center">
            <Link to={`budget/${expense.associatedBudgetId}`}>
              <Chip
                component={"p"}
                label={associatedBudget[0].budgetName.toLocaleUpperCase()}
                color="info"
              />
            </Link>
          </TableCell>
        ) : (
          <TableCell align="center">
            <Button onClick={() => setOpenExpenseModal(true)}>
              <ModeEditIcon sx={{ fontSize: 30, color: "red" }} />
            </Button>
          </TableCell>
        )}
        <TableCell align="center">
          <Button>
            <DeleteIcon
              sx={{ fontSize: 30, color: "red" }}
              onClick={() => deleteExpense(expense.expenseId)}
            />
          </Button>
          <Modal
            open={openExpenseModal}
            onClose={() => setOpenExpenseModal(false)}
          >
            <div>
              <EditAmount Info={expense} />
            </div>
          </Modal>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default ExpenseTrackerTable;

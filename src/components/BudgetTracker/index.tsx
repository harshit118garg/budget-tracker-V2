import {
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  Typography,
  styled,
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useExpenseContext } from "../../context/ExpenseContext";
import {
  BudgetsInfoProperties,
  ExpenseInfoProperties,
} from "../../context/definations/types";
import { theme } from "../../theme/theme";
import { formatCurrency } from "../../utils";
import "./styles/index.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import EditAmount from "../EditAmount";

interface BudgetTrackerProperties {
  budget: BudgetsInfoProperties;
  showBudgetDeleteBtn: boolean;
}

export const BudgetTracker = ({
  budget,
  showBudgetDeleteBtn,
}: BudgetTrackerProperties) => {
  const [openBudgetModal, setopenBudgetModal] = useState(false);
  const { expenseInfo, deleteBudget } = useExpenseContext();
  const navigate = useNavigate();

  const spentValue = expenseInfo.reduce(
    (acc: number, expense: ExpenseInfoProperties) => {
      if (expense.associatedBudgetId !== budget.budgetId) return acc;
      return (acc += expense.expenseAmount);
    },
    0
  );
  const budgetAmount = budget.budgetAmount;
  const remainingValue = budgetAmount - spentValue;
  const progressBarValue = (spentValue / budgetAmount) * 100;

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 600 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:
        progressBarValue < 33
          ? "#05299E"
          : progressBarValue < 66
          ? "#FFC600"
          : "#E27396",
    },
  }));

  const handleDeleteBudget = () => {
    deleteBudget(budget.budgetId);
    navigate("/dashboard");
  };

  return (
    <React.Fragment>
      <Card className="dotted-border">
        <CardContent>
          <div className="top">
            <Typography
              variant="h5"
              component="h4"
              sx={{ bgcolor: "#5B1865", color: "#fff" }}
              gutterBottom
            >
              {budget.budgetName.toLocaleUpperCase()}
            </Typography>
            <Typography
              variant="h5"
              component="h4"
              sx={{ bgcolor: "#5D576B", color: "#fff" }}
              gutterBottom
            >
              {formatCurrency(budgetAmount)}
            </Typography>
          </div>
          <div className="middle">
            <BorderLinearProgress
              variant="determinate"
              value={progressBarValue}
            />
          </div>
          <div className="bottom">
            <Typography
              variant="h5"
              component="h4"
              sx={{ bgcolor: "#5B1865", color: "#fff" }}
              gutterBottom
            >
              {formatCurrency(spentValue)} Spent
            </Typography>
            <Typography
              variant="h5"
              component="h4"
              sx={{ bgcolor: "#5D576B", color: "#fff" }}
              gutterBottom
            >
              {formatCurrency(remainingValue)} Remaining
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          {showBudgetDeleteBtn ? (
            <Link to={`budget/${budget.budgetId}`}>
              <Button
                fullWidth
                variant="contained"
                color="warning"
                sx={{ fontSize: 12 }}
              >
                View Details
              </Button>
            </Link>
          ) : (
            <>
              <Button
                fullWidth
                variant="contained"
                color="warning"
                sx={{ fontSize: 12 }}
                onClick={() => setopenBudgetModal(true)}
              >
                Edit Budget
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="warning"
                sx={{ fontSize: 12 }}
                onClick={handleDeleteBudget}
              >
                Delete Budget
              </Button>
            </>
          )}
        </CardActions>
      </Card>
      <Modal open={openBudgetModal} onClose={() => setopenBudgetModal(false)}>
        <div>
          <EditAmount Info={budget} setModal={setopenBudgetModal} />
        </div>
      </Modal>
    </React.Fragment>
  );
};

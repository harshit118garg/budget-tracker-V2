import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import "./styles/index.css";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { theme } from "../../theme/theme";
import { formatCurrency } from "../../utils";

export const BudgetTracker = () => {
  const spentValue = 50;
  const budgetValue = 300;
  const remainingValue = budgetValue - spentValue;
  const progressBarValue = (spentValue / budgetValue) * 100;

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

  return (
    <Card className="dotted-border">
      <CardContent>
        <div className="top">
          <Typography
            variant="h5"
            component="h4"
            sx={{ bgcolor: "#5B1865", color: "#fff" }}
            gutterBottom
          >
            Food
          </Typography>
          <Typography
            variant="h5"
            component="h4"
            sx={{ bgcolor: "#5D576B", color: "#fff" }}
            gutterBottom
          >
            {formatCurrency(budgetValue)}
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
        <Button
          fullWidth
          variant="contained"
          color="warning"
          sx={{ fontSize: 12 }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

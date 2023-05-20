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

export const ExpenseTracker = () => {
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
            <TableRow>
              <TableCell>{"tea"}</TableCell>
              <TableCell align="center">{20}</TableCell>
              <TableCell align="center">{"18-05-2023"}</TableCell>
              <TableCell align="center">
                <Chip component={"p"} label="Food" color="info" />
              </TableCell>
              <TableCell align="center">
                <Button>
                  <DeleteIcon sx={{ fontSize: 25, color: "red" }} />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

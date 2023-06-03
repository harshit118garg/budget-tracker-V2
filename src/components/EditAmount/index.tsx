import {
  Button,
  Card,
  Box,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "./styles/index.css";
import {
  BudgetsInfoProperties,
  ExpenseInfoProperties,
} from "../../context/definations/types";

interface EditAmountProperties {
  Info: BudgetsInfoProperties | ExpenseInfoProperties;
}

const EditAmount = ({ Info }: EditAmountProperties) => {
  console.log("info ---->", Info);
  return (
    <>
      <Card className="edit-container">
        <CardContent>
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box>
                <Typography
                  variant="h3"
                  component="h3"
                  color="text.secondary"
                  gutterBottom
                >
                  Create New Budget
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TextField
                id="standard-basic"
                label="Amount"
                variant="outlined"
                color="primary"
                className="text-field"
                required
                sx={{
                  "& .MuiFormLabel-root": {
                    fontSize: "1.4rem",
                  },
                  "& .MuiInputBase-input": {
                    fontSize: "1.8rem",
                  },
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button variant="contained" fullWidth>
            Update Budget
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default EditAmount;

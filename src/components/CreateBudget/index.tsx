import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import "./styles/index.css";

export const CreateBudget = () => {
  return (
    <Card className="create-budget-card dashed-border">
      <CardContent>
        <Box className="create-budget-head">
          <Typography
            variant="h3"
            component="h3"
            color="text.secondary"
            gutterBottom
          >
            Create New Budget
          </Typography>
        </Box>
        <Grid container columnSpacing={2} rowSpacing={1}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TextField
              id="standard-basic"
              label="Budget name"
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
        <Button fullWidth className="create-budget-btn" variant="contained">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

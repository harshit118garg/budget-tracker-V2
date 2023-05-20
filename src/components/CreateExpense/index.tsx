import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import "./styles/index.css";
  
  export const CreateExpense = () => {
    return (
      <Card className="create-expense-card dashed-border">
        <CardContent>
          <Box className="create-expense-head">
            <Typography
              variant="h3"
              component="h3"
              color="text.secondary"
              gutterBottom
            >
              Create New expense
            </Typography>
          </Box>
          <Grid container columnSpacing={2} rowSpacing={1}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                id="standard-basic"
                label="expense name"
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
            <Grid item lg={6} md={6} sm={12} xs={12}>
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
            {false && <Grid item lg={12} md={12} sm={12} xs={12}>
              <FormControl fullWidth>
                <InputLabel sx={{ fontSize: 14 }}>Budget</InputLabel>
                <Select
                  label="Budget"
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: "1.8rem",
                    },
                  }}
                  required
                >
                  <MenuItem sx={{ fontSize: 12 }} value={10}>
                    Ten
                  </MenuItem>
                  <MenuItem sx={{ fontSize: 12 }} value={20}>
                    Twenty
                  </MenuItem>
                  <MenuItem sx={{ fontSize: 12 }} value={30}>
                    Thirty
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>}
          </Grid>
        </CardContent>
        <CardActions>
          <Button fullWidth className="create-expense-btn" variant="contained">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  };
  
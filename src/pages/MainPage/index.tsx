import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainPage from "../../assets/main-page.svg";
import { useExpenseContext } from "../../context/ExpenseContext";
import { notificationContainer } from "../../utils/notification";
import "./styles/index.css";

const MainPage = () => {
  const [userName, setUserName] = useState("");
  const { setUserNameValue, isLoggedIn, budgetInfo } = useExpenseContext();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleOnClick = () => {
    if (userName) {
      setUserNameValue(userName);
      setUserName("");
      notificationContainer({ action: "success", userName, theme: "dark" });
    } else {
      notificationContainer({ action: "error", theme: "light" });
    }
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row", sm: "column", xl: "row" }}
      spacing={{ xs: 1, sm: 2, md: 3, xl: 4 }}
      sx={{ paddingX: 12 }}
      className="main-page"
    >
      <div className="left">
        <Stack direction="column" spacing={2}>
          <Typography variant="h2" component="h3" className="head-text">
            Take Control of your <span className="highlighted-text">Money</span>
          </Typography>
          <Typography variant="h3" component="h5" className="head-sub-text">
            Do not save what is left after spending, <br />
            but spend what is left after saving.
          </Typography>
          {!isLoggedIn ? (
            <Box
              component="form"
              noValidate
              autoComplete="off"
            >
              <Stack direction="column" spacing={2}>
                <TextField
                  id="standard-basic"
                  label="Enter Your Name"
                  variant="outlined"
                  color="secondary"
                  required
                  value={userName}
                  onChange={handleChange}
                  sx={{
                    "& .MuiFormLabel-root": {
                      fontSize: "1.5rem",
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "1.8rem",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => handleOnClick()}
                >
                  Create Account
                </Button>
              </Stack>
            </Box>
          ) : (
            <Stack direction="column">
              {budgetInfo.length > 0 ? (
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => navigate("/dashboard")}
                >
                  Go to DashBoard
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => navigate("/createBudget")}
                >
                  Create Budget
                </Button>
              )}
            </Stack>
          )}
        </Stack>
      </div>
      <div className="right">
        <img src={mainPage} alt="main-page" />
      </div>
    </Stack>
  );
};

export default MainPage;

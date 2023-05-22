import { Button, ButtonProps, Stack, Typography, styled } from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import { useExpenseContext } from "../../context/ExpenseContext";
import "./styles/index.css";
import { useNavigate } from "react-router-dom";

const PageHeader = () => {
  const { userName } = useExpenseContext();
  const navigate = useNavigate();

  const NavigationButton = styled(Button)<ButtonProps>(() => ({
    color: orange[50],
    backgroundColor: grey[500],
    "&:hover": {
      color: orange[50],
      backgroundColor: grey[900],
    },
  }));

  return (
    <Stack>
      <div className="page-title">
        <Typography variant="h3" component="h2">
          Welcome {userName}
        </Typography>
      </div>
      <div className="page-nav-btns">
        <div className="backButton">
          <NavigationButton
            variant="contained"
            fullWidth
            size="medium"
            onClick={() => navigate(-1)}
          >
            Prev
          </NavigationButton>
        </div>
        <div className="nextButton">
          <NavigationButton
            variant="contained"
            fullWidth
            size="medium"
            onClick={() => navigate(1)}
          >
            Next
          </NavigationButton>
        </div>
      </div>
    </Stack>
  );
};

export default PageHeader;

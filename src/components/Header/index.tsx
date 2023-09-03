import {
  AppBar,
  Avatar,
  Button,
  Chip,
  IconButton,
  Stack,
  StyledEngineProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import headerImg from "../../assets/header-img.svg";
import { useExpenseContext } from "../../context/ExpenseContext";
import "./styles/index.css";

const Header = () => {
  const { userName, deleteUserName, isLoggedIn } = useExpenseContext();
  const navigate = useNavigate();
  const handleLogOutBtnClick = () => {
    deleteUserName();
    navigate("/");
  };

  return (
    <StyledEngineProvider injectFirst>
      <AppBar className="header" position="static">
        <Toolbar className="header-toolbar">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Link to="/">
              <Stack direction="row" spacing={1} className="label">
                <Avatar
                  alt="Remy Sharp"
                  src={headerImg}
                  className="avatar"
                  variant="square"
                />
                <Chip
                  label="Expense Tracker"
                  color="error"
                  size="small"
                  className="chip-label"
                />
              </Stack>
            </Link>
          </IconButton>
          {isLoggedIn && (
            <>
              <Typography variant="h3" component="h2" className="userName">
                {userName}
              </Typography>
              <Button
                size="small"
                className="logoutBtn"
                variant="contained"
                onClick={() => handleLogOutBtnClick()}
              >
                LogOut
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </StyledEngineProvider>
  );
};

export default Header;

import {
  AppBar,
  Avatar,
  Button,
  Chip,
  Stack,
  IconButton,
  StyledEngineProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import headerImg from "../../assets/header-img.svg";
import "./styles/index.css";
import { useExpenseContext } from "../../context/ExpenseContext";

const Header = () => {
  const { userName, deleteUserName } = useExpenseContext();

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
                  sx={{ width: 56, height: 56 }}
                  variant="square"
                />
                <Chip label="Expense Tracker" color="error" className="chip-label" />
              </Stack>
            </Link>
          </IconButton>
          {userName && (
            <>
              <Typography
                variant="h3"
                component="h2"
                sx={{ color: "#EAF0CE", textTransform: "uppercase" }}
              >
                {userName}
              </Typography>
              <Button
                className="logoutBtn"
                variant="contained"
                onClick={() => deleteUserName()}
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

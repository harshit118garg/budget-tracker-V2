import { ThemeProvider } from "@mui/material";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProtectedRoute from "./routes/ProtectedRoute";
/* MUI theme */
import { ToastContainer } from "react-toastify";
import { ExpenseContextProvider } from "./context/ExpenseContext";
import { theme } from "./theme/theme";
/* Pages */
const MainPage = lazy(() => import("./pages/MainPage"));
const BudgetPage = lazy(() => import("./pages/BudgetPage"));
const DashBoard = lazy(() => import("./pages/Dashboard"));
const ExpenseDetails = lazy(() => import("./pages/ExpenseDetails"));

function App() {
  return (
    <>
      <Suspense>
        <ExpenseContextProvider>
          <ThemeProvider theme={theme}>
            <div className="App">
              <Header />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="createBudget" element={<BudgetPage />} />
                  <Route path="dashboard" element={<DashBoard />} />
                  <Route path="dashboard/budget/:id" element={<ExpenseDetails />} />
                </Route>
              </Routes>
              <ToastContainer />
            </div>
          </ThemeProvider>
        </ExpenseContextProvider>
      </Suspense>
    </>
  );
}

export default App;

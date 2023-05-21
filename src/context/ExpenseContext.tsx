import { useState, createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorgae";
import {
  BudgetsInfoProperties,
  ExpenseContextProperties,
  ExpenseInfoProperties,
} from "./definations/types";

const expenseContext = createContext({} as any);

export function useExpenseContext() {
  return useContext(expenseContext);
}

export function ExpenseContextProvider({ children }: ExpenseContextProperties) {
  const [userName, setUserName] = useLocalStorage<string>("userName", "");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [budgetInfo, setBudgetInfo] = useLocalStorage<BudgetsInfoProperties[]>(
    "budgets",
    []
  );
  const [expenseInfo, setExpenseInfo] = useLocalStorage<
    ExpenseInfoProperties[]
  >("expenses", []);

  const setUserNameValue = (value: string) => {
    setUserName(value);
    setIsLoggedIn(true);
  };

  const deleteUserName = () => {
    setUserName("");
    setIsLoggedIn(false);
  };

  return (
    <expenseContext.Provider
      value={{
        userName,
        setUserNameValue,
        isLoggedIn,
        budgetInfo,
        expenseInfo,
        deleteUserName,
      }}
    >
      {children}
    </expenseContext.Provider>
  );
}

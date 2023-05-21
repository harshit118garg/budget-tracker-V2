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
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    userName !== "" || userName !== null
  );
  const [budgetInfo, setBudgetInfo] = useLocalStorage<BudgetsInfoProperties[]>(
    "budgets",
    []
  );
  const [expenseInfo, setExpenseInfo] = useLocalStorage<
    ExpenseInfoProperties[]
  >("expenses", []);

  const setUserNameValue = (value: string) => {
    setIsLoggedIn(true);
    setUserName(value);
  };

  const handleBudgetInfo = (budget: BudgetsInfoProperties) => {
    const newBudget = {
      budgetName: budget.budgetName,
      budgetAmount: budget.budgetAmount,
      createdAt: Date.now(),
      budgetId: crypto.randomUUID(),
    };
    const existingBudgets = [...budgetInfo];
    console.log("newBudget existingBudgets", newBudget, existingBudgets);
    existingBudgets.push(newBudget);
    setBudgetInfo(existingBudgets);
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
        handleBudgetInfo,
        budgetInfo,
        expenseInfo,
        deleteUserName,
      }}
    >
      {children}
    </expenseContext.Provider>
  );
}

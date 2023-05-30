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
    userName === "" || userName === null ? false : true
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
      budgetAmount: Number(budget.budgetAmount),
      createdAt: Date.now(),
      budgetId: crypto.randomUUID(),
    };
    const existingBudgets = [...budgetInfo];
    existingBudgets.push(newBudget);
    setBudgetInfo(existingBudgets);
  };

  const handleExpenseInfo = (expense: ExpenseInfoProperties) => {
    const newExpense = {
      expenseName: expense.expenseName,
      expenseAmount: Number(expense.expenseAmount),
      createdAt: Date.now(),
      associatedBudgetId: expense.associatedBudgetId,
      expenseId: crypto.randomUUID(),
    };
    const existingExpenses = [...expenseInfo];
    existingExpenses.push(newExpense);
    setExpenseInfo(existingExpenses);
  };

  const deleteBudget = (BId: string) => {
    const budgetDeleted = budgetInfo.filter(
      (budget) => budget.budgetId === BId
    )[0];
    const existingBudgets = [...budgetInfo];
    const remainingBudgets = existingBudgets.filter(
      (budget) => budget.budgetId !== budgetDeleted.budgetId
    );
    const existingExpenses = [...expenseInfo];
    const remainingExpenses = existingExpenses.filter(
      (expense) => expense.associatedBudgetId !== budgetDeleted.budgetId
    );
    setBudgetInfo(remainingBudgets);
    setExpenseInfo(remainingExpenses);
  };

  const deleteExpense = (EId: string) => {
    setExpenseInfo((prevState) =>
      prevState.filter((expense) => expense.expenseId !== EId)
    );
  };

  const deleteUserName = () => {
    setUserName("");
    setBudgetInfo([]);
    setExpenseInfo([]);
    setIsLoggedIn(false);
  };

  return (
    <expenseContext.Provider
      value={{
        userName,
        setUserNameValue,
        isLoggedIn,
        handleBudgetInfo,
        handleExpenseInfo,
        budgetInfo,
        expenseInfo,
        deleteUserName,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </expenseContext.Provider>
  );
}

export interface ExpenseContextProperties {
  children: JSX.Element | JSX.Element[];
}

export interface BudgetsInfoProperties {
  budgetName: string;
  budgetAmount: number;
  createdAt: number;
  budgetId: string;
}

export interface ExpenseInfoProperties {
  expenseName: string;
  expenseAmount: number;
  createdAt: number;
  associatedBudgetId: string;
  expenseId: string;
}

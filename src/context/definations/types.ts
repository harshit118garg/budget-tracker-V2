export interface ExpenseContextProperties {
  children: JSX.Element | JSX.Element[];
}

export interface BudgetsInfoProperties {
  budgetName: string;
  budgetAmount: number;
  createdAt: string;
  budgetId: string;
}

export interface ExpenseInfoProperties {
  expenseName: string;
  expenseAmount: number;
  createdAt: string;
  budgetId: string;
  expenseId: string;
}

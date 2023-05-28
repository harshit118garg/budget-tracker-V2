export const wait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 3500));

export const formatCurrency = (amount: number) => {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: "INR",
  });
};

export const formatDateToLocaleString = (date: number) =>
  new Date(date).toLocaleDateString();

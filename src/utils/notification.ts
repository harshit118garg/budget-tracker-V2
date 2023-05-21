import { Theme, toast } from "react-toastify";

interface notificationPayload {
  action: string;
  userName?: string;
  theme?: Theme | undefined;
}

export const notificationContainer = (payload: notificationPayload) => {
  const { action, userName, theme } = payload;
  switch (action) {
    case "success":
      toast.success(`you have created your account ${userName}`, {
        autoClose: 2500,
        theme: theme,
      });
      break;

    case "info":
      toast.success(`you have created a budget`, {
        autoClose: 2500,
        theme: theme,
      });
      break;

    case "error":
      toast.error(`you have some problem in creating your account`, {
        autoClose: 2500,
        theme: theme,
        type: "error",
      });
      break;

    default:
      break;
  }
};

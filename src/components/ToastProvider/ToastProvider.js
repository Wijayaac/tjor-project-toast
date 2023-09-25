import React, { createContext, useState } from "react";
import useKeydown from "../../hooks/use-keydown";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const value = { toasts, createToast, dismissToast };

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeydown("Escape", handleEscape);

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((item) => item.id !== id);

    setToasts(nextToasts);
  }

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;

import React, { useContext } from "react";

import { ToastContext } from "../ToastProvider";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts } = useContext(ToastContext);
  return (
    <ol className={styles.wrapper} role='region' aria-live='polite' aria-label='Notification'>
      {toasts.map(({ id, variant, message }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} id={id}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

import React, { useState } from "react";

import Button from "../Button";
import Toast from "../Toast";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = useState();
  const [message, setMessage] = useState("");
  const [toasts, setToasts] = useState([]);

  const addToast = (e) => {
    e.preventDefault();

    const newToast = {
      id: Math.random(),
      variant,
      message,
    };

    setToasts([...toasts, newToast]);
  };

  const handleDismiss = (id) => {
    const newToasts = toasts.filter((item) => id !== item.id);
    setToasts(newToasts);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      {toasts.length > 0 && <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />}
      <form className={styles.controlsWrapper} onSubmit={addToast}>
        <div className={styles.row}>
          <label htmlFor='message' className={styles.label} style={{ alignSelf: "baseline" }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id='message' className={styles.messageInput} value={message} onChange={(event) => setMessage(event.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`;
              return (
                <label htmlFor={id} key={id}>
                  <input id={id} type='radio' name='variant' checked={variant === option} value={option} onChange={(event) => setVariant(event.target.value)} />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button disabled={!variant}>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;

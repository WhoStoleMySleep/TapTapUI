import React from "react";
import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";

/** Интерактивная карточка */
export const Input = ({
  children,
  type = "text",
  className = "",
  UI = "standard",
  noDarkMode = false,
  ...attributes
}: InputProps) => {
  const acceptableUI = ["standard", "primary"];

  return (
    <>
      {!acceptableUI.find((ui) => ui === UI) || UI === "standard" ? (
        <input className={className} type={type} {...attributes} />
      ) : (
        <input
          className={styles.input + " " + className}
          type={type}
          data-dark-mode={!noDarkMode}
          {...attributes}
        />
      )}
    </>
  );
};

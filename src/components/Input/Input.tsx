import React from "react";
import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";

/** Интерактивная карточка */
export const Input: ({
  children,
  type,
  className,
  UI,
  ...attributes
}: InputProps) => React.JSX.Element = ({ children, type, className, UI, ...attributes }) => (
  <>
    {UI === "standard" ?
      <input className={className} type={type} {...attributes} /> :
      <input className={styles.input + " " + className} type={type} {...attributes} />
    }
  </>
);

import React from "react";
import styles from "./Text.module.scss";

/** Интерактивная карточка */
export const Text: ({
  children,
}: {
  children: string;
}) => React.JSX.Element = ({ children }) => (
  <p className={styles.text}>{children}</p>
);

import React from "react";
import styles from "./Title.module.scss";

/** Интерактивная карточка */
export const Title: ({
  children,
}: {
  children: string;
}) => React.JSX.Element = ({ children }) => (
  <h1 className={styles.title}>{children}</h1>
);

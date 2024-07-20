import React from "react";
import styles from "./Test.module.scss";

/** Интерактивная карточка */
export const Test: ({
  title,
  onClick,
}: {
  title: any;
  onClick: any;
}) => React.JSX.Element = ({ title, onClick }) => (
  <div className={styles.card} onClick={onClick}>
    <span>{title}</span>
  </div>
);

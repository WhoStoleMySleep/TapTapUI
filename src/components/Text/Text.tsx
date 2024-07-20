import React from "react";
import styles from "./Text.module.scss";

/** Интерактивная карточка */
export const Text: ({ content }: { content: string }) => React.JSX.Element = ({
  content,
}) => <p className={styles.text}>{content}</p>;

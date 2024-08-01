import React from "react";
import styles from "./Text.module.scss";
import { TextProps } from "./Text.types";

export const Text = ({
  children,
  UI = "standard",
  className = "",
  noDarkMode = false,
  ...attributes
}: TextProps) => {
  return (
    <>
      {UI === "standard" ? (
        <p className={className} {...attributes}>
          {children}
        </p>
      ) : (
        <p
          className={styles.text + " " + className}
          {...attributes}
          data-dark-mode={!noDarkMode}
        >
          {children}
        </p>
      )}
    </>
  );
};

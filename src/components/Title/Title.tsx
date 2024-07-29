import React from "react";
import styles from "./Title.module.scss";
import { TitleProps } from "./Title.types";

/** Интерактивная карточка */
export const Title = ({
  children,
  UI = "standard",
  Level = "h1",
  className = "",
  noDarkMode = false,
  ...attributes
}: TitleProps) => {
  const acceptableUI = ["standard", "primary"];

  return (
    <>
      {!acceptableUI.find((ui) => ui === UI) || UI === "standard" ? (
        <Level className={className} {...attributes}>
          {children}
        </Level>
      ) : (
        <Level
          className={`${styles.title} ${className}`}
          {...attributes}
          data-dark-mode={!noDarkMode}
        >
          {children}
        </Level>
      )}
    </>
  );
};

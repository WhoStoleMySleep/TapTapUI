import React from "react";
import styles from "./LinkTo.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { LinkToProps } from "./LinkTo.types";

/** Интерактивная карточка */
export const LinkTo: ({
  children,
  to,
  type,
  active,
  ...attributes
}: LinkToProps) => React.JSX.Element = ({
  children,
  to,
  type,
  active,
  ...attributes
}) => (
  <>
    {type === "standard" ? (
      <Link to={to} {...attributes}>
        {children}
      </Link>
    ) : (
      <Link
        className={classNames(
          styles["link-to"],
          styles[`link-to--${type.split("--")[0] ?? "primary"}`],
          styles[`link-to--${type ?? "primary"}`],
          active ? styles[`link-to--${type ?? "primary"}--active`] : "",
        )}
        to={to}
        {...attributes}
      >
        <span className={classNames(styles["link-to__text"])}>{children}</span>
      </Link>
    )}
  </>
);

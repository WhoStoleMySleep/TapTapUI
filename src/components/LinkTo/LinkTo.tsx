import React from "react";
import styles from "./LinkTo.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

/** Интерактивная карточка */
export const LinkTo: ({
  children,
  to,
  type,
  active,
}: {
  children: string;
  to: string;
  type?:
    | "standard"
    | "primary"
    | "button"
    | "button--primary"
    | "button--red"
    | "button--blue";
  active?: boolean;
}) => React.JSX.Element = ({ children, to, type, active }) => (
  <Link
    className={
      type !== "standard"
        ? classNames(
            styles["link-to"],
            styles[`link-to--${type.split("--")[0] ?? "primary"}`],
            styles[`link-to--${type ?? "primary"}`],
            active ? styles[`link-to--${type ?? "primary"}--active`] : "",
          )
        : ""
    }
    to={to}
  >
    <span className={classNames(styles["link-to__text"])}>{children}</span>
  </Link>
);

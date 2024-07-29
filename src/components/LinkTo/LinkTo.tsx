import React from "react";
import styles from "./LinkTo.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { LinkToProps } from "./LinkTo.types";

export const LinkTo = ({
  children,
  to,
  UI,
  noDarkMode,
  active,
  className,
  ...attributes
}: LinkToProps): React.JSX.Element => {
  const acceptableUIs = [
    "standard",
    "primary",
    "button",
    "button--primary",
    "button--red",
    "button--blue",
  ];

  return (
    <>
      {!acceptableUIs.find((ui) => ui === UI) || UI === "standard" ? (
        <Link to={to} className={className} {...attributes}>
          {children}
        </Link>
      ) : (
        <Link
          className={classNames(
            className,
            styles["link-to"],
            styles[`link-to--${UI.split("--")[0]}`],
          )}
          data-dark-mode={!noDarkMode}
          data-theme={UI}
          data-active={active}
          to={to}
          {...attributes}
        >
          <span className={classNames(styles["link-to__text"])}>
            {children}
          </span>
        </Link>
      )}
    </>
  );
};

LinkTo.defaultProps = {
  UI: "standard",
  noDarkMode: false,
  active: false,
  className: "",
};

import React from "react";
import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.types";
import { Link } from "react-router-dom";

/** Интерактивная карточка */
export const Header = ({
  children,
  className = {
    header: "",
    headerWrapper: "",
    headerLogo: "",
    headerLogoImage: "",
    headerNavigation: "",
    headerNavigationList: "",
    headerNavigationElement: "",
    headerLightmode: "",
  },
  logo = {
    url: "",
    alt: "",
    text: "",
  },
  headerLinks = [
    {
      url: "",
      text: "",
      attributes: {
        onClick: () => {
          alert("Hello!");
        },
        href: "",
      },
    },
  ],
  UI = "standard",
}: HeaderProps) => {
  const acceptableUI = ["standard", "primary"];
  // const [value, setValue] = useState(children);

  return (
    <>
      {!acceptableUI.find((ui) => ui === UI) || UI === "standard" ? (
        <header className={className.header}>
          <span className={className.headerWrapper}>
            {logo.url ||
              (logo.text && (
                <Link to="/" className={className.headerLogo}>
                  {logo.url && (
                    <img
                      src={logo.url}
                      alt={logo.alt}
                      className={className.headerLogoImage}
                      loading="lazy"
                    />
                  )}
                  {logo.text && (
                    <p className={styles["header__logo-text"]}>{logo.text}</p>
                  )}
                </Link>
              ))}

            <nav className={className.headerNavigation}>
              <ul className={className.headerNavigationList}>
                {headerLinks.map((link) => (
                  <li className={className.headerNavigationElement}>
                    <Link
                      to={link.url}
                      className={className.headerLightMode}
                      {...link.attributes}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </span>
        </header>
      ) : (
        <div>asdasdasd</div>
      )}
    </>
  );
};

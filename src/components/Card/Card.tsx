import React from "react";
import styles from "./Card.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { CardProps } from "./Card.types";
import { Input } from "../Input";
import { LinkTo } from "../LinkTo";

export const Card = ({
  // children,
  // to,
  // UI = "standard",
  // noDarkMode = false,
  // active = false,
  // className = "",

  id,
  headImage,
  altImage,
  themeName,
  price,
  conciseContent,
  datePublish,
  tags,
  button,
}: CardProps): React.JSX.Element => {
  return (
    <div className={styles["blog-card"]}>
      <span className={styles["blog-card__head-image"]} style={{backgroundImage: `url(${headImage})`}}></span>
      <img src={headImage} alt={altImage} className={styles["blog-card__head-image"]} loading='lazy' />
      <div className={styles["blog-card__text-wrapper"]}>
        <span className={styles["blog-card__title-container"]}>
          <h2 className={styles["blog-card__theme-name"]}>{themeName[0]}</h2>
          {price && 
            <p className={styles["blog-card__price"]}>{price}</p>
          }
        </span>
        <p className={styles["blog-card__concise-content"]}>{conciseContent[0]}</p>
        <p className={styles["blog-card__date-publish"]}>{datePublish}</p>
        <ul className={styles["blog-card__tag-list"]}>
          {tags.map((element, id) => 
            <li key={id} className={styles["blog-card__tag"]} style={{backgroundColor: 'red'}} /* style={{"backgroundColor": colors[colorN[id]]}} */>
              <p className={styles["blog-card__tag-name"]}>
                {element}
              </p>
            </li>
          )}
        </ul>
      </div>
      {button && 
        <LinkTo className={styles["blog-card__button"]} UI={button.UI} active={true} to={button.link}>{button.text}</LinkTo>
      }
    </div>
  );
};

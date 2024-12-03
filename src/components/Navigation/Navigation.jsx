import { useState } from "react";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [stateNavigation, setStateNavigation] = useState("map");
  return (
    <nav>
      <ul className={styles.navigation}>
        <Link to="" className={styles.navigation__link}>
          <li
            onClick={() => setStateNavigation("map")}
            className={`${
              stateNavigation === "map"
                ? `${styles.navigation__nav} ${styles.navigation__navActive}`
                : styles.navigation__nav
            } `}
          >
            Карта
          </li>
        </Link>
        <Link to="/achievements" className={styles.navigation__link}>
          <li
            onClick={() => setStateNavigation("achievements")}
            className={`${
              stateNavigation === "achievements"
                ? `${styles.navigation__nav} ${styles.navigation__navActive}`
                : styles.navigation__nav
            } `}
          >
            Достижения
          </li>
        </Link>
        <Link to="/blog" className={styles.navigation__link}>
          <li
            onClick={() => setStateNavigation("blog")}
            className={`${
              stateNavigation === "blog"
                ? `${styles.navigation__nav} ${styles.navigation__navActive}`
                : styles.navigation__nav
            } `}
          >
            Блог
          </li>
        </Link>
      </ul>
    </nav>
  );
}

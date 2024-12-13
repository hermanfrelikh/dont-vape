import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import { navigationTypes } from "../../data";
import { useSelector, useDispatch } from "react-redux";
import { setStateNavigation } from "../../redux/slices/navigationSlice";

export default function Navigation() {
  const stateNavigation = useSelector((state) => state.navigation.current);
  const dispatch = useDispatch();
  const onClickNavigation = (name) => {
    dispatch(setStateNavigation(name));
  };
  return (
    <nav>
      <ul className={styles.navigation}>
        {navigationTypes.map((navigationType) => {
          return (
            <Link
              key={navigationType.id}
              to={navigationType.link}
              className={styles.navigation__link}
              onClick={() => onClickNavigation(navigationType.name)}
            >
              <li
                className={`${
                  stateNavigation === `${navigationType.name}`
                    ? `${styles.navigation__nav} ${styles.navigation__navActive}`
                    : styles.navigation__nav
                } `}
              >
                {navigationType.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

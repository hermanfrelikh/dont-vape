import { useState } from "react";
import logo from "../../../public/img/logo.png";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

import Menu from "../Menu/Menu";

export default function Header() {
  const [headerIcon, setHeaderIcon] = useState("menu");
  const [stateMenu, setStateMenu] = useState(false);
  return (
    <header className={styles.header}>
      {headerIcon === "menu" ? (
        <>
          <button
            onClick={() => setStateMenu(!stateMenu)}
            className={styles.header__menuBtn}
          >
            <span
              className={`${
                styles.header__icon
              } ${"material-symbols-outlined"}`}
            >
              menu
            </span>
          </button>
        </>
      ) : (
        <></>
      )}
      {headerIcon === "back" ? (
        <>
          <button onClick={()=>setHeaderIcon("menu")} className={styles.header__backBtn}>
            <Link to="">
              <span
                className={`${
                  styles.header__icon
                } ${"material-symbols-outlined"}`}
              >
                arrow_back_ios
              </span>
            </Link>
          </button>
        </>
      ) : (
        <></>
      )}

      <Link className={styles.header__logoLink} to="">
        <img onClick={()=>setHeaderIcon("menu")} className={styles.header__logo} src={logo} alt="Не парю" />
      </Link>

      {stateMenu && <Menu setStateMenu={setStateMenu} headerIcon={headerIcon} setHeaderIcon={setHeaderIcon} />}
    </header>
  );
}

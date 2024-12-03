import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./Main.module.scss";

export default function Main() {

  return (
    <main className={styles.main}>
      <Navigation />      
      <Outlet />
    </main>
  );
}

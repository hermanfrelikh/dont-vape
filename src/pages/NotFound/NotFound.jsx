import styles from "./NotFound.module.scss"
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
      <section className={styles.notFound}>
        <h1>Страница не найдена :(</h1>
        <Link className={styles.notFound__link} to="/"><p>На главную</p></Link>
        
      </section>
    );
  }
  
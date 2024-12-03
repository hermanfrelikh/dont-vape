import styles from "./Map.module.scss";
import Steps from "../../components/Steps/Steps";

export default function Map() {
  return (
    <section className={styles.map}>
      <h1 className={styles.map__title}>Карта</h1>
      <Steps />
    </section>
  );
}

import styles from "./Achievements.module.scss";
import Steps from "../../components/Steps/Steps";

export default function Achievements() {
  return (
    <section className={styles.achievements}>
      <h1 className={styles.achievements__title}>Достижения</h1>
      <Steps />
    </section>
  );
}

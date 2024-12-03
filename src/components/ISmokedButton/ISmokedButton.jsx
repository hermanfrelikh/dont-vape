import styles from "./ISmokedButton.module.scss";

export default function ISmokedButton({handleRestart}) {
  return (
    <button onClick={handleRestart} className={styles.iSmokeButton}>
      Я покурил
    </button>
  );
}

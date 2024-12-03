import styles from "./IVapedButton.module.scss";

export default function IVapedButton({handleRestart}) {
  return (
    <button onClick={handleRestart} className={styles.iVapeButton}>
      Я покурил
    </button>
  );
}

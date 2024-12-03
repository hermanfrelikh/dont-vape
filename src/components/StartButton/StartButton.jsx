import styles from "./StartButton.module.scss";


export default function StartButton({handleStart}) {
  return (
    <button onClick={handleStart} className={styles.startButton}>
      Начать
    </button>
  );
}

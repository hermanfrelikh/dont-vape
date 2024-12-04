import { useContext } from "react";
import { steps } from "../../data";
import styles from "./Steps.module.scss";
import { AppContext } from "../../App";

export default function Steps() {
  const { timeDontVape, formatTime, isRunning } = useContext(AppContext);
  return (
    <ul className={styles.steps}>
      {steps.map((step) => {
        const timeLeft = step.time / 1000 - timeDontVape;
        return (
          <li 
          className={timeLeft > 0 || isRunning===false ? styles.steps__item : styles.steps__itemFinish}
          
          key={step.id}>
          
            <h1 className={styles.steps__itemTitle}>{step.title}</h1>
            {timeLeft > 0 ? (
              <>
                <p className={styles.steps__itemTitle2}>Осталось: {formatTime(timeLeft)}</p>
              </>
            ) : (
              <>{isRunning === false ? <p className={styles.steps__itemTitle2}>Нажмите кнопку "Начать"</p> : <p className={styles.steps__itemTitle2}>Готово</p>}</>
            )}
          </li>
        );
      })}
    </ul>
  );
}

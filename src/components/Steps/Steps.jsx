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
            <h1>{step.title}</h1>
            {timeLeft > 0 ? (
              <>
                <h2>Осталось: </h2>
                <p>{formatTime(timeLeft)}</p>
              </>
            ) : (
              <>{isRunning === false ? <h2>Начните</h2> : <h2>Готово</h2>}</>
            )}
          </li>
        );
      })}
    </ul>
  );
}

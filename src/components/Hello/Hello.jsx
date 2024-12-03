import { AppContext } from "../../App";
import styles from "./Hello.module.scss";
import { useContext } from "react";

export default function Hello() {
  const { name } = useContext(AppContext);
  const { isRunning } = useContext(AppContext);
  return (
    <div className={styles.hello}>
      {isRunning === false ? (
        <>
          {name ? (
            <h1 className={styles.hello__title}>
              Привет, <span className={styles.hello__name}>{name}</span>
            </h1>
          ) : (
            <h1 className={styles.hello__title}>Привет</h1>
          )}
          <p className={styles.hello__text}>
            Начни бросать курить прямо сейчас!
          </p>
        </>
      ) : (
        <>
          { name ? 
            <h1 className={styles.hello__title}>
              С возвращением, <span className={styles.hello__name}>{name}</span>
            </h1>
            :
            <h1 className={styles.hello__title}>
              С возвращением
            </h1>
          }
          <p className={styles.hello__text}>
            Пока вас не было, ваша статистика улучшилась, хорошая работа!
          </p>
        </>
      )}
    </div>
  );
}

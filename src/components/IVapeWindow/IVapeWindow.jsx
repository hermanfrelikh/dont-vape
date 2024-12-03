import styles from "./IVapeWindow.module.scss";

export default function IVapeWindow({stateIVapeWindow, setStateIVapeWindow}) {
  return (
    <div className={styles.window}>
      <p className={styles.window__textContent}>Срывы случаются, и это нормально. 
        Важно не сдаваться и продолжать двигаться вперед. 
        Помните, что каждый день — это новый шанс начать заново. 
        Вы сможете!</p>
      <button onClick={()=>setStateIVapeWindow(false)} className={styles.window__button}>Продолжить</button>
    </div>
  );
}

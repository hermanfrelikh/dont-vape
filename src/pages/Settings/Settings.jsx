import styles from "./Settings.module.scss"

export default function Settings(){
    return(
        <span className={styles.settings}>
            <h1 className={styles.settings__title}>Настройки</h1>
        </span>
    )
}
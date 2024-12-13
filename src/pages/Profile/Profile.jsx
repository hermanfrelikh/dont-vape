import { useContext, useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { AppContext } from "../../App";
import noAvatar from "../../../public/img/no-avatar2.png";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../../redux/slices/nameSlice";

export default function Profile({ handleStart }) {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name.current);
  const changeName = (name) => {
    dispatch(setName(name));
  };

  const { timeDontVape, setTimeDontVape, isRunning } = useContext(AppContext);
  const [avatar, setAvatar] = useState(noAvatar);
  const [dateStopVape, setDateStopVape] = useState("");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        localStorage.setItem("avatar", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const changeDateStopVape = (e) => {
    const newDate = e.target.value;
    setDateStopVape(newDate);
    const timestamp = new Date(newDate).getTime();
    setTimeDontVape(timestamp);
    localStorage.setItem("DateStopSmoke", timestamp);
  };

  useEffect(() => {
    const savedDateStopVape = localStorage.getItem("DateStopSmoke");
    if (savedDateStopVape) {
      const date = new Date(parseInt(savedDateStopVape, 10));
      const formattedDate = date.toISOString().slice(0, 16);
      setDateStopVape(formattedDate);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  useEffect(() => {
    const savedAvatar = localStorage.getItem("avatar");
    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);

  return (
    <section className={styles.profile}>
      <h1 className={styles.profile__title}>Профиль</h1>
      <img className={styles.profile__avatar} src={avatar} alt="ваше фото" />
      <label className={styles.profile__labelAvatar} htmlFor="imageInput">
        Выбрать фото
      </label>
      <input
        accept="image/*"
        type="file"
        id="imageInput"
        onChange={handleAvatarChange}
        className={styles.profile__inputAvatar}
      />
      <form className={styles.profile__form} onSubmit={handleSubmit}>
        <label htmlFor="inputName">Ваше имя</label>
        <input
          placeholder="Введите имя"
          id="inputName"
          value={name}
          onChange={(e) => changeName(e.target.value)}
          type="text"
          className={styles.profile__input}
        />
      </form>
      {isRunning && (
        <form className={styles.profile__form} onSubmit={handleSubmit}>
          <label htmlFor="inputDate">Не курю с: </label>
          <input
            id="inputDate"
            type="datetime-local"
            value={dateStopVape}
            onChange={changeDateStopVape}
            className={styles.profile__input}
          />
        </form>
      )}
    </section>
  );
}

import { useContext, useState } from "react";
import styles from "./Profile.module.scss";
import { AppContext } from "../../App";

export default function Profile() {
  const { name, setName } = useContext(AppContext);
  const [avatar, setAvatar] = useState("../../../public/img/no-avatar.png");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
    localStorage.setItem('avatar', file)
  };

  return (
    <section className={styles.profile}>
      <h1 className={styles.profile__title}>Профиль</h1>
      <img className={styles.profile__avatar} src={avatar} alt="ваше фото" />
      <input
        accept="image/*"
        type="file"
        id="imageInput"
        onChange={handleAvatarChange}
      />
      <form className={styles.profile__formName}>
        <label htmlFor="inputName">Ваше имя</label>
        <input
          id="inputName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </form>

    </section>
  );
}

import css from "./HomePage.module.css";
import Arrow from "../../services/Arrow/Arrow"
import homeAvatar from "../../images/avatar/avatar-home.png";
import homePicture from "../../images/bg/home-bg.png";

const HomePage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <Arrow />
        <div className={css.contentBlock}>
          <img className={css.homeAvatar} src={homeAvatar} alt="icon" />
          <h1 className={css.title}>Let`s make some tweets!</h1>
        </div>
        <img
          src={homePicture}
          alt="home-background"
        />
      </div>
    </section>
  );
};

export default HomePage;

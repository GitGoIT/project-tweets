import css from "./Header.module.css";
import logo from "../../images/logo/logo2x.png";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <img className={css.logo} src={logo} alt="logo" />
        <Navigation />
      </div>
      <div className={css.line}></div>
    </section>
  );
};

export default Header;

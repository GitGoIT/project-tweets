import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={css.navLink} to="/">
        HOME
      </NavLink>
      <span className={css.navLine}></span>
      <NavLink className={css.navLink} to="/tweets">
        TWEETS
      </NavLink>
    </nav>
  );
};

export default Navigation;

import React from "react";
import { Link } from "react-scroll";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <a href="/">
        <h2 className={styles.logo}>TechWave</h2>
      </a>

      <ul className={styles.navigation}>
        <Link to="about" smooth={true} duration={500}>
          <li className={styles.nav_title}>About</li>
        </Link>
        <Link to="news" smooth={true} duration={500}>
          <li className={styles.nav_title}>News</li>
        </Link>
        <Link to="contacts" smooth={true} duration={500}>
          <li className={styles.nav_title}>Contacts</li>
        </Link>
        <Link to="order" smooth={true} duration={500}>
          <li className={styles.nav_title}>Order</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;

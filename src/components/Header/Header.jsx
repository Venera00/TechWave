import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <a href="/">
        <h2 className={styles.logo}>TechWave</h2>
      </a>

      <ul className={styles.navigation}>
        <a href="#">
          <li className={styles.nav_title}>About</li>
        </a>
        <a href="#">
          <li className={styles.nav_title}>News</li>
        </a>
        <a href="#">
          <li className={styles.nav_title}>Contacts</li>
        </a>
        <a href="#">
          <li className={styles.nav_title}>Order</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;

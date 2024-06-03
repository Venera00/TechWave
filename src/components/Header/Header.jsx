import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

        <FaTimes className={styles.close_icon} />
        <FaBars className={styles.burger_icon} />
      </ul>
    </div>
  );
};

export default Header;

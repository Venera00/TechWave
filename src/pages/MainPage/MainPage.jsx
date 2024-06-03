import React from "react";
import Header from "../../components/Header/Header";
import mainImg from "../../assets/mainImg.jpg";
import chargeIcon from "../../assets/chargeIcon.png";
import globeIcon from "../../assets/globeIcon.png";
import phoneIcon from "../../assets/phoneIcon.png";
import rocketIcon from "../../assets/rocketIcon.png";
import timeIcon from "../../assets/timeIcon.png";
import peopleIcon from "../../assets/peopleIcon.png";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div>
      <Header />

      <div className={styles.main_content}>
        <img src={mainImg} alt="AR image" />
        <h1>TechWave - an immersive augmented reality experience</h1>
      </div>

      <div className={styles.about_section}>
        <div className={styles.card}>
          <img src={chargeIcon} alt="Charge Icon" className={styles.card_img} />
          <p className={styles.card_title}>Lorem, ipsum dolor.</p>
          <p className={styles.card_subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            commodi.
          </p>
        </div>
        <div className={styles.card}>
          <img src={globeIcon} alt="Globe Icon" className={styles.card_img} />
          <p className={styles.card_title}>Lorem, ipsum dolor.</p>
          <p className={styles.card_subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            commodi.
          </p>
        </div>
        <div className={styles.card}>
          <img src={phoneIcon} alt="Phone Icon" className={styles.card_img} />
          <p className={styles.card_title}>Lorem, ipsum dolor.</p>
          <p className={styles.card_subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            commodi.
          </p>
        </div>
        <div className={styles.card}>
          <img src={rocketIcon} alt="Rocket Icon" className={styles.card_img} />
          <p className={styles.card_title}>Lorem, ipsum dolor.</p>
          <p className={styles.card_subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            commodi.
          </p>
        </div>
        <div className={styles.card}>
          <img src={peopleIcon} alt="People Icon" className={styles.card_img} />
          <p className={styles.card_title}>Lorem, ipsum dolor.</p>
          <p className={styles.card_subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            commodi.
          </p>
        </div>
        <div className={styles.card}>
          <img src={timeIcon} alt="Time Icon" className={styles.card_img} />
          <p className={styles.card_title}>Lorem, ipsum dolor.</p>
          <p className={styles.card_subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            commodi.
          </p>
        </div>
      </div>

      <button className={styles.order_btn}>Order</button>
    </div>
  );
};

export default MainPage;

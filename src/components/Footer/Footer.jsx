import React from "react";
import Fumma from "../../assets/Fumma.png";
import Ffacebook from "../../assets/Ffacebook.png";
import Finsta from "../../assets/Finsta.png";
import FTwitter from "../../assets/Ftwitter.png";
import mitapp from "../../assets/mitapp.png";

const footerLinks = [
  { title: "Новости", links: ["Кыргызстан", "Мир", "СМИ"] },
  {
    title: "Интервью",
    links: [
      "Известные люди",
      "Ученые Ислама",
      "Мусульманка",
      "Мусульмане в деле",
      "Молодежь",
      "Филантропы",
    ],
  },
  { title: "Медиа", links: ["Видео", "Аудио", "Фото галлерея", "Инфографика"] },
  {
    title: "Будь в Умме",
    links: [
      "Волонтерство",
      "Стажировка",
      "Исследования",
      "Лекции и Семинары",
      "Продакшн",
      "Команда",
    ],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          {footerLinks.map((column, index) => (
            <div key={index} className="footer-column">
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-contact">
          <div className="logo">
            <img
              src={Fumma}
              alt="Umma"
              style={{ width: "180px", height: "30px" }}
            />
          </div>
          <p>
            Электронная почта
            <br />
            <a href="mailto:Michelle.rivera@example.com">
              Michelle.rivera@example.com
            </a>
          </p>
          <p>
            Номер телефона
            <br />
            <a href="tel:+996555123456">+996 (555) 12 - 34 - 56</a>
          </p>
          <div className="social-media">
            <h3>Мы в соц. сетях</h3>
            <a href="#">
              <img src={Ffacebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={Finsta} alt="Instagram" />
            </a>
            <a href="#">
              <img src={FTwitter} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Все права защищены ©2022</p>
        <div className="mitapp-text">
          <p>Сделано в MITAPP</p>
          <img src={mitapp} alt="" style={{ width: "25px", height: "25px" }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

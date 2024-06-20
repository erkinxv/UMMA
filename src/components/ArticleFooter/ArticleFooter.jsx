import React from "react";
import Fumma from "../../assets/Fumma.png";
import Ffacebook from "../../assets/Ffacebook.png";
import Finsta from "../../assets/Finsta.png";
import FTwitter from "../../assets/Ftwitter.png";
import mitapp from "../../assets/mitapp.png";
import logo from "../../assets/logo.png";

const otherFooterLinks = [
  { title: "Новости", links: ["Кыргызстан", "Мир", "СМИ"] },
  { title: "Медиа", links: ["Видео", "Аудио", "Фото галлерея", "Инфографика"] },
  {
    title: "Проекты",
    links: ["Дискусионный клуб", "Стажировка", "Курсы"],
  },
  {
    title: "Мероприятия",
    links: [
      "Круглые столы",
      "Конференции",
      "Лекции",
      "Общественные мероприятия",
      "Конкурсы",
      "Афишы",
    ],
  },
  {
    title: "Соотрудничество",
    links: ["Стать партнерам", "Стань автором", "Вакансии", "Для СМИ"],
  },
  {
    title: "О нас",
    links: [
      "Приветственное слово",
      "Миссия и ценности",
      "Команда",
      "Структура центра",
      "Партнеры",
      "Авторы",
      "Годовые отчеты",
      "Взаимодействие с обществом",
      "Контакты",
    ],
  },
];

const OtherFooter = () => (
  <footer className="footer-ot">
    <div className="footer-top">
      <div className="footer-links-ot">
        {otherFooterLinks.map((column, index) => (
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
    </div>
    <div className="footer-bottom">
      <p>Все права защищены 2004-2022</p>
      <div className="mitapp-text">
        <p>Сделано в MITAPP</p>
        <img src={mitapp} alt="" style={{ width: "25px", height: "25px" }} />
      </div>
    </div>
  </footer>
);

function ArticleFooter() {
  return (
    <>
      {/* <FooterTop /> */}
      <OtherFooter />
    </>
  );
}

export default ArticleFooter;

import React from "react";
// import './App.css';
import logo from "../../assets/logo.png";
import Ffacebook from "../../assets/Ffacebook.png";
import Finsta from "../../assets/Finsta.png";
import FTwitter from "../../assets/Ftwitter.png";

function ArticleHeader() {
  return (
    <div className="App">
      <header>
        <div className="top-bar">
          <div className="contact-info">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="contacts">
              <span className="cont-email">
                Электронная почта:{" "}
                <a href="mailto:Michelle.rivera@example.com">
                  Michelle.rivera@example.com
                </a>
              </span>
              <span className="cont-phone">
                Номер телефона:
                <a href="#">+996 (555) 12 - 34 - 56</a>
              </span>
            </div>
          </div>
          <div className="search-social">
            <input type="text" placeholder="Поиск" />
            <div className="social-icons">
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
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="#"> &#x2261; </a>
            </li>
            <li>
              <a href="#">Аналитика</a>
            </li>
            <li>
              <a href="#">Медиа</a>
            </li>
            <li>
              <a href="#">Проекты</a>
            </li>
            <li>
              <a href="#">Мероприятия</a>
            </li>
            <li>
              <a href="#">Сотрудничество</a>
            </li>
            <li>
              <a href="#">Книги</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
          </ul>
          <div className="language-login">
            <select className="language-select">
              <option value="eng">ENG</option>
              <option value="ru">РУС</option>
              <option value="kg">КЫРГ</option>
            </select>
            <button className="login-btn">Войти</button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default ArticleHeader;

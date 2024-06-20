import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import lang from "../../assets/header1.png";
import calendar from "../../assets/calendar.png";
import cloud from "../../assets/cloud.png";
import umma from "../../assets/Umma.png";
import search from "../../assets/search.png";
import dropdown from "../../assets/dropdown.png";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import cont1 from "../../assets/content1.png";
import cont2 from "../../assets/content2.png";
import cont3 from "../../assets/content3.png";
import cont4 from "../../assets/content4.png";
import cont5 from "../../assets/content5.png";
import doubleArr from "../../assets/doubleArr.png";
import { Link } from "react-router-dom";

const socialIcons = [facebook, insta, twitter];
const dropdownItems = [
  { title: "Кыргызстан" },
  { title: "Мир" },
  { title: "СМИ о нас" },
  { title: "Политика" },
  { title: "Общество" },
];

const dropdownItems2 = [
  { title: "Известные люди" },
  { title: "Ученные ислама" },
  { title: "Мусульманка" },
  { title: "Мусульмане в деле" },
  { title: "Молодежь" },
  { title: "Филантропы" },
];

const dropdownItems3 = [
  { title: "Видео" },
  { title: "Аудио" },
  { title: "Фото галлерея" },
  { title: "Информатика" },
];

const contents = [cont1, cont2, cont3, cont4, cont5];

const HeaderTop = () => (
  <div className="header-top">
    <div className="header-left">
      <div className="header-left-1">
        <label htmlFor="language">
          <img src={lang} alt="Language" />
        </label>
        <select id="language">
          <option value="ru">Рус</option>
          <option value="kg">Кырг</option>
          <option value="us">Англ</option>
        </select>
      </div>
      <div className="header-left-2">
        <img src={calendar} alt="Calendar" />
        <h4>ЧТ, 19 мая, 2022</h4>
      </div>
      <div className="header-left-3">
        <img src={cloud} alt="Weather" />
        <h4>Бишкек 18 ° C</h4>
      </div>
    </div>
    <div className="header-center">
      <img src={umma} alt="Umma Logo" />
    </div>
    <div className="header-right">
      <div className="search">
        <input type="text" placeholder="Поиск" />
      </div>
      <div className="social">
        {socialIcons.map((icon, idx) => (
          <img key={idx} src={icon} alt="Social Icon" />
        ))}
      </div>
    </div>
  </div>
);

const DropdownContent = ({ imgSrc, date, text }) => (
  <div className="content-box">
    <img src={imgSrc} alt="Content" className="cont-img" />
    <div className="content-date">
      <img src={calendar} alt="Date" />
      <p>{date}</p>
    </div>
    <div className="content-info">
      <p>{text}</p>
    </div>
  </div>
);

const Dropdown = ({ title, items, contents }) => (
  <div className="dropdown">
    <div className="drop-left">
      <ul>
        <li className="drop-left-title">
          <a href="#">{title}</a>
        </li>
        {items.map((item, idx) => (
          <li key={idx}>
            <a href="#">{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
    <div className="drop-right">
      <div className="drop-news">
        {contents.map((cont, idx) => (
          <DropdownContent
            key={idx}
            imgSrc={cont}
            date="ЧТ, 19 мая, 2022"
            text='Отец Димитрий о нападках Запада на Россию: "Это давняя борьба тьмы со светом"'
          />
        ))}
      </div>
      <div className="drop-nav">
        <div className="nav-arrows">
          <img src={doubleArr} alt="Previous" className="prev" />
          <img src={doubleArr} alt="Next" className="next" />
        </div>
        <div className="nav-btn">
          <button className="nav-button">Открыть все</button>
        </div>
      </div>
    </div>
  </div>
);

const NavItem = ({ title, className, dropdownContent }) => (
  <div className={className}>
    <a href="#">
      {title} <img src={dropdown} alt="Dropdown" className="navArr" />
    </a>
    {dropdownContent}
  </div>
);

const HeaderBot = () => (
  <div className="header-bot">
    <Link to="/">
      <NavItem
        title="Новости"
        className="news"
        dropdownContent={
          <Dropdown title="Рубрики" items={dropdownItems} contents={contents} />
        }
      />
    </Link>
    <Link to="/article">Статьи</Link>
    <Link to="/projects">
      <NavItem
        title="Интервью"
        className="interview"
        dropdownContent={
          <Dropdown
            title="Интервью"
            items={dropdownItems2}
            contents={contents}
          />
        }
      />
    </Link>
    <Link to="/media">
      <NavItem
        title="Медиа"
        className="media"
        dropdownContent={
          <Dropdown title="Медиа" items={dropdownItems3} contents={contents} />
        }
      />
    </Link>
    <Link to="/volunteer">
      <NavItem
        title="Будь в Умме"
        className="umma"
        dropdownContent={
          <Dropdown title="Рубрики" items={dropdownItems} contents={contents} />
        }
      />
    </Link>
    <Link to="/halal-guide">Halal guide</Link>
    <Link to="/family">Семья</Link>
  </div>
);

function Header() {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderBot />
    </div>
  );
}

export default Header;

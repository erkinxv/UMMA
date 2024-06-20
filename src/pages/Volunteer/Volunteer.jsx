import React from "react";
import volunteer from "../../assets/volunteer.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const VolunteerSection = () => (
  <div className="volunteer-section">
    <img src={volunteer} alt="Volunteer" className="volunteer-image" />
    <div className="volunteer-content">
      <h1>
        Стать волонтером в команде <br />{" "}
        <span className="highlight">УММА</span> просто!
      </h1>
      <p>
        Sem in bibendum leo ultrices elit platea. Maecenas libero aliquam <br />{" "}
        sodales ullamcorper et mattis facilisi.
      </p>
      <button className="volunteer-button">Подать заявку</button>
    </div>
  </div>
);

const VolunteerInfoSection = () => {
  return (
    <div className="volunteer-info-section">
      <div className="vic-1">
        <h2>
          Быть волонтером в <span className="highlight">УММА</span> это:
        </h2>
        <p>
          Добровольчество находится вне времени, профессии и возраста.
          Внутренняя потребность помогать, присуща каждому человеку и миллионы
          людей участвуют в этой деятельности абсолютно бескорыстно.
        </p>
        <p>
          Волонтерское движение – это социальное партнерство между несколькими
          сторонами, где у каждого свои права и обязанности, свои границы. Оно
          доказало свою результативность как эффективный механизм социального
          партнерства.
        </p>
        <p>
          Волонтерами могут стать молодые люди, достигшие 18-летнего возраста.
          Наличие окончившего среднего образования, среднего профессионального
          или высшего образования, положительные рекомендации с места учебы или
          работы приветствуются.
        </p>
      </div>
      <div className="vic-2">
        <h3>
          Волонтеры <span className="highlight">УММА</span> работают в различных
          направлениях и <br /> могут выбирать сферу, наиболее интересную
          каждому:
        </h3>
        <ul>
          <li>Работа с детьми в трудной жизненной ситуации</li>
          <li>Работа с одинокими пожилыми людьми</li>
          <li>Организация общественных мероприятий и акций</li>
          <li>Распространение принципов Международного гуманитарного права</li>
        </ul>
      </div>

      <div className="vic-3">
        <h3>
          Присоединяйтесь в нашу команду <span className="highlight">УММА</span>{" "}
          если Вы:
        </h3>
        <ul>
          <li>
            <strong>Возраст</strong>
            <ul>
              <li>Возраст кандидата в волонтеры: от 16 и до 40 лет</li>
            </ul>
          </li>
          <li>
            <strong>Образование и опыт</strong>
            <ul>
              <li>Среднее или высшее образование</li>
              <li>Желателен опыт волонтерской или другой работы</li>
            </ul>
          </li>
          <li>
            <strong>Навыки</strong>
            <ul>
              <li>
                Свободное владение кыргызским и русским языками обязательно.
                Знание английского языка является преимуществом
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="vic-4">
        <h3>
          Если Вы хотите вступить в ряды волонтеров свяжитесь с нами следующим
          образом:
        </h3>
        <ul>
          <li>
            Короткий номер горячей линии: <strong>1919</strong>
          </li>
          <li>
            Телефонный номер: <strong>+996 702 555 115</strong>
          </li>
          <li>
            Электронный адрес: <strong>forexample@gmail.com</strong>
          </li>
        </ul>
        <ul>
          <li>Заполнить сейчас</li>
        </ul>
        <button className="volunteer-button orange">Онлайн анкета</button>
      </div>
      <p className="important-note">
        <h3>Важноe</h3>
        
        <p>Мы свяжемся с вами и пригласим познакомиться с деятельностью Красного
        Полумесяца Кыргызстана в самое ближайшее время.</p>
      </p>
    </div>
  );
};

function Volunteer() {
  return (
    <>
      <Header />
      <VolunteerSection />
      <div className="vol-info-sec">
        <VolunteerInfoSection />
      </div>
      <Footer />
    </>
  );
}

export default Volunteer;

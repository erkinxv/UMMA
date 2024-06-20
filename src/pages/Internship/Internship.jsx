import React, { useState } from "react";
import Header from "../../components/Header/Header";
import workers from "../../assets/workers.png";
import intUmma from "../../assets/intUmma.png";
import intdesc from "../../assets/intdesc.png";
import otherArr from "../../assets/otherArr.png";
import Footer from "../../components/Footer/Footer";
import calendar from "../../assets/calendar.png";

const InternshipTitle = () => (
  <div className="intersect">
    <div className="ints-left">
      <h1>
        Cтажировка в УММА это <br /> всегда перспективно и <br />
        позновательно
      </h1>
      <p>
        Sem in bibendum leo ultrices elit platea. Maecenas libero aliquam <br />
        sodales ullamcorper et mattis facilisi.
      </p>
      <button>
        <p>Вакансии</p>
      </button>
      <div className="workers">
        <img src={workers} alt="" />
        <div className="workers-count">
          <h2>+250</h2>
          <p>Сотрудников</p>
        </div>
      </div>
    </div>
    <div className="ints-right">
      <img src={intUmma} alt="" />
    </div>
  </div>
);

const InternshipDescription = () => (
  <div className="intdesc">
    <div className="intdesc-left">
      <h2>Стажировка</h2>
      <h3>
        Программа стажировок предоставляет возможность получить непосредственный
        практический опыт работы
      </h3>
      <p>
        Cursus eget eu, magna placerat tellus ut sit consequat. Nisl sit eget
        aliquet facilisis risus, penatibus tristique ac elementum. Sit rhoncus
        sed aliquam cursus rhoncus risus vitae. Imperdiet mi ipsum enim,
        faucibus mauris sem. Est amet, diam donec pellentesque ac feugiat.
      </p>
      <p>
        Cursus eget eu, magna placerat tellus ut sit consequat. Nisl sit eget
        aliquet facilisis risus, penatibus tristique ac elementum. Sit rhoncus
        sed aliquam cursus rhoncus risus vitae. Imperdiet mi ipsum enim,
        faucibus mauris sem. Est amet, diam donec pellentesque ac feugiat.
      </p>
    </div>
    <div className="intdesc-right">
      <div className="intdesc-card">
        <div className="idc-top">
          <img src={intdesc} alt="" />
        </div>
        <div className="idc-bot">
          <div className="idc-des">
            <p>Фото: 1 из 10</p>
            <div className="idc-img-navs">
              <img src={otherArr} alt="" />
              <img src={otherArr} alt="" style={{ rotate: "180deg" }} />
            </div>
          </div>
          <div className="idc-des-2">
            <p>
              Концертный зал для творческих встречь, а также совместных
              просмотром и обсуждения фильмов.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const offersList = [
  {
    number: "1",
    description:
      "Уникальный «живой» опыт в реальных проектах и процессах, стажировка в крутой команде",
  },
  {
    number: "2",
    description: "Перспектива быть первым кандидатом на штатную позицию",
  },
  {
    number: "3",
    description:
      "Уникальный «живой» опыт в реальных проектах и процессах, стажировка в крутой команде",
  },
  {
    number: "4",
    description: "Перспектива быть первым кандидатом на штатную позицию",
  },
];

const OffersTitle = () => (
  <div className="of-title">
    <h2>Мы предлагаем</h2>
  </div>
);

const Offers = () => (
  <div className="offers-boxes">
    {offersList.map((item, index) => (
      <div key={index} className="offers-box">
        <div className="ob-top">
          <p>{item.number}</p>
        </div>
        <div className="ob-bot">
          <p>{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);

const stagesDescriptions = [
  {
    title: "Отклик",
    description:
      "Sed dictum feugiat risus euismod cras sit nullam. Non adipiscing fermentum fusce justo, eget sit pellentesque ornare orci. Nibh facilisi orci vestibulum elementum eu dui sapien dignissim risus.",
  },
  {
    title: "Рассмотрение",
    description:
      "Sed dictum feugiat risus euismod cras sit nullam. Non adipiscing fermentum fusce justo, eget sit pellentesque ornare orci. Nibh facilisi orci vestibulum elementum eu dui sapien dignissim risus.",
  },
  {
    title: "Собеседование",
    description:
      "Sed dictum feugiat risus euismod cras sit nullam. Non adipiscing fermentum fusce justo, eget sit pellentesque ornare orci. Nibh facilisi orci vestibulum elementum eu dui sapien dignissim risus.",
  },
  {
    title: "Обратная связь",
    description:
      "Sed dictum feugiat risus euismod cras sit nullam. Non adipiscing fermentum fusce justo, eget sit pellentesque ornare orci. Nibh facilisi orci vestibulum elementum eu dui sapien dignissim risus.",
  },
];

const StagesInternshipsTitle = () => (
  <div className="stages-title">
    <h2>Этапы устройства на стажировку</h2>
  </div>
);

const StagesInternships = () => (
  <div className="stages-boxes">
    {stagesDescriptions.map((item, index) => (
      <div key={index} className="stage-box">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
);

const vacanciesDescriptions = [
  {
    title: "Помощник руководителя по организационным вопросам",
    description:
      "Откликайтесь, если разбираетесь в коммерческом тексте и владеете навыками коммуникации",
  },
  {
    title: "Помощник руководителя по организационным вопросам",
    description:
      "Откликайтесь, если разбираетесь в коммерческом тексте и владеете навыками коммуникации",
  },
  {
    title: "Помощник руководителя по организационным вопросам",
    description:
      "Откликайтесь, если разбираетесь в коммерческом тексте и владеете навыками коммуникации",
  },
  {
    title: "Помощник руководителя по организационным вопросам",
    description:
      "Откликайтесь, если разбираетесь в коммерческом тексте и владеете навыками коммуникации",
  },
  {
    title: "Помощник руководителя по организационным вопросам",
    description:
      "Откликайтесь, если разбираетесь в коммерческом тексте и владеете навыками коммуникации",
  },
  {
    title: "Помощник руководителя по организационным вопросам",
    description:
      "Откликайтесь, если разбираетесь в коммерческом тексте и владеете навыками коммуникации",
  },
];

export const InterDate = () => (
  <div className="cont-box-date-int">
    <div className="date">
      <img
        src={calendar}
        alt="Date"
        style={{ width: "15px", height: "15px" }}
      />
      <p>ЧТ, 19 мая, 2022</p>
    </div>
  </div>
);

const RegistrationForm = ({ onClose }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <h2>Отклик на вакансию</h2>
      <p>Заполните данные и мы свяжемся с Вами!</p>
      <form>
        <div className="form-1">
          <input type="text" placeholder="ФИО" required />
          <input type="date" placeholder="ДД/ММ/ГГГГ" required />
        </div>
        <div className="form-2">
          <input type="tel" placeholder="+996 000 000 000" required />
          <input type="text" placeholder="Город" required />
        </div>
        <div className="form-3">
          <textarea placeholder="Комментарий" required></textarea>
          <button type="submit">Отправить</button>
        </div>
        <button type="button" onClick={onClose}>
          &#x2A2F;
        </button>
      </form>
    </div>
  </div>
);

const Vacancies = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="vacancies">
      {vacanciesDescriptions.map((item, index) => (
        <div key={index} className="vacancy">
          <div className="vac-date">
            <InterDate />
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="vac-btns">
            <button onClick={handleButtonClick}>Откликнуться</button>
          </div>
        </div>
      ))}
      {showForm && <RegistrationForm onClose={handleCloseForm} />}
    </div>
  );
};

function Internship() {
  return (
    <>
      <Header />
      <InternshipTitle />
      <InternshipDescription />
      <OffersTitle />
      <div className="offers1">
        <Offers />
      </div>
      <StagesInternshipsTitle />
      <div className="stages1">
        <StagesInternships />
      </div>
      <Vacancies />
      <div className="int-footer">
        <Footer />
      </div>
    </>
  );
}

export default Internship;


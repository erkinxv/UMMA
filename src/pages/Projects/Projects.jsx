import React from "react";
import Header from "../../components/Header/Header";
import volunteer from "../../assets/volunteer.png";
import proj20 from "../../assets/projects20.png";
import projs from "../../assets/projs.png";
import { InterDate } from "../Internship/Internship";
import LogoSlider from "../LogoSlider/LogoSlider";
import Footer from "../../components/Footer/Footer";


const ProjectsSection = () => (
  <div className="volunteer-section">
    <img src={volunteer} alt="Volunteer" className="volunteer-image" />
    <div className="volunteer-content">
      <h1>
        <span className="highlight">УММА</span> создает актуальные <br /> для
        общества проекты
      </h1>
      <p>
        Sem in bibendum leo ultrices elit platea. Maecenas libero aliquam <br />{" "}
        sodales ullamcorper et mattis facilisi.
      </p>
      <div className="vol-cont-projects">
        <img src={proj20} alt="" />
        <h3>
          {" "}
          <span className="plus20">+20</span> <br /> проектов{" "}
        </h3>
      </div>
    </div>
  </div>
);

const ProjectsDescriptions = () => (
  <div className="proj-descrs">
    <div className="pd-left">
      <p>Проекты</p>
      <h3>Описание</h3>
      <p>
        Massa amet nunc pharetra, facilisis facilisis duis. Nunc dolor mi
        commodo neque. <br /> Nisl vulputate risus feugiat gravida consectetur
        tortor et libero. Sed id et varius <br /> morbi pellentesque. Leo vitae
        nunc at curabitur massa nunc nulla. Adipiscing <br /> aenean lorem erat
        laoreet elementum. Tristique nunc, est turpis eu montes, <br /> aliquam
        gravida.
      </p>
      <p>
        Condimentum aliquam et, faucibus vitae eget placerat sed in neque.
        Gravida <br /> pharetra nunc volutpat varius vel ultrices. Venenatis id
        gravida elementum <br /> pulvinar fames morbi vitae arcu.
      </p>
    </div>
    <div className="pd-right">
      <img src={projs} alt="" />
    </div>
  </div>
);

const ProjectsVacanciesDescriptions = [
  {
    title: "Акции и ярмарки",
    description:
      "Откликайтесь, если разбираетесь в коммерческом тексте и владеете навыками коммуникации",
  },
  {
    title: "Посадка деревьем и уборка",
    description:
      "Откликайтесь, если разбираетесь в коммерческом тексте и владеете навыками коммуникации",
  },
  {
    title: "Дружба народов",
    description:
      "Откликайтесь, если разбираетесь в коммерческом тексте и владеете навыками коммуникации",
  },
  {
    title: "Шатер рамадана",
    description:
      "Откликайтесь, если разбираетесь в коммерческом тексте и владеете навыками коммуникации",
  },
  {
    title: "Культура и исскуство",
    description:
      "Откликайтесь, если разбираетесь в коммерческом тексте и владеете навыками коммуникации",
  },
  {
    title: "Мероприятия",
    description:
      "Откликайтесь, если разбираетесь в коммерческом тексте и владеете навыками коммуникации",
  },
];

const ProjectsVacancies = () => (
  <div className="vacancies">
    {ProjectsVacanciesDescriptions.map((item, index) => (
      <div key={index} className="vacancy">
        <div className="vac-date">
          <p>Благотворительность</p>
          <InterDate />
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="vac-btns">
          <button>Откликнуться</button>
        </div>
      </div>
    ))}
  </div>
);

function Projects() {
  return (
    <>
      <Header />
      <ProjectsSection />
      <ProjectsDescriptions />
      <div className="proj-vacs">
        <h2>Проекты</h2>
        <ProjectsVacancies />
      </div>
      <LogoSlider />
      <Footer />
    </>
  );
}

export default Projects;

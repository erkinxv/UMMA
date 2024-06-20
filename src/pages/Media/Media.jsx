import React from "react";
import LastNews1 from "../../assets/lastN1.png";
import shorts from "../../assets/shorts.png";
import Header from "../../components/Header/Header";
import calendar from "../../assets/calendar.png";
import shorts2 from "../../assets/shorts2.png";
import audio from "../../assets/audio.png";
import audio2 from "../../assets/audio2.png";
import audio3 from "../../assets/audio3.png";
import audio4 from "../../assets/audio4.png";
import Footer from "../../components/Footer/Footer";
import { PagesNav } from "../Home/Home";

const mediaImages = [LastNews1, LastNews1, LastNews1, LastNews1];

const shortMediaImages = [
  LastNews1,
  LastNews1,
  LastNews1,
  LastNews1,
  LastNews1,
  LastNews1,
  LastNews1,
  LastNews1,
];

const FourthSection = () => (
  <div className="section-4">
    <div className="sec-4-title">
      <h2>Медиа</h2>
      <div className="sec-4-links">
        <ul>
          <li>
            <a href="">Все</a>
            <a href="">Видео</a>
            <a href="">Аудио</a>
            <a href="">Фото</a>
            <a href="">Инфографика</a>
          </li>
        </ul>
      </div>
    </div>
    <MediaContents />
  </div>
);

const MediaContents = () => (
  <div className="medias">
    {mediaImages.map((item, index) => (
      <div key={index} className="last-news-box">
        <div className="ln-top">
          <img src={item} alt="" style={{ width: "282px", height: "188px" }} />
        </div>
        <div className="ln-bot">
          <div className="cont-box-date">
            <img
              src={calendar}
              alt="Date"
              style={{ width: "15px", height: "15px" }}
            />
            <p>ЧТ, 19 мая, 2022</p>
          </div>
          <div className="ln-descr">
            <h3>
              ООН призвал местных граждан к прекращению провокаций на территории
              Иерусалима
            </h3>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const shortsPreview = [shorts, shorts, shorts, shorts, shorts];

const ShortsTitle = () => (
  <div className="sh-title">
    <h2>Shorts</h2>
  </div>
);

export const MediaShorts = () => (
  <div className="media-shorts">
    {shortsPreview.map((item, index) => (
      <div key={index} className="shorts-box">
        <img src={item} alt="" />
        <div className="title-media-shorts">
          <div className="cont-box-date">
            <img
              src={calendar}
              alt="Date"
              style={{ width: "15px", height: "15px" }}
            />
            <p>ЧТ, 19 мая, 2022</p>
          </div>
          <div className="media-sh-descriptions">
            <p>
              ООН призвал местных граждан к прекращению провокаций на территории
              Иерусалима
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ShortsMediaContents = () => (
  <div className="medias-sh">
    {shortMediaImages.map((item, index) => (
      <div key={index} className="last-news-box">
        <div className="ln-top">
          <img src={item} alt="" style={{ width: "282px", height: "188px" }} />
        </div>
        <div className="ln-bot1">
          <div className="cont-box-date">
            <img
              src={calendar}
              alt="Date"
              style={{ width: "15px", height: "15px" }}
            />
            <p>ЧТ, 19 мая, 2022</p>
          </div>
          <div className="ln-descr">
            <h3>
              ООН призвал местных граждан к прекращению провокаций на территории
              Иерусалима
            </h3>
          </div>
        </div>
      </div>
    ))}
    <div className="navPage">
      <PagesNav />
    </div>
  </div>
);

const secondShortImages = [
  shorts2,
  shorts2,
  shorts2,
  shorts2,
  shorts2,
  shorts2,
  shorts2,
  shorts2,
];

const SecondShortMediaContents = () => (
  <div className="medias-sh-2">
    {secondShortImages.map((item, index) => (
      <div key={index} className="last-news-box">
        <div className="ln-top">
          <img src={item} alt="" style={{ width: "282px", height: "188px" }} />
        </div>
        <div className="ln-bot1">
          <div className="cont-box-date">
            <img
              src={calendar}
              alt="Date"
              style={{ width: "15px", height: "15px" }}
            />
            <p>ЧТ, 19 мая, 2022</p>
          </div>
          <div className="ln-descr">
            <h3>
              ООН призвал местных граждан к прекращению провокаций на территории
              Иерусалима
            </h3>
          </div>
        </div>
      </div>
    ))}
    <div className="navPage">
      <PagesNav />
    </div>
  </div>
);

const audioImages = [
  audio,
  audio2,
  audio3,
  audio4,
  audio,
  audio2,
  audio3,
  audio4,
];

const MediaAudios = () => (
  <div className="audio-conts">
    {audioImages.map((item, index) => (
      <div className="audio-box" key={index}>
        <div className="audio-img">
          <img src={item} alt="" />
        </div>
        <div className="audio-description">
          <p>Ligula vestibulum mauris mattis risus sapien.</p>
          <div className="audio-btns">
            <button>Слушать</button>
            <p>40:32</p>
          </div>
        </div>
      </div>
    ))}
    <div className="navPage">
      <PagesNav />
    </div>
  </div>
);

function Media() {
  return (
    <>
      <Header />
      <FourthSection />
      <ShortsTitle />
      <MediaShorts />
      <ShortsMediaContents />
      <SecondShortMediaContents />
      <div className="m-adios">
        <MediaAudios />
      </div>
      <Footer />
    </>
  );
}

export default Media;

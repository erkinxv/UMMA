import React from "react";
import Header from "../../components/Header/Header";
import audio from "../../assets/audio.png";
import audio2 from "../../assets/audio2.png";
import audio3 from "../../assets/audio3.png";
import audio4 from "../../assets/audio4.png";
import { PagesNav } from "../Home/Home";
import Footer from "../../components/Footer/Footer";

const VideosTitle = () => (
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
  audio,
  audio2,
  audio3,
  audio4,
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

function Audios() {
  return (
    <>
      <Header />
      <div className="videos-title">
        <VideosTitle />
      </div>
      <div className="audios-page">
        <MediaAudios />
      </div>
      <div className="audios-footer">
        <Footer />
      </div>
    </>
  );
}

export default Audios;

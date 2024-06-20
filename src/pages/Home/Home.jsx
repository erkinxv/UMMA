import React from "react";
import calendar from "../../assets/calendar.png";
import popular1 from "../../assets/popular1.png";
import popular2 from "../../assets/popular2.png";
import popular3 from "../../assets/popular3.png";
import popular4 from "../../assets/popular4.png";
import popular5 from "../../assets/popular5.png";
import Clock from "../../components/Clock/Clock";
import Fadgr from "../../assets/fadgr.png";
import zuhr from "../../assets/ssuhr.png";
import ishaa from "../../assets/ishaa.png";
import sham from "../../assets/sham.png";
import asr from "../../assets/asr.png";
import whitecal from "../../assets/whitecal.png";
import LastNews1 from "../../assets/lastN1.png";
import LastNews2 from "../../assets/lastN2.png";
import LastNews3 from "../../assets/lastN3.png";
import LastNews4 from "../../assets/lastN4.png";
import LastNews5 from "../../assets/lastN5.png";
import LastNews6 from "../../assets/lastN6.png";
import LastNews7 from "../../assets/lastN7.png";
import LastNews8 from "../../assets/lastN8.png";
import ummaSocial from "../../assets/ummaSocial.png";
import facebook from "../../assets/facebookSocial.png";
import insta from "../../assets/InstaSocial.png";
import yt from "../../assets/YTSocial.png";
import ok from "../../assets/OKSocial.png";
import vk from "../../assets/VKSocial.png";
import tt from "../../assets/TTSocial.png";
import inter1 from "../../assets/inter1.png";
import inter2 from "../../assets/inter2.png";
import inter3 from "../../assets/inter3.png";
import inter4 from "../../assets/inter4.png";
import doubleArr from "../../assets/doubleArr.png";
import col1 from "../../assets/col1.png";
import col2 from "../../assets/col2.png";
import col3 from "../../assets/col3.png";
import col4 from "../../assets/col4.png";
import team from "../../assets/team.png";
import halal1 from "../../assets/halal1.png";
import halal2 from "../../assets/halal2.png";
import halal3 from "../../assets/halal3.png";
import halal4 from "../../assets/halal4.png";
import StarRating from "../../components/StarRating/StarRating";
import family1 from "../../assets/family1.png";
import family2 from "../../assets/family2.png";
import family3 from "../../assets/family3.png";
import family4 from "../../assets/family4.png";
import family5 from "../../assets/family5.png";
import family6 from "../../assets/family6.png";
import family7 from "../../assets/family7.png";
import family8 from "../../assets/family8.png";
import family9 from "../../assets/family9.png";
import family10 from "../../assets/family10.png";


import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banners/Banner";
import ShortBanner from "../../components/Banners/ShortBanner";
import HalalGuide from "../HalalGuide/HalalGuide";

const popularImages = [popular3, popular4, popular5];

const times = [
  { image: zuhr, time: "13:10", pray: "Зухр" },
  { image: asr, time: "18:00", pray: "Аср" },
  { image: sham, time: "19:30", pray: "Шам" },
  { image: ishaa, time: "21:00", pray: "Ишаа" },
];

const socials = [
  { socialImg: facebook, socialName: "Facebook" },
  { socialImg: insta, socialName: "Instagram" },
  { socialImg: yt, socialName: "YouTube" },
  { socialImg: ok, socialName: "Одноклассники" },
  { socialImg: vk, socialName: "ВКонтакте" },
  { socialImg: tt, socialName: "Tik Tok" },
];

const ContentBox = ({ imgSrc }) => (
  <div className="cont-box">
    <img src={imgSrc} alt="" />
    <div className="cont-box-text">
      <div className="cont-box-date">
        <img src={calendar} alt="Date" />
        <p>ЧТ, 19 мая, 2022</p>
      </div>
      <div className="cont-box-descr">
        <p>
          Отец Димитрий о нападках Запада на Россию: "Это давняя борьба тьмы со
          светом"
        </p>
      </div>
    </div>
  </div>
);

const Time = () => (
  <div className="time">
    <div className="region-block">
      <select id="region">
        <option value="bish">Бишкек, Чуй</option>
        <option value="cnd">Торонто, Канада</option>
        <option value="jpn">Токио, Япония</option>
      </select>
    </div>
    <div className="region-chosen">
      <div className="reg-ch-left">
        <p>Город</p>
        <h3>Бишкек</h3>
      </div>
      <div className="reg-ch-right">
        <Clock />
      </div>
    </div>
  </div>
);

const TimeLeft = () => (
  <div className="time-left">
    <div className="time-left-top">
      <div className="time-lt-left">
        <img src={Fadgr} alt="" style={{ width: "20px", height: "20px" }} />
        <h3>Фаджр</h3>
      </div>
      <div className="time-lt-right">
        <p>Время:</p>
        <h3>5:30</h3>
      </div>
    </div>
    <div className="time-left-bot">
      <div className="title-tl-bot">
        <h3>Осталось:</h3>
      </div>
      <div className="title-tl">
        <p>Часы</p>
        <p>Мин</p>
        <p>Сек</p>
      </div>
      <div className="time-tl">
        <p>04</p>
        <h3>:</h3>
        <p>16</p>
        <h3>:</h3>
        <p>32</p>
      </div>
    </div>
  </div>
);

const TimeCards = () => (
  <div>
    {times.map((item, index) => (
      <div key={index} className="time-card">
        <div className="tc-left">
          <img
            src={item.image}
            alt=""
            style={{ width: "20px", height: "20px" }}
          />
          <h3>{item.pray}:</h3>
        </div>
        <div className="tc-right">
          <p>Время:</p>
          <h3>{item.time}</h3>
        </div>
      </div>
    ))}
  </div>
);

const Section = () => (
  <div className="section">
    <div className="sec-left">
      <h2>Популярное</h2>
      <div className="sec-top">
        <div className="actual">
          <img
            src={popular1}
            alt=""
            style={{ width: "588px", height: "356px" }}
          />
          <div className="actual-text">
            <div className="date-act-text">
              <img
                src={whitecal}
                alt="Date"
                style={{ width: "15px", height: "15px" }}
              />
              <p>ЧТ, 19 мая, 2022</p>
            </div>
            <h3>
              Новая геополитика в Индо-Тихоокеанском регионе: Тройственный союз
              США, Южной Кореи и Японии
            </h3>
          </div>
        </div>
        <ContentBox imgSrc={popular2} />
      </div>
      <div className="sec-bot">
        {popularImages.map((imgSrc, index) => (
          <ContentBox key={index} imgSrc={imgSrc} />
        ))}
      </div>
    </div>
    <div className="sec-right">
      <Time />
      <TimeLeft />
      <TimeCards />
    </div>
  </div>
);

const SecondSection = () => (
  <div className="section-2">
    <LastNews />
    <LastNewsContents />
    <SocialNews />
    <Interviews />
  </div>
);

const LastNews = () => (
  <div>
    <h2 className="last-news-title">Последние</h2>
    {[LastNews1, LastNews2].map((item, index) => (
      <div key={index} className="last-news-box">
        <div className="ln-top">
          <img src={item} alt="" />
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
    <PagesNav />
  </div>
);

export const PagesNav = () => (
  <div className="pages">
    <a href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <a href="#">. . .</a>
    <a href="#">40</a>
    <div className="nav-arrows">
      <img
        src={doubleArr}
        alt="Previous"
        className="prev"
        style={{ width: "20px", height: "20px" }}
      />
      <img
        src={doubleArr}
        alt="Next"
        className="next"
        style={{ width: "20px", height: "20px" }}
      />
    </div>
  </div>
);

const LastNewsContents = () => (
  <div>
    {[1, 2, 3, 4].map(() => (
      <div className="ln-cont-box">
        <div className="ln-cb-top">
          <p>&bull; Политика</p>
          <p>17 мин назад.</p>
        </div>
        <div className="ln-cb-bot">
          <h3>
            Мусульмане отпраздновали 1100-летие принятия ислама Волжской
            Булгарией
          </h3>
        </div>
      </div>
    ))}
  </div>
);

const SocialNews = () => (
  <div>
    {socials.map((item, index) => (
      <div key={index} className="social-containers">
        <div className="sc-top">
          <div className="sc-top-left">
            <img src={ummaSocial} alt="" />
          </div>
          <div className="sc-top-right">
            <p>{item.socialName}</p>
            <p>(16 тысяч), нравится </p>
          </div>
        </div>
        <div className="sc-bot">
          <div className="sc-bot-left">
            <img
              src={item.socialImg}
              alt=""
              style={{ width: "16px", height: "16px", borderRadius: "3px" }}
            />
          </div>
          <div className="sc-bot-right">
            <p>Fames eget faucibus bibendum urna.</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Interviews = () => (
  <div>
    <h2 className="last-news-title">Интервью</h2>
    {[inter1, inter2, inter3].map((item, index) => (
      <div key={index} className="inter-box">
        <div className="ib-top">
          <div className="ib-top-left">
            <img src={item} alt="" />
          </div>
          <div className="ib-top-right">
            <div className="cont-box-date">
              <img
                src={calendar}
                alt="Date"
                style={{ width: "15px", height: "15px" }}
              />
              <p>ЧТ, 19 мая, 2022</p>
            </div>
            <button>Известные Люди</button>
          </div>
        </div>
        <div className="ib-bot">
          <h3>Кадыр Маликов</h3>
          <h3>
            Отец Димитрий о нападках Запада на Россию: "Это давняя борьба тьмы
            со светом"
          </h3>
        </div>
      </div>
    ))}
  </div>
);

const ThirdSection = () => (
  <div className="section-3">
    <div className="sec-3-title">
      <h2>Статьи от колумнистов</h2>
      <a href="#">Открыть все</a>
    </div>
    <Columnists />
  </div>
);

const columnistsImg = [col1, col2, col3, col4];

const interImg = [inter1, inter2, inter3, inter4];

const Columnists = () => (
  <div className="columnists">
    {columnistsImg.map((item, index) => (
      <div key={index} className="col-box">
        <div className="cb-top">
          <img src={item} alt="" />
        </div>
        <div className="cb-center">
          <img src={interImg[index]} alt="" />
          <div className="cont-box-date">
            <img
              src={calendar}
              alt="Date"
              style={{ width: "15px", height: "15px" }}
            />
            <p>ЧТ, 19 мая, 2022</p>
          </div>
        </div>
        <div className="ib-bot">
          <h3>Тимиур Нуралиев</h3>
          <h3>
            Отец Димитрий о нападках Запада на Россию: "Это давняя борьба тьмы
            со светом"
          </h3>
        </div>
      </div>
    ))}
  </div>
);

const mediaImages = [
  LastNews1,
  LastNews2,
  LastNews3,
  LastNews4,
  LastNews5,
  LastNews6,
  LastNews7,
  LastNews8,
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

const FifthSection = () => (
  <div className="section-5">
    <h2>Будь в Умме</h2>
    <BeInUmma />
  </div>
);

const beInUmmaTitles = [
  "Волонтерство",
  "Стажировка",
  "Исследования",
  "Лекции и семинары",
];

const BeInUmma = () => (
  <div className="umma-containers">
    {beInUmmaTitles.map((item, index) => (
      <div key={index} className="umma-box">
        <h3>{item}</h3>
        <p>
          Mattis scelerisque nec, ligula vitae nisl. Consectetur metus sit
          phasellus fusce diam.
        </p>
        <button>Подробнее</button>
      </div>
    ))}
  </div>
);

const SixthSection = () => (
  <div className="section-6">
    <h2>Команда</h2>
    <Team />
  </div>
);

const Team = () => (
  <div className="team-containers">
    {[team, team, team, team, team, team].map((item, index) => (
      <div key={index} className="team-box">
        <img src={item} alt="" />
        <h2>Александр Смирнов</h2>
        <p>Главный редактор</p>
      </div>
    ))}
  </div>
);

const SeventhSection = () => (
  <div className="section-7">
    <div className="sec-7-title">
      <h2>Halal Guide</h2>
      <div className="sec-4-links">
        <ul>
          <li>
            <a href="">Все</a>
            <a href="">Кафе</a>
            <a href="">Мечети</a>
            <a href="">Рестораны</a>
            <a href="">Рынки</a>
          </li>
        </ul>
      </div>
      <div className="sec-3-title">
        <a href="">Открыть все</a>
      </div>
    </div>
    <HalalGuideRests />
  </div>
);

const halalInfo = [
  {
    name: "Кафе La Piala | COFFEE",
    image: halal1,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal2,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal3,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal4,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
];

const HalalGuideRests = () => (
  <div className="restaurants">
    {halalInfo.map((item, index) => (
      <div key={index} className="halal-box">
        <div className="hb-top">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="hb-bot">
          <h3>{item.name}</h3>
          <StarRating />
          <p>
            <span className="designation">Телефон:</span> {item.phone}
          </p>
          <p>
            <span className="designation">Адрес: </span>
            {item.address}
          </p>
        </div>
      </div>
    ))}
  </div>
);

const FamilySection = () => (
  <div className="section-8">
    <div className="sec-8-title">
      <h2>Семья</h2>
      <div className="sec-3-title">
        <a href="#">Открыть все</a>
      </div>
    </div>

    <FamilyCards />
  </div>
);

const familyImages = [family4, family5, family6];
const familyImagesBot = [family7, family8, family9, family10];

const TitleForCards = () => (
  <div className="ln-bot">
    <div className="cont-box-date">
      <img
        src={whitecal}
        alt="Date"
        style={{ width: "15px", height: "15px" }}
      />
      <p>ЧТ, 19 мая, 2022</p>
    </div>
    <div className="ln-descr">
      <h3>
        Новая геополитика в Индо-Тихоокеанском регионе: Тройственный союз США,
        Южной Кореи и Японии
      </h3>
    </div>
  </div>
);

const FamilyFirstImage = () => (
  <div className="fc-top-left">
    <img src={family1} alt="" />
    <TitleForCards />
  </div>
);

const FamilyCenterImages = () => (
  <div className="fc-top-center">
    {[family2, family3].map((item, index) => (
      <div className="fc-tc-title">
        <img src={item} alt="" key={index} />
        <TitleForCards />
      </div>
    ))}
  </div>
);

const FamilyNews = () => (
  <div className="fc-top-right">
    {familyImages.map((item, index) => (
      <div key={index} className="fc-tr-box">
        <img src={item} alt="" />
        <div className="fc-tr-box-r">
          <div className="cont-box-date">
            <img
              src={calendar}
              alt="Date"
              style={{ width: "15px", height: "15px" }}
            />
            <p>ЧТ, 19 мая, 2022</p>
          </div>
          <p>
            Отец Димитрий о нападках Запада на Россию: "Это давняя борьба тьмы
            со светом"
          </p>
        </div>
      </div>
    ))}
  </div>
);

const FamilyNewsContainers = () => (
  <div className="fc-bot">
    {familyImagesBot.map((item, index) => (
      <div key={index} className="fc-bot-cards">
        <div className="fc-bc-top">
          <img src={item} alt="" />
        </div>
        <div className="fc-bc-bot">
          <div className="cont-box-date">
            <img
              src={calendar}
              alt="Date"
              style={{ width: "15px", height: "15px" }}
            />
            <p>ЧТ, 19 мая, 2022</p>
          </div>
          <p>
            Отец Димитрий о нападках Запада на Россию: "Это давняя борьба тьмы
            со светом"
          </p>
        </div>
      </div>
    ))}
  </div>
);

const FamilyCards = () => (
  <div className="fam-cards">
    <div className="fc-top">
      <FamilyFirstImage />
      <FamilyCenterImages />
      <FamilyNews />
    </div>
    <div className="fc-bot">
      <FamilyNewsContainers />
    </div>
  </div>
);

function Home() {
  return (
    <>
      <Banner />
      <Header />
      <ShortBanner />
      <Section />
      <ShortBanner />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <ShortBanner />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <FamilySection />
      <Footer />
    </>
  );
}

export default Home;

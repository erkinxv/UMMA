import React from "react";
import Banner from "../../components/Banners/Banner";
import Header from "../../components/Header/Header";
import ShortBanner from "../../components/Banners/ShortBanner";
import kurban from "../../assets/kurban.png";
import DateComp from "../../components/Dates/DateComp";
import family4 from "../../assets/family4.png";
import family5 from "../../assets/family5.png";
import family6 from "../../assets/family6.png";
import calendar from "../../assets/calendar.png";
import popular3 from "../../assets/popular3.png";
import kurban2 from "../../assets/kurban2.png";
import LastNews1 from "../../assets/lastN1.png";
import LastNews2 from "../../assets/lastN2.png";
import popular1 from "../../assets/popular1.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import Comments from "../../components/Comment/Comments";
import Footer from "../../components/Footer/Footer";

const KurbanBairam = () => (
  <div className="kurban">
    <div className="kurban-left">
      <div className="kurban-text">
        <h1>
          Опубликована программа <br /> празднования Курбан-байрама в <br />
          Москве в 2022 году
        </h1>
        <DateComp />
      </div>
      <div className="kurban-img">
        <img src={kurban} alt="" />
      </div>
      <div className="kurban-text">
        <h3>
          Курбан-байрам, или Ид аль-Адха, — важнейший праздник в <br />
          мусульманской культуре — в 2022 году начинается 9 июля, в <br />{" "}
          субботу.
        </h3>
        <p>
          Первым намазом, после которого произносятся такбиры, является утренняя
          молитва (Фаджр) девятого дня месяца Зуль-хиджа, то есть день ‘Арафа —
          8 июля. И так до двадцать третьей молитвы, то есть послеполуденной
          (‘Аср) молитвы четвертого праздничного дня — 12 июля.
        </p>
        <p>
          Время для совершения жертвоприношения наступает сразу по окончании
          праздничной молитвы — 9 июля. Завершается незадолго до захода солнца
          третьего праздничного дня — 11 июля
        </p>
        <p>
          В России отменены все коронавирусные ограничения, поэтому мусульмане
          смогут полноценно отпраздновать Ид аль-Адха.
        </p>
      </div>
    </div>
    <div className="kurban-right">
      <h2>Может быть интересно</h2>
      <FamilyNews />
      <div className="kbr-title">
        <h2>Читайте также</h2>
        <div className="sec-3-title">
          <a href="#">Открыть все</a>
        </div>
        <div className="kbr-cards">
          <LastNewsContents />
        </div>
      </div>
    </div>
  </div>
);

const familyImages = [family4, family5, family6, popular3];

const FamilyNews = () => (
  <div className="fc-top-right">
    {familyImages.map((item, index) => (
      <div key={index} className="fc-tr-box">
        <img src={item} alt="" />
        <div className="fc-tr-box-right">
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

const LastNewsContents = () => (
  <div>
    {[1, 2, 3].map(() => (
      <div className="ln-content-box">
        <div className="ln-cb-top">
          <button>Политика</button>
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

const icons = [icon1, icon2, icon3];

const FamilyNews2 = () => (
  <div className="fc-top-right">
    {[LastNews1, LastNews2, popular1].map((item, index) => (
      <div key={index} className="fc-tr-box">
        <img src={item} alt="" />
        <div className="fc-tr-box-right">
          {/* <div className="fc-tr-icons">
            {[icon1, icon2, icon3].map((icon) => (
              <img src={icons[index % icons.length]} alt="" style={{width: "24px", height: "24px"}}/>
            ))}
          </div> */}
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

const SecondKurban = () => (
  <div className="kurban2">
    <div className="kb2-left">
      <img src={kurban2} alt="" />
      <p>
        “Время для совершения жертвоприношения наступает сразу по окончании
        праздничной молитвы — 9 июля. Завершается незадолго до захода солнца
        третьего праздничного дня — 11 июля.”
      </p>
      <p>© Тимиур Нуралиев</p>
      <div className="kb-2-left-desc">
        <p>
          Первым намазом, после которого произносятся такбиры, является утренняя
          молитва (Фаджр) девятого дня месяца Зуль-хиджа, то есть день ‘Арафа —
          8 июля. И так до двадцать третьей молитвы, то есть послеполуденной
          (‘Аср) молитвы четвертого праздничного дня — 12 июля.
        </p>
        <p>
          Время для совершения жертвоприношения наступает сразу по окончании
          праздничной молитвы — 9 июля. Завершается незадолго до захода солнца
          третьего праздничного дня — 11 июля
        </p>
        <p>В России отменены все коронавирусные ограничения.</p>
      </div>
    </div>
    <div className="kb-2-right">
      <FamilyNews2 />
    </div>
  </div>
);

function Article() {
  return (
    <>
      <Banner />
      <Header />
      <ShortBanner />
      <KurbanBairam />
      <ShortBanner />
      <SecondKurban />
      <Comments />
      <Footer />
    </>
  );
}

export default Article;

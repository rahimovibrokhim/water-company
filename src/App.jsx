import { useState } from "react";

function App() {
  let [day, setDay] = useState(1);
  let [bottles, setBottles] = useState(1);
  let price = bottles * 100;
  let [isActive, setIsActive] = useState(false);

  if (bottles >= 20) {
    price = bottles * 100 - bottles * 10;
  }

  function addSecondBody() {
    setIsActive(true);
  }

  function decrease() {
    if (day == 1) setDay(1);
    else setDay(day - 1);
    setBottles(Math.ceil(day / 2));
  }
  function increase() {
    if (day == 100) setDay(100);
    else setDay(day + 1);
    setBottles(Math.ceil(day / 2));
  }
  return (
    <>
      {/* <div className="head">
        <header>
          <div className="header container">
            <div className="left">
              <a href="#">
                <img src="logo.png" alt="" />
              </a>
            </div>
            <ul className="navbar">
              <li className="nav-item">
                <a className="nav-link" href="#description">
                  производство
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#calculator-section">
                  вода
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  напитки
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#hero">
                  доставка
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  контакты
                </a>
              </li>
            </ul>
          </div>
        </header>

        <div id="hero" className="container hero">
          <div className="left">
            <h1>
              артезианская вода <br /> с доставкой <br /> по казани{" "}
            </h1>
            <form id="form">
              <input type="tel" placeholder="ваш телефон" />
              <button className="submit-btn" type="submit">
                заказать
              </button>
            </form>
          </div>
          <div className="right">
            <div className="contacts">
              <a href="tel:+7(8334)3-83-66">
                +7 (8334) 3-83-66{" "}
                <img src="telephone-icon.png" alt="Telephone" />
              </a>
              <a href="tel:+998977002321">
                +7 (953) 696-83-66{" "}
                <img src="whatsapp-icon.png" alt="WhatsApp" />
              </a>
              <a href="http://instagram.com/_u/{@vodaviatskaia}">
                @vodaviatskaia
                <img src="instagram-icon.png" alt="Instagram" />
              </a>
            </div>
            <img className="big-bottles" src="big-bottles.png" alt="" />
          </div>
        </div>
      </div> */}

      <main>
        <section id="causes">
          <div className="container">
            <h2>Три причины</h2>
            <h2>заказать воду Вятскую</h2>
            <div className="boxes">
              <div className="box">
                <div className="img-control">
                  <img src="cause-1-img.png" alt="image" />
                </div>
                <p>
                  Содержит все необходимые <br /> макро и микроэлементы <br /> —
                  кальций, магний, натрий и йод.
                </p>
              </div>
              <div className="box">
                <div className="img-control">
                  <img src="cause-2-img.png" alt="image" />
                </div>
                <p>
                  Более 10 лет на рынке питьевой воды. <br /> 2000 клиентов
                  каждый день получают воду. <br /> 5000 клиентов обслуживаются
                  в месяц.
                </p>
              </div>
              <div className="box">
                <div className="img-control">
                  <img src="cause-3-img.png" alt="image" />
                </div>
                <p>
                  Доставка воды домой и в офис <br /> без задержек. Развозим
                  воду по Казани. <br /> Возможны поставки в Иннополис,
                  Зеленодольск
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="calculator-section">
          <div className="container">
            <div className="calculator">
              <h3>Калькулятор воды</h3>
              <div className="boxes">
                <div className="box">
                  <h5>Мы заказываем воду</h5>
                  <button className="option opt-1">в офис</button> <br />
                  <button className="option opt-2">домой</button>
                </div>
                <hr />
                <div className="box">
                  <div className="water-amount">
                    <h5>НАМ НУЖЕН ЗАПАС НА</h5>
                    <div className="" style={{ display: "flex", gap: "20px" }}>
                      <button className="decrease" onClick={decrease}>
                        -
                      </button>
                      <p className="amount">{day}</p>
                      <button className="increase" onClick={increase}>
                        +
                      </button>
                    </div>
                    <p>дней</p>
                  </div>
                </div>
                <hr />
                <div className="box">
                  <h5>готовка</h5>
                  <button className="option opt-1">с готовкой</button> <br />
                  <button className="option opt-2">без готовки</button>
                </div>
              </div>
              <div className="price">
                <div className="d-flex  align-items-center gap-4">
                  <p>
                    Ориентировочное <br /> количество воды
                  </p>
                  <img src="bottle.png" alt="image" />
                  <h6>{Math.ceil(bottles)}</h6>
                </div>
                <div className="d-flex  align-items-center gap-4">
                  <p>
                    Цена со скидкой 10% <br /> -от 20 бутылей
                  </p>
                  <img src="credit-card.png" alt="image" />
                  <h6>{price}</h6>
                </div>
                <button type="submit">заказать</button>
              </div>
            </div>
          </div>
        </section>

        <section id="description">
          <div className="container">
            <h2>
              Вода вятская — ПИТЬЕВАЯ <br /> ВОДА ДЛЯ ДОМА И ОФИСА
            </h2>
            <p>
              Выбрать компанию, предлагающую действительно хороший товар, не
              так-то просто. <br /> Высокая цена далеко не всегда означает
              отменное качество, порой предлагается простая вода из-под крана, о
              чём можно узнать из этикетки.
            </p>
            <p
              className="second-body"
              style={{ display: isActive ? "block" : "" }}
            >
              Наша компания предлагает действительно качественный товар и
              гарантирует своевременную доставку питьевой воды до дома или
              офиса. У нас вы можете также купить кулер для воды, что позволит
              легко запасаться нужным количеством и получать легко и быстро, а
              также иметь возможность в любой момент налить себе ароматного чаю.
              Такие приспособления незаменимы в офисе, а теперь используются и в
              квартирах.
            </p>
            <div className="d-flex">
              <button onClick={addSecondBody }
              style={{ display: isActive ? "none" : "" }}
              className="ms-auto me-auto">
                Подробнее
              </button>
            </div>

            <h3>Наше производство</h3>
            <div className="production-video">
              <iframe
                width="420"
                height="450"
                src="https://www.youtube.com/embed/WTh3Zc_r3s8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer" id="footer">
            <div className="left">
              <img src="footer-logo.png" alt="logo" />
              <div className="info phone-number">
                <img src="f-phone-logo.png" alt="phone-number" />
                <a href="tel:+7 (8334) 3-83-66">+7 (8334) 3-83-66</a>
              </div>
              <div className="info whatsapp-number">
                <img src="f-whatsapp-logo.png" alt="whatsapp" />
                <a href="tel:+7 (953) 696-83-66">+7 (953) 696-83-66</a>
              </div>
              <div className="info location">
                <img src="f-phone-logo.png" alt="location" />
                <p>
                  г. Вятские Поляны <br /> ул. Чехова дом 34
                </p>
              </div>
            </div>
            <div className="center">
              <a href="#description">Производство</a>
              <a href="#calculator-section">Вода</a>
              <a href="#">Напитки</a>
              <a href="#hero">Доставка</a>
              <a href="#footer">Контакты</a>
            </div>
            <div className="right">
              <div className="youtube">
                <a href="#">youtube.com</a>
                <img src="youtube-icon.png" alt="youtube" />
              </div>
              <div className="vkontakte">
                <a href="#">vk.com/vodakzn</a>
                <img src="vkontakte-icon.png" alt="vkontakte" />
              </div>
              <div className="instagram">
                <a href="#">@vodakzn</a>
                <img src="f-instagram-icon.png" alt="istagram" />
              </div>
              <div className="gmail">
                <a href="mail:voda@gmail.com">voda@gmail.com</a>
                <img src="gmail-icon.png" alt="gmail" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

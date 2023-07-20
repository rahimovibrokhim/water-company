import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [day, setDay] = useState(1);
  let [bottles, setBottles] = useState(1);
  let [addInfo, setAddInfo] = useState(false);
  let [toOffice, setToOffice] = useState(false);
  let [toHome, setToHome] = useState(false);
  let [withPreparation, setWithPrep] = useState(false);
  let [withoutPreparation, setWithoutPrep] = useState(false);
  let [modal, setModal] = useState(false);
  let phoneNumber = useRef();
  let modalNumber = useRef();

  let price = bottles * 100;
  if (bottles >= 20) price = bottles * 100 - bottles * 10;

  // phone submit in hero section
  function phoneSubmit(e) {
    e.preventDefault();
    phoneNumber.current.value = "";
    toast.success("Мы свяжемся через 3-5 минут", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  // confirmation of information in calculator section
  function confirmOrder(e) {
    e.preventDefault();
    // cheking selection of place to order
    if (toHome == false && toOffice == false) {
      toast.error("Выберите местоположение", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // cheking selection of water type
    } else if (withPreparation == false && withoutPreparation == false) {
      toast.error("Выберите вид готовки", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setModal(true);
      setDay(1);
      setBottles(1);
      setToHome(false);
      setToOffice(false);
      setWithPrep(false);
      setWithoutPrep(false);
    }
  }
  // submition of order in calculator section
  function submitOrder(e) {
    e.preventDefault();
    toast.success("Ваш заказ принят", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setModal(false);
    modalNumber.current.value = "";
  }

  // seletions in calculator section
  function orderToOffice() {
    if (toOffice == false) setToOffice(true);
    else setToOffice(false);
    if (toHome == true && toOffice == false) setToHome(false);
  }

  function orderToHome() {
    if (toHome == false) setToHome(true);
    else setToHome(false);
    if (toOffice == true && toHome == false) setToOffice(false);
  }

  function waterPreparation() {
    if (withPreparation == false) setWithPrep(true);
    else setWithPrep(false);
    if (withoutPreparation == true && withPreparation == false)
      setWithoutPrep(false);
  }

  function waterNoPreparation() {
    if (withoutPreparation == false) setWithoutPrep(true);
    else setWithoutPrep(false);
    if (withPreparation == true && withoutPreparation == false)
      setWithPrep(false);
  }
  /////////////

  // additional info in description section
  function addSecondBody() {
    setAddInfo(true);
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

  // close modal onclick window
  window.onclick = function (e) {
    if (e.target == document.querySelector(".order-modal")) setModal(close);
  };
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="logo.png" className="logo" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul
                className="navbar-nav text-center gap-4"
                style={{ marginLeft: "auto" }}
              >
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
          </div>
        </nav>
      </header>
      <main>
        <section id="hero">
          <div className="containerr hero">
            <div className="left">
              <h1>артезианская вода с доставкой по казани </h1>
              <h2 className="d-none small-intro">
                артезианская вода с доставкой по казани{" "}
              </h2>
              <form id="form" onSubmit={phoneSubmit}>
                <input
                  type="number"
                  placeholder="+7 (953) 696-83-66"
                  min={4}
                  required
                  ref={phoneNumber}
                />
                <button className="submit-btn" type="submit">
                  заказать
                </button>
              </form>
            </div>
            <div className="right">
              <div className="contacts">
                <a href="tel:+7(8334)3-83-66">
                  +7 (8334) 3-83-66
                  <img src="telephone-icon.png" alt="Telephone" />
                </a>
                <a href="tel:+7(953)696-83-66">
                  +7 (953) 696-83-66
                  <img src="whatsapp-icon.png" alt="WhatsApp" />
                </a>
                <a
                  href="https://www.instagram.com/vodaviatskaia/"
                  target="_blank"
                >
                  @vodaviatskaia
                  <img src="instagram-icon.png" alt="Instagram" />
                </a>
              </div>
              <img className="big-bottles" src="big-bottles.png" alt="" />
            </div>
          </div>
        </section>

        <section id="causes">
          <div className="containerr">
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
          <div className="containerr">
            <form onSubmit={confirmOrder} className="calculator">
              <h3>Калькулятор воды</h3>
              <div className="boxes">
                <div className="box">
                  <h5>Мы заказываем воду</h5>
                  <button
                    type="button"
                    onClick={orderToOffice}
                    className={`option opt-1 ${toOffice ? "chosen" : ""}`}
                  >
                    в офис
                  </button>
                  <br />
                  <button
                    type="button"
                    onClick={orderToHome}
                    className={`option opt-2 ${toHome ? "chosen" : ""}`}
                  >
                    домой
                  </button>
                </div>
                <hr />
                <div className="box">
                  <div className="water-amount">
                    <h5>НАМ НУЖЕН ЗАПАС НА</h5>
                    <div style={{ display: "flex", gap: "20px" }}>
                      <button
                        type="button"
                        className="decrease"
                        onClick={decrease}
                      >
                        -
                      </button>
                      <p className="amount">{day}</p>
                      <button
                        type="button"
                        className="increase"
                        onClick={increase}
                      >
                        +
                      </button>
                    </div>
                    <p>дней</p>
                  </div>
                </div>
                <hr />
                <div className="box">
                  <h5>готовка</h5>
                  <button
                    type="button"
                    onClick={waterPreparation}
                    className={`option opt-1 ${
                      withPreparation ? "chosen" : ""
                    }`}
                  >
                    с готовкой
                  </button>{" "}
                  <br />
                  <button
                    type="button"
                    onClick={waterNoPreparation}
                    className={`option opt-2 ${
                      withoutPreparation ? "chosen" : ""
                    }`}
                  >
                    без готовки
                  </button>
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
            </form>
          </div>
        </section>
        <ToastContainer />

        <section id="description">
          <div className="containerr">
            <h2>
              Вода вятская — ПИТЬЕВАЯ <br /> ВОДА ДЛЯ ДОМА И ОФИСА
            </h2>
            <p>
              Выбрать компанию, предлагающую действительно хороший товар, не
              так-то просто. Высокая цена далеко не всегда означает отменное
              качество, порой предлагается простая вода из-под крана, о чём
              можно узнать из этикетки.
            </p>
            <p
              className="second-body"
              style={{ display: addInfo ? "block" : "" }}
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
              <button
                onClick={addSecondBody}
                style={{ display: addInfo ? "none" : "" }}
                className="ms-auto me-auto"
              >
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
        <div className="containerr">
          <div className="footer" id="footer">
            <div className="left">
              <a href="#" className="logo">
                <img src="footer-logo.png" alt="logo" />
              </a>
              <div className="info phone-number">
                <img src="f-phone-logo.png" alt="phone-number" />
                <a href="tel:+7 (8334) 3-83-66">+7 (8334) 3-83-66</a>
              </div>
              <div className="info whatsapp-number">
                <img src="f-whatsapp-logo.png" alt="whatsapp" />
                <a href="tel:+7 (953) 696-83-66">+7 (953) 696-83-66</a>
              </div>
              <div className="info location">
                <img src="f-location-logo.png" alt="location" />
                <a href="https://goo.gl/maps/kyEjyEXhZRwasPAQ7" target="_blank">
                  г. Вятские Поляны <br /> ул. Чехова дом 34
                </a>
              </div>
            </div>
            <div className="center gap-5">
              <a href="#description">Производство</a>
              <a href="#calculator-section">Вода</a>
              <a href="#hero">Доставка</a>
              <a href="#footer">Контакты</a>
            </div>
            <div className="right">
              <div className="youtube">
                <a href="https://www.youtube.com/@KingMachine" target="_blank">
                  youtube.com
                </a>
                <img src="youtube-icon.png" alt="youtube" />
              </div>
              <div className="vkontakte">
                <a href="https://vk.com/id265358207" target="_blank">
                  vk.com/vodakzn
                </a>
                <img src="vkontakte-icon.png" alt="vkontakte" />
              </div>
              <div className="instagram">
                <a
                  href="https://www.instagram.com/vodaviatskaia/"
                  target="_blank"
                >
                  @vodakzn
                </a>
                <img src="f-instagram-icon.png" alt="instagram" />
              </div>
              <div className="gmail">
                <a href="mailto:google@gmail.com" target="_blank">
                  voda@gmail.com
                </a>
                <img src="gmail-icon.png" alt="gmail" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <div
        className={`order-modal ${modal ? "show" : ""}`}
        // className="show order-modal"
      >
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-end">
            <button
              onClick={() => setModal(false)}
              type="button"
              className="closeModalBtn"
            >
              <img src="close-modal.png" alt="close-modal" />
            </button>
          </div>
          <div className="modal-body">
            <p>Укажите свой номер</p>
            <form onSubmit={submitOrder}>
              <input
                type="number"
                required
                min={4}
                className="modal-number"
                ref={modalNumber}
              />
              <button className="submit-btn" type="submit">
                заказать
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;

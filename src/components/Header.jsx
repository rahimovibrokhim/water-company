import React from "react";

const Header = () => {
  return (
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
  );
};

export default Header;

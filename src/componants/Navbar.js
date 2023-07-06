import React from "react";
import propType from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg my-1 navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand " href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/">
                {props.about}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/">
                Contact
              </a>
            </li>
          </ul>
          <button className="btn btn-outline-danger mx-2 " type="submit">
            Login
          </button>
          <div
             className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
          <div className="color-switcher">
            <span className="btn" id="red" onClick={props.red}></span>
            <span className="btn" id="black" onClick={props.black}></span>
            <span className="btn" id="green" onClick={props.green}></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: propType.string,
  about: propType.string,
};

Navbar.defaultProps = {
  title: "Set title Here",
  about: "Set abour Here",
};

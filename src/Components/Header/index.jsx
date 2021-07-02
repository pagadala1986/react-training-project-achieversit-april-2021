import React from "react";
import logo from "../../logo.jpg";

import { Link } from "react-router-dom";

let Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="AcieversIT" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="menus">
            <ul className="navbar-nav mb-2 mb-lg-0  ml-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active text-light"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-light">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link text-light">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/clients" className="nav-link text-light">
                  Clients
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link text-light">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

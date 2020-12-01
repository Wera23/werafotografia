import React from "react";
import { Link } from "react-router-dom";

import "./BaseLayout.css";

const BaseLayout = ({ children }) => {
  return (
    <div className="page">
      <ul className="menu">
        <li className="menuLi">
          <i className="icon-pagelines menuIcon" />
          <Link className="menuLink" to="/">
            Strona główna
          </Link>
        </li>

        <li className="menuLi">
          <i className="icon-fog-sun menuIcon" />
          <Link className="menuLink" to="/projects">
            Tematy
          </Link>
        </li>

        <li className="menuLi">
          <i className="icon-paper-plane menuIcon" />
          <Link className="menuLink" to="/about">
            Informacja
          </Link>
        </li>
      </ul>
      <div className="pageTitle">Wera Chodanionek</div>
      {/* <Header /> */}
      {children}

      <p className="footerText">Wera Chodanionek Fotografia | 2020</p>
    </div>
  );
};

export default BaseLayout;

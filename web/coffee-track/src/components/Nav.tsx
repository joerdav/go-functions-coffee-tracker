import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from "react-google-login";
import { refreshTokenSetup } from "../refreshTokenSetup";
import axios from "axios";
import store from "../store";
import { Login } from "./Login";

const Nav = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" href="https://bulma.io">
          Coffee Track
        </Link>

        <a
          role="button"
          className={"navbar-burger " + (expanded ? "is-active" : "")}
          aria-label="menu"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={"navbar-menu " + (expanded ? "is-active" : "")}
      >
        <div className="navbar-start">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-primary" to="/submit">
                <strong>New Entry</strong>
              </Link>
              <Link className="button is-secondary" to="/search">
                Search
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">{<Login />}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

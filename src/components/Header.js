import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav id="nav" class="navbar navbar-expand-md " id="mainNav">
          <div class="container">
            <a class="navbar-brand" href="index.html" title="uiCookies:FineOak">
              <span
                class="tit2 t-center"
                style={{ color: "#fff", fontSize: "34px" }}
              >
                MyResto
              </span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="active nav-item">
                  <a class="nav-link smooth-scroll" href="#section-welcome">
                    WELCOME{" "}
                  </a>
                </li>
                <li class="active nav-item">
                  <a class="nav-link smooth-scroll" href="#about">
                    SPECIALTIES
                  </a>
                </li>
                <li class="active nav-item">
                  <a class="nav-link smooth-scroll" href="#services">
                    MENU{" "}
                  </a>
                </li>
                <li class="active nav-item">
                  <a class="nav-link smooth-scroll" href="#team">
                    RESERVATION
                  </a>
                </li>
                <li class="active nav-item">
                  <a class="nav-link" href="option.html">
                    CONTACT{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

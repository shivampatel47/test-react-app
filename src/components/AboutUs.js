import React, { Component } from "react";

import img from "../img/foof.jpg";
export default class AboutUs extends Component {
  render() {
    return (
      <section
        className="section-welcome bg1-pattern"
        style={{ paddingBottom: "105px", paddingTop: "120px", background: "white" }}
      >
        <div class="container">
          <div class="row">
            <div
              class="col-md-6"
              style={{ paddingTop: "45px", paddingBottom: "30px" }}
            >
              <div class="wrap-text-welcome t-center">
                <span class="tit2 t-center">My Resto</span>

                <h3 class="tit3 t-center m-b-35 m-t-5">About Us</h3>

                <p class="t-center m-b-22 size3 m-l-r-auto">
                  Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis
                  est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante
                  egestas mi, ac facilisis ligula sem id neque.
                </p>
              </div>
            </div>

            <div class="col-md-6 p-b-30">
              <div
                class="wrap-pic-welcome size2  hov-img-zoom m-l-r-auto"
                style={{ borderRadius: "10px", maxWidth: "390px" }}
              >
                <img src={img} alt="IMG-OUR" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

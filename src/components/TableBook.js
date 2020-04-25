import React, { Component } from "react";

import img from "../img/seats.jpg";
export default class TableBook extends Component {
  render() {
    return (
      <section
        className="section-welcome bg1-pattern"
        style={{ paddingBottom: "80px", paddingTop: "80px" }}
      >
        <div class="container">
          <div class="row">
            <div
              class="col-md-6"
              style={{ paddingTop: "45px", paddingBottom: "30px" }}
            >
              <div class="wrap-text-welcome t-center">
                <span class="tit2 t-center">Reservation</span>

                <h3 class="tit3 t-center m-b-35 m-t-5">BOOK TABLE</h3>

                <div class="row">
                  <div class="col-md-6">
                    <span class="txt9">Date</span>
                    <div class="form-group">
                      <input class="form-control" type="date" name="date" />
                      <i
                        class="btn-calendar fa fa-calendar ab-r-m hov-pointer m-r-18"
                        aria-hidden="true"
                      ></i>
                    </div>

                    <span class="txt9">Time</span>
                    <div class="form-group">
                      <select
                        class="form-control"
                        name="time"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option>9:00</option>
                        <option>9:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                      </select>
                    </div>

                    <span class="txt9">People</span>
                    <div class="form-group">
                      <select
                        class="form-control"
                        name="people"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option>1 person</option>
                        <option>2 people</option>
                        <option>3 people</option>
                        <option>4 people</option>
                        <option>5 people</option>
                        <option>6 people</option>
                        <option>7 people</option>
                        <option>8 people</option>
                        <option>9 people</option>
                        <option>10 people</option>
                        <option>11 people</option>
                        <option>12 people</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <span class="txt9">Name</span>
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        name="name"
                        placeholder="Name"
                      />
                    </div>

                    <span class="txt9">Phone</span>
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        name="phone"
                        placeholder="Phone"
                      />
                    </div>

                    <span class="txt9">Email</span>
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn btn-success">Book Table</button>
            </div>

            <div class="col-md-6 p-b-30" style={{ paddingTop: "100px" }}>
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

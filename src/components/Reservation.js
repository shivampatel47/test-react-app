import React, { Component } from "react";

export default class Reservation extends Component {
  render() {
    return (
      <div className="Reservation ">
        <section className="probootstrap-section probootstrap-bg-white">
          <div className="container">
            <h2 class="tit2 t-center">Reservation</h2>

            <h3 class="tit3 t-center pb-5">BOOK TABLE</h3>
            <div className="row">
              <div className="col-md-12 probootstrap-animate">
                <form method="post" className="probootstrap-form">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label for="people">How Many People</label>
                        <div className="form-field">
                          <i className="icon icon-chevron-down"></i>
                          <select
                            name="people"
                            id="people"
                            className="form-control"
                          >
                            <option value="#">1 people</option>
                            <option value="#">2 people</option>
                            <option value="#">3 people</option>
                            <option value="#">4+ people</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label for="date">Date</label>
                        <div className="form-field">
                          <i className="icon icon-calendar"></i>
                          <input
                            type="date"
                            id="date"
                            className="form-control"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label for="time">Time</label>
                        <div className="form-field">
                          <i className="icon icon-clock"></i>
                          <input
                            type="time"
                            id="time"
                            className="form-control"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label for="name">Name</label>
                        <div className="form-field">
                          <i className="icon icon-user2"></i>
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="Your full name"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label for="email">Email</label>
                        <div className="form-field">
                          <i className="icon icon-mail"></i>
                          <input
                            type="text"
                            id="email"
                            className="form-control"
                            placeholder="Your email address"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label for="phone">Phone</label>
                        <div className="form-field">
                          <i className="icon icon-phone"></i>
                          <input
                            type="text"
                            id="phone"
                            className="form-control"
                            placeholder="Your phone"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 submitButton col-md-offset-4">
                      <input
                        type="submit"
                        name="submit"
                        id="submit"
                        value="Submit"
                        className="btn btn-lg btn-primary btn-block"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

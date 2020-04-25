import React, { Component } from "react";
import img from "../img/foof.jpg";

export default class Specialities extends Component {
  render() {
    return (
      <section class="probootstrap-section bg1-pattern">
        <h2 class="tit2 t-center">Discover</h2>

        <h3 class="tit3 t-center m-b-35 m-t-5">OUR SPECIALTIES</h3>
        <div class="container" style={{ marginTop: "170px" }}>
          <div class="row">
            <div class="probootstrap-cell-retro">
              <div class="half">
                <div
                  class="probootstrap-cell probootstrap-animate fadeIn probootstrap-animated"
                  data-animate-effect="fadeIn"
                >
                  <div class="image img2"></div>
                  <div class="text text-center">
                    <h3>Baked Potato Pizza</h3>
                    <p>
                      Laboriosam pariatur modi praesentium deleniti molestiae
                      officiis atque numquam.
                    </p>
                    <p class="price">$20.99</p>
                  </div>
                </div>
                <div
                  class="probootstrap-cell reverse probootstrap-animate fadeIn probootstrap-animated"
                  data-animate-effect="fadeIn"
                >
                  <div class="image img1 right"></div>
                  <div class="text text-center left">
                    <h3>Salted Fried Chicken</h3>
                    <p>
                      Laboriosam pariatur modi praesentium deleniti molestiae
                      officiis atque numquam.
                    </p>
                    <p class="price">$19.99</p>
                  </div>
                </div>
                <div
                  class="probootstrap-cell probootstrap-animate fadeIn probootstrap-animated"
                  data-animate-effect="fadeIn"
                >
                  <div class="image img2">
                    {" "}
                    {/* <img src={img} alt="" style={{ width: "100%" }} /> */}
                  </div>
                  <div class="text text-center">
                    <h3>Imported Salmon Steak</h3>
                    <p>
                      Laboriosam pariatur modi praesentium deleniti molestiae
                      officiis atque numquam.
                    </p>
                    <p class="price">$20.99</p>
                  </div>
                </div>
              </div>
              <div class="half">
                <div
                  class="probootstrap-cell probootstrap-animate fadeIn probootstrap-animated"
                  data-animate-effect="fadeIn"
                >
                  <div class="image img1">
                    {" "}
                    {/* <img src={img} alt="" style={{ width: "100%" }} /> */}
                  </div>{" "}
                  <div class="text text-center">
                    <h3>Roast Beef (4 sticks)</h3>
                    <p>
                      Laboriosam pariatur modi praesentium deleniti molestiae
                      officiis atque numquam.
                    </p>
                    <p class="price">$32.99</p>
                  </div>
                </div>
                <div
                  class="probootstrap-cell reverse probootstrap-animate fadeIn probootstrap-animated"
                  data-animate-effect="fadeIn"
                >
                  <div class="image img2 right"></div>

                  <div class="text text-center left">
                    <h3>Tuna Roast Source</h3>
                    <p>
                      Laboriosam pariatur modi praesentium deleniti molestiae
                      officiis atque numquam.
                    </p>
                    <p class="price">$25.99</p>
                  </div>
                </div>
                <div
                  class="probootstrap-cell probootstrap-animate fadeIn probootstrap-animated"
                  data-animate-effect="fadeIn"
                >
                  <div class="image img1"> </div>
                  <div class="text text-center">
                    <h3>Fried Potatoes with Garlic</h3>
                    <p>
                      Laboriosam pariatur modi praesentium deleniti molestiae
                      officiis atque numquam.
                    </p>
                    <p class="price">$32.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

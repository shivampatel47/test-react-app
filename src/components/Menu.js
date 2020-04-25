import React, { Component } from 'react'
import img_square_1 from '../img/img_square_1.jpg';
import img_square_2 from '../img/img_square_2.jpg';
import img_square_3 from '../img/img_square_3.jpg';
import img_square_4 from '../img/img_square_4.jpg';
import img_square_5 from '../img/img_square_5.jpg';

export default class Menu extends Component {
    render() {
        return (
                <section style={{background: "#000"}} className="menu-items probootstrap-section probootstrap-bg-white">
                    <div className="container">
                        <div class="probootstrap-heading text-center dark" style={{"padding": "0%"}}>
                            <h1 class="primary-heading tit2 font-change-menu">Discover</h1>
                            <h3 class="secondary-heading font-change" style={{color: "#fff"}}>Our Menu</h3>
                            </div>
                        <div className="row">
                        <div className="col-md-6">
                            <ul className="menus">
                            <li>
                                <figure className="image"><img src={img_square_1} className="img-rounded rounded-circle rounded" alt="Food image"/></figure>
                                <div className="text">
                                <span className="price">Rs. 350</span>
                                <h3 style={{color: "#fff"}}>Fried Potatoes with Garlic</h3>
                                <p style={{color: "#8b8e94"}}>Crab / Potatoes / Rice</p>
                                </div>
                            </li>
                            <li>
                                <figure className="image"><img src={img_square_2} className="img-rounded rounded-circle rounded" alt="Food image"/></figure>
                                <div className="text">
                                <span className="price">Rs. 150</span>
                                <h3 style={{color: "#fff"}}>Tuna Roast Source</h3>
                                <p style={{color: "#8b8e94"}}>Crab / Potatoes / Rice</p>
                                </div>
                            </li>
                            <li>
                                <figure className="image"><img src={img_square_3} className="img-rounded rounded-circle rounded" alt="Food image"/></figure>
                                <div className="text">
                                <span className="price">Rs. 250</span>
                                <h3 style={{color: "#fff"}}>Roast Beef (4 sticks)</h3>
                                <p style={{color: "#8b8e94"}}>Crab / Potatoes / Rice</p>
                                </div>
                            </li>
                            <li>
                                <figure className="image"><img src={img_square_4} className="img-rounded rounded-circle rounded" alt="Food image"/></figure>
                                <div className="text">
                                <span className="price">Rs. 260</span>
                                <h3 style={{color: "#fff"}}>Salted Fried Chicken</h3>
                                <p style={{color: "#8b8e94"}}>Crab / Potatoes / Rice</p>
                                </div>
                            </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="menus">
                            <li>
                                <figure className="image"><img src={img_square_5} className="img-rounded rounded-circle rounded" alt="Food image"/></figure>
                                <div className="text">
                                <span className="price">Rs. 400</span>
                                <h3 style={{color: "#fff"}}>Baked Potato Pizza</h3>
                                <p style={{color: "#8b8e94"}}>Crab / Potatoes / Rice</p>
                                </div>
                            </li>
                            <li>
                                <figure className="image"><img src={img_square_1} className="img-rounded rounded-circle rounded" alt="Food image"/></figure>
                                <div className="text">
                                <span className="price">Rs. 360</span>
                                <h3 style={{color: "#fff"}}>Fried Potatoes with Garlic</h3>
                                <p style={{color: "#8b8e94"}}>Crab / Potatoes / Rice</p>
                                </div>
                            </li>
                            <li>
                                <figure className="image"><img src={img_square_2} className="img-rounded rounded-circle rounded" alt="Food image"/></figure>
                                <div className="text">
                                <span className="price">Rs. 280</span>
                                <h3 style={{color: "#fff"}}>Salted Fried Chicken</h3>
                                <p style={{color: "#8b8e94"}}>Crab / Potatoes / Rice</p>
                                </div>
                            </li>
                            <li>
                                <figure className="image"><img src={img_square_3} className="img-rounded rounded-circle rounded" alt="Food image"/></figure>
                                <div className="text">
                                <span className="price">Rs. 200</span>
                                <h3 style={{color: "#fff"}}>Tuna Roast Source</h3>
                                <p style={{color: "#8b8e94"}}>Crab / Potatoes / Rice</p>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </section>
        )
    }
}

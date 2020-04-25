import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <section class="probootstrap-footer " style={{background: "#000", padding: "6% 0", color: "#fff"}}>
                    <div class="container">
                        <div class="row">
                        <div class="col-md-6">
                            <div>
                            <h3 className="footer-font-change">LOCATIONS</h3>
                            <div class="row">
                                <div class="col-md-6">
                                <p className="footer-smallFont-change">1st Floor Shalini Road <br/> Vadodara Gujarat, 390007</p>
                                </div>
                                <div class="col-md-6">
                                <p className="footer-smallFont-change"> 2nd Floor Shalim Road <br/> Vadodara Gujarat, 390007</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-6 probootstrap-animate">
                            <div class="probootstrap-footer-widget">
                            <h3 className="footer-font-change">OPEN HOURS</h3>
                            <div class="row">
                                <div class="col-md-4">
                                <p className="footer-smallFont-change">Monday - Thursday <br/> 5:30pm - 10:00pm</p>
                                </div>
                                <div class="col-md-4">
                                <p className="footer-smallFont-change">Friday - Sunday <br/> 5:30pm - 10:00pm</p>
                                </div>
                                <div class="col-md-4">
                                <p className="footer-smallFont-change">Available for Catering <br/> Email or Call Us</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section class="footer-copyright">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-8">
                            <p class="copyright-text">&copy; 2020 MyResto. All Rights Reserved.</p>
                        </div>
                        <div class="col-md-4 text-right">
                            <a href="#"><i className="fab icon fa-twitter"></i></a>
                            <a href="#"><i className="fab icon fa-facebook-f"></i></a>
                            <a href="#"><i className="fab icon fa-instagram"></i></a>
                        </div>
                        </div>
                    </div>
                </section>                
            </div>
        )
    }
}

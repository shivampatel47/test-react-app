import React, { Component } from 'react'
import Footer from './Footer'

export default class ContactUs extends Component {
    render() {
        return (
            <div className="ContactUS">
                <section class="probootstrap-section probootstrap-bg-white bg1-pattern spacing" data-section="contact">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-6 text-center probootstrap-animate">
                            <div class="probootstrap-heading dark">
                            <h1 class="primary-heading tit2 font-change-primary">Contact</h1>
                            <h3 class="secondary-heading font-change">Let's Chat</h3>
                            </div>
                            <p style={{padding : "5%", color: "#8b8e94"}}>Voluptatibus quaerat laboriosam fugit non Ut <br/>consequatur animi est molestiae enim a voluptate <br/>
                            totam natus modi debitis dicta voluptatum <br/>quod sapiente illo saepe explicabo quisquam <br/>perferendis labore et illum suscipit</p>
                        </div>
                        <div class="col-md-6 col-md-push-1 probootstrap-animate">
                            <form method="post" class="probootstrap-form">
                            <div class="form-group">
                                <label for="c_name">Your Name</label>
                                <div class="form-field">
                                <input type="text" id="c_name" class="form-control"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="c_email">Your Email</label>
                                <div class="form-field">
                                <input type="text" id="c_email" class="form-control"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="c_message">Your Message</label>
                                <div class="form-field">
                                <textarea name="c_message" id="c_message" cols="30" rows="10" class="form-control"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="c_submit" id="c_submit" value="Send Message" class="btn btn-primary btn-lg"/>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </section>

                    <Footer/>
            </div>
        )
    }
}

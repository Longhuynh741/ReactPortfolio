import React, { Component } from "react";
require("./style.css");
export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="three-column-footer-contact-form-container">
          <footer
            className="three-column-footer-contact-form"
            data-equalizer
            data-equalize-by-row="true"
          >
            <div className="footer-left" data-equalizer-watch>
              <div className="baseline">
                <div className="contact-details">
                  <h2>Contact details</h2>
                  <h5>Phone: 678-799-5090</h5>
                  <h5>Email:Longhuynh741@yahoo.com</h5>
                  <h3>City:Atlanta,GA</h3>
                </div>
              </div>
            </div>
            <div className="footer-center" data-equalizer-watch>
              <div className="baseline">
                <div className="newsletter">
                  <h6>Contact form:</h6>
                  <div class="input-group">
                    <textarea placeholder="Full Name"></textarea>
                  </div>
                  <div class="input-group">
                    <textarea placeholder="Email"></textarea>
                  </div>
                  <div class="input-group">
                    <textarea placeholder="Phone"></textarea>
                  </div>
                  <a className="button expanded" href="/">
                    Submit
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

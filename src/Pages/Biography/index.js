import React, { Component } from "react";
require("./style.css")
export default class Biography extends Component {
  render() {
    return (
      <div>
        <div class="about-the-author">
          <h3 class="author-title">About Me</h3>
          <div class="row">
            <div class="small-12 medium-4 columns">
              <div class="author-image">
                <img src="https://longhuynh741.github.io/UpdatedPortfolio/assets/images/download.png" />
              </div>
            </div>
            <div class="small-12 medium-8 columns">
              <h4 class="separator-left"></h4>
              <p>
                Hello! My name is Long Huynh and I am 25 years old from Atlanta,
                GA. I am studying to become a MERN developer. I am set to
                graduate from the GA Tech's FullStack Bootcamp. My hobbies
                include volleyball, coding, and video games. Nice to meet you!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

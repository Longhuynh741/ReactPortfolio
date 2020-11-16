import React, { Component } from "react";
require("./style.css");

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="card-user-container">
          <div className="card-user-avatar">
            <img src="https://avatars1.githubusercontent.com/u/69899325?s=400&u=e29f72c3efb9e4fbb78864a3579b9fbca33e39a0&v=4" alt="" class="user-image" />
          </div>

          <div className="card-user-bio">
            <h4>Long Huynh</h4>
            <p>FullStack MERN Developer, GA-Tech Bootcamp Graduate </p>
            <span className="location">
              <span className="location-icon fa fa-map-marker"></span>
              <span className="location-text">Atlanta, GA</span>
            </span>
          </div>

          <div className="card-user-social">
            <ul className="menu">
              <li className="fa fa-github"><a href="https://github.com/Longhuynh741" target="_blank">GitHub </a> </li>
              <li className="fa fa-dribbble"> <a href="https://www.facebook.com/long.huynh.56" target="_blank">Facebook </a></li>
              <li className="fa fa-instagram"><a href="https://www.linkedin.com/in/long-huynh-299498193" target="_blank"> Linked In </a></li>
              <li className="fa"> <a href="https://longhuynh741.github.io/Portfolio-3/assets/images/Long's%20Resume%20(1).pdf" target="_blank"> Resume </a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
require("../NavBar/style.css");

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header id="header" className="topbar-sticky-shrink-header"></header>

        <div data-sticky-container>
          <div
            data-sticky
            data-margin-top="0"
            data-top-anchor="header:bottom"
            data-btm-anchor="content:bottom"
          >
            <div className="top-bar topbar-sticky-shrink">
              <div className="top-bar-right">
                <ul className="menu menu-hover-lines">
                  <li className="active">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/Portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="/Contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            </div>
            

            
      </div>
    );
  }
}

import React, { Component } from "react";
require("../Portfolio/style.css");
export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="work-feature-block row">
          <h1> My Projects: </h1>
          <div className="columns medium-7">
            <img
              className="work-feature-block-image"
              src="https://github.com/Longhuynh741/project-2/blob/main/images/Home%20Page.png?raw=true"
            />
          </div>
          <div className="columns medium-5">
            <h1 className="work-feature-block-header">The Wedding Pot</h1>
            <h2>Project Details:</h2>
            <h3>
              This project was done with other students from the GT-TECH
              Bootcamp. It was an amazing project where we build a FullStack app
              that aimed to connect wedding planners with wedding vendors.
            </h3>
          </div>
            </div>
            

            <div className="work-feature-block row">
          <h1> My Projects: </h1>
          <div className="columns medium-7">
            <img
              className="work-feature-block-image"
              src="https://github.com/Longhuynh741/Fitness-Tracker/raw/main/assets/images/fitness1.PNG"
            />
          </div>
          <div className="columns medium-5">
            <h1 className="work-feature-block-header">Fitness Tracker</h1>
            <h2>Project Details:</h2>
            <h3>
                This was alot of fun making! This app was the first time I implemented MongoDB to create an fitness tracker app. The app allows you to create workouts, commit to your workouts, and see data from your workouts. This all functions with both a front end and a backend database using Mongoose.
            </h3>
          </div>
            </div>
            
            <div className="work-feature-block row">
          <h1> My Projects: </h1>
          <div className="columns medium-7">
            <img
              className="work-feature-block-image"
              src="https://user-images.githubusercontent.com/69770137/99292540-5758f400-280f-11eb-93f7-c3299670bd29.png"
            />
          </div>
          <div className="columns medium-5">
            <h1 className="work-feature-block-header">Verdant</h1>
            <h2>Project Details:</h2>
            <h3>
            The final project from my Bootcamp! An React app that fully utilizes the features of React such as Components and React Hooks. The app is designed for plant enthusiasts to come and create a profile with us. Users will then be able to access our article and plant search as well as a dynamically updating profile page. 
            </h3>
          </div>
        </div>
        
      </div>
    );
  }
}

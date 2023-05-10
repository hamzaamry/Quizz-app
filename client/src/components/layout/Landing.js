import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

import uni from "../assets/uni.jpg"

class Landing extends Component {
  render() {
    return (
      <div style={{
        height: "90vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),  rgba(49, 117, 180, 0.526)), url(${uni})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }} 

      >
          <div className="Landing-page-container" >
            <h4>
              Play WebQuizz
            </h4>
            <p>
               Play a Quizz game and help donate money to charity ! 
            </p>
            <Link to="register">
              <button className="btn" >
                  Join Now 
                </button>
            </Link>
          </div>
        </div>
    
    );
  }
}

export default Landing;

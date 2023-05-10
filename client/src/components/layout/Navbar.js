import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import setAuthToken from "../../utils/setAuthToken";

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar" >
            <Link
              to="/"
              className="nav-logo"
            >
              <i className="material-icons">code</i>
              WebQuizz
            </Link>
            
          <button onClick={this.props.onLogoutClick}>
            <Link to="/login">Logout</Link>
          </button>
            
        </nav>
    );
    
  }

}

export default Navbar;

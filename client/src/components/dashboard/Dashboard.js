import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Quizz from './Quizz.js'
import "./Styles/Dashboard.css"

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "80vh" }} >
        <div>
          <div className="landing-section">
            <h4 className="landing-P">
              <b>Hey there,</b> {user.name.split(" ")[0]}
            </h4>
            <Quizz/>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

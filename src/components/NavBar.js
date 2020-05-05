import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div style={{ backgroundColor: "#ffe23c", height: "5vh", backgroundimage:"url(../components/images-videos/hiclipart.com.png)" }}>
          <Link to="/">
            <img src="images-videos/hiclipart.com.png" alt="home" height="40vh"/>
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;

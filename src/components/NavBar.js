import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div style={{ backgroundColor: "#ffe23c"}}>
          <Link to="/">
            <img src="images-videos/kindpng_319499.png" alt="home" height="40vh" style={{marginLeft: "48.5%"}} />
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;

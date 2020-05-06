import React, { Component } from "react";
import { Link } from "react-router-dom";

class BottomBar extends Component {
  render() {
    return (
      <nav>
        <div style={{ backgroundColor: "black"}}>
          <Link to="/">
            <img src="images-videos/kindpng_319499.png" alt="home" height="50vh" style={{marginLeft: "48.5%"}} />
          </Link>
        </div>
      </nav>
    );
  }
}

export default BottomBar;
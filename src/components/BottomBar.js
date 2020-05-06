import React, { Component } from "react";
import { Link } from "react-router-dom";

class BottomBar extends Component {
  render() {
    return (
      <nav>
        <div style={{ backgroundColor: "black", height:"5em", alignSelf:"bottom"}}>
          <Link to="/">
            <p style={{textAlign:"right", color:"white"}}>Did we help you find your brew today? If not, contact us here!</p>
          </Link>
        </div>
      </nav>
    );
  }
}

export default BottomBar;
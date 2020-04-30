import React, { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="Home">
        <div>
          <Link to="/beers">
            <img src="/images/beers.png" alt=" All Beers" />
            <p>Browse All Beers</p>
          </Link>
        </div>
        <div>
          <Link to="/randomizer">
            <img src="/images/new-beer.png" alt=" New Beer" />
            <p>Find a New Beer</p>
          </Link>
        </div>
      </div>
    );
  } 
}

export default Home;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import StyleCards from "./StyleCards"

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
          <div className="container">
            <h2>
              Pick as many of the following filters to help you choose the
              perfect brew.
            </h2>
            <br />
            <div className="row">
              <div className="col-sm">
                <h3>Beer Styles</h3>
                <StyleCards/>
              </div>
              <div className="col-sm">
                <h3>Countries</h3>
              </div>
              <div className="col-sm">
                <h3>Categories</h3>(broader range of beers)
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

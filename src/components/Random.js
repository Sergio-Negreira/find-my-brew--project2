import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Random extends Component {
  state = {
    beer: null,
  };

  getBeerRandomDetail() {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=open-beer-database%40public-us&rows=6000"
      )
      .then((response) => {
        const randomBeer = response.data;

        this.setState({
          beer: randomBeer,
        });
      });
  }

  componentDidMount() {
    this.getBeerRandomDetail();
  }

  render() {
    if (this.state.beer === null) {
      return <div />;
    }

    const beer = this.state.beer.records[Math.floor(Math.random() * 5973)]
      .fields;

    return (
      <div>
        <div>{/* <img src={beer.image_url} alt="beer" height="200vh"/> */}</div>
        <div>
          <h2>Your New Beer!</h2>
          <br />
          <h1>
            #{beer.id}: {beer.name}
          </h1>
          <div>
            <h3>
            {beer.descript} <br /><br /><br />
              Produced by {beer.name_breweries} <br /> 
              Style: {beer.style_name} <br />
              Category: {beer.cat_name}
            </h3>
            <p></p>
          </div>
          <p>Address: {beer.address1}</p>
          <p>City: {beer.city}</p>
          <p>State: {beer.state}</p>
          <p>Country: {beer.country}</p>
          <p>Find out more info here: <a href={beer.website} alt='URL not found'>{beer.website}</a></p>
        </div>
        <Link to="/randomizer">Find a different beer</Link>
      </div>
    );
  }
}

export default Random;

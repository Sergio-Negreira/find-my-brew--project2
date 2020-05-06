import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Details extends Component {
    
    

    render() {

        if (this.props.beer == null) {
            return <div />;
          }
          console.log(this.props)
          const beer = this.props.beer.find(beer => beer.id === this.props.match.params.id);


        return (
            <div>
                <div>
        <div>{/* <img src={beer.image_url} alt="beer" height="200vh"/> */}</div>
        <div>
          <h2>Here's your beer.</h2>
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
          <p>Find out more info here: <a href={beer.website} >{beer.website}</a></p>
        </div>
        <Link to="/beers/id:">Find a different beer</Link>
      </div>
            </div>
        )
    }
}

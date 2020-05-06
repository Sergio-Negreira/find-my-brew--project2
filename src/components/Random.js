import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Random extends Component {
  // state = {
  //   beer: null,
  // };

  // getBeerRandomDetail() {
  //   axios
  //     .get(
  //       "https://data.opendatasoft.com/api/records/1.0/search/?dataset=open-beer-database%40public-us&rows=6000"
  //     )
  //     .then((response) => {
  //       const randomBeer = response.data;

  //       this.setState({
  //         beer: randomBeer,
  //       });
  //     });
  // }

  // componentDidMount() {
  //   this.getBeerRandomDetail();
  // }

    // key = AIzaSyAsMlGvU0YuzbD715FS87otsjq9-9QRtPI

  render() {
    if (this.props.beers.length === 0) {
      return <div />;
    }
    
    let beer = this.props.beers[Math.floor(Math.random() * this.props.beers.length)];
    console.log(this.props.beers)
    console.log(beer);
    beer = beer.fields;
    // beer.name = beer.name.replace(/\W/g, "")

    return (
      <div>
        <div>{/* <img src={beer.image_url} alt="beer" height="200vh"/> */}</div>
        <div>
          <div id="randomTitle">
            <h1 style={{textAlign:"center", paddingTop:"1.5em", paddingBottom:"1.5em", fontSize: "175px", fontWeight: "bold", "letterSpacing": "-8px", lineHeight: "1"}}>Here's your beer.</h1>
            <br />
            <h1>
              #{beer.id}: {beer.name}
            </h1>
          </div>
          <div id="randomDescription">
            <h3>
             {beer.descript && <p>{beer.descript}</p>}  <br /><br />
             {beer.name_breweries && <p>Produced by {beer.name_breweries} <br /> </p>}
             {beer.style_name && <p>Style: {beer.style_name} <br /></p>}
             {beer.cat_name && <p>Category: {beer.cat_name}</p>}
            </h3>
            <p></p>
          </div>
          <div id="randomMore">
            {beer.address1 && <p>Address: {beer.address1}</p>}
            {beer.city &&<p>City: {beer.city}</p>}
            {beer.state &&<p>State: {beer.state}</p>}
            {beer.country &&<p>Country: {beer.country}</p>}
            {beer.website &&<p>Find out more info here: <a href={beer.website} alt='URL not found'>{beer.website}</a></p>}
          </div>
        </div>
        <div id="anotherOne" style={{textDecoration:"none"}}><Link to="/randomizer" style={{ textDecoration: 'none' }}> 
        <div className="sign"  >
         <span className="fast-flicker">Want</span>
         &nbsp;Anot
         <span className="fast-flicker">h</span>
         <span className="flicker">er&nbsp;</span>
         &nbsp;One
         <span className="flicker">?</span>
        </div> 
    </Link></div>
      </div>
    );
  }
}

export default Random;

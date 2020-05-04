import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Button } from "react-bootstrap";
import { countryArr } from "../components/data"

export default class CountryCards extends Component {
 
  componentDidMount() {}

  displayStyle = () => {
    return countryArr.map((countryName) => {
      return (
        <Card className="text-center" style={{ width: "11rem" }} >
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Button variant="danger">{countryName}</Button>
        </Card.Body>
      </Card>
       )
     })
   }


        

  render() {
    return (
      <div>
        {this.displayStyle()}
      </div>
    );
}
}

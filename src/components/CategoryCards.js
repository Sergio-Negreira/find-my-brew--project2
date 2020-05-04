import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Button } from "react-bootstrap";
import { categoryArr } from "../components/data"

export default class CountryCards extends Component {
 
  componentDidMount() {}

  displayStyle = () => {
    return categoryArr.map((categoryName) => {
      return (
        <Card className="text-center" style={{ width: "11rem" }} >
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Button variant="outline-danger">{categoryName}</Button>
        </Card.Body>
      </Card>
       )
     })
   }

   other = () => {
    return (
        <Card className="text-center" style={{ width: "15rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Button variant="outline-danger">Other</Button>
        </Card.Body>
      </Card> ) } 

  render() {
    return (
      <div>
        {this.displayStyle()}
        {this.other()}
      </div>
    );
}
}
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { styleArr } from "../components/data"

export default class StyleCards extends Component {
 
  displayStyle = () => {
    return styleArr.map((beerStyle) => {
      return (
        <Card className="text-center" style={{ width: "15rem", marginLeft:"auto", marginRight:"auto"}}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <ToggleButtonGroup onChange={this.props.onChangeToggle} type="checkbox" className="mb-2">
          <ToggleButton onChange={(e) => { 
              this.props.addItem(beerStyle)
            }} variant="outline-danger"
            value={beerStyle}>{beerStyle}</ToggleButton>
          </ToggleButtonGroup>
        </Card.Body>
      </Card>
       )
     })
   }

  // other = () => {
  //     return (
  //         <Card className="text-center" style={{ width: "15rem" }}>
  //         {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  //         <Card.Body>
  //           <Button variant="danger">Other</Button>
  //         </Card.Body>
  //       </Card> ) } 
        

  render() {
    return (
      <div>
        {this.displayStyle()}
        {/* {this.other()} */}
      </div>
    );
  }
}

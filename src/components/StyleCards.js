import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Button } from "react-bootstrap";

export default class StyleCards extends Component {
  componentDidMount() {}

  render() {
    return (
      <Card style={{ width: "15rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Button variant="primary">{styleArr.map()}</Button>
        </Card.Body>
      </Card>
    );
  }
}

const styleArr = [
  "Porter",
  "Traditional German-Style Bock",
  "American-Style Amber/Red Ale",
  "American-Style Stout",
  "Belgian-Style Fruit Lambic",
  "American-Style India Pale Ale",
  "American-Style Pale Ale",
  "American-Style Lager",
  "Fruit Beer",
  "Scotch Ale",
  "German-Style Doppelbock",
  "Light American Wheat Ale or Lager",
  "American-Style Brown Ale",
  "Belgian-Style Dubbel",
  "Special Bitter or Best Bitter",
  "English-Style Pale Mild Ale",
  "American-Style Light Lager",
  "German-Style Oktoberfest",
  "Sweet Stout",
  "American-Style Imperial Stout",
  "South German-Style Hefeweizen",
  "Other Belgian-Style Ales",
  "French & Belgian-Style Saison",
  "Imperial or Double India Pale Ale",
  "South German-Style Weizenbock",
  "Extra Special Bitter",
  "Belgian-Style White",
  "German-Style Heller Bock/Maibock",
  "German-Style Pilsener",
  "Scottish-Style Light Ale",
  "Old Ale",
  "Belgian-Style Tripel",
  "Golden or Blonde Ale",
  "American-Style Barley Wine Ale",
  "German-Style Brown Ale/Altbier",
  "Belgian-Style Quadrupel",
  "Baltic-Style Porter",
  "Classic English-Style Pale Ale",
  "Irish-Style Red Ale",
  "Oatmeal Stout",
  "Dark American-Belgo-Style Ale",
  "Belgian-Style Pale Strong Ale",
  "American Rye Ale or Lager",
  "German-Style Schwarzbier",
  "Herb and Spice Beer",
  "Classic Irish-Style Dry Stout",
  "Ordinary Bitter",
  "American-Style Cream Ale or Lager",
  "Winter Warmer",
  "Belgian-Style Dark Strong Ale",
  "American-Style Strong Pale Ale",
  "English-Style Dark Mild Ale",
  "Out of Category",
  "Pumpkin Beer",
  "Belgian-Style Pale Ale",
  "Bamberg-Style Bock Rauchbier",
  "American-Style India Black Ale",
  "European Low-Alcohol Lager",
  "English-Style India Pale Ale",
  "Foreign (Export)-Style Stout",
  "Strong Ale",
  "Vienna-Style Lager",
  "American-Style Dark Lager",
  "Specialty Beer",
  "Specialty Honey Lager or Ale",
  "Kellerbier - Ale",
  "Smoke Beer",
  "Imperial or Double Red Ale",
  "Other",
];

// return (
//     <Card style={{ width: "15rem" }}>
//     {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//     <Card.Body>
//       {/* <Card.Title></Card.Title> */}
//     {/* <Card.Text>
//     Some quick example text to build on the card title and make up the
//     bulk of the card's content.
//     </Card.Text> */}
//       <Button variant="primary">Traditional German-Style Bock</Button>
//     </Card.Body>
//   </Card>
// );
// }
// }

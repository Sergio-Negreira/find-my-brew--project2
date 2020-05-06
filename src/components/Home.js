import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import StyleCards from "./StyleCards";
import CountryCards from "./CountryCards";
import CategoryCards from "./CategoryCards";
import Search from "./Search";
import { Scrollbars } from "react-custom-scrollbars";
import { Button } from "react-bootstrap";

class Home extends Component {
  
  randomBeer = () => {

  }

  render() {
    return (
      <>
      <div className="title" style={{}}>
        <h1 style={{textAlign:"center", paddingTop:"1em", fontSize: "175px", fontWeight: "bold", "letterSpacing": "-8px", lineHeight: "1"}}>Find My Brew</h1>
        <p style={{textAlign:"center", paddingTop:"1em", fontSize:"50px", "letterSpacing": "-1px", lineHeight: "1"}}>Where we help you find the perfect beer.</p>
        
        </div>
      <div id="Home">
        <video id="background-video" loop muted autoPlay>
          <source src={this.props.state.videoURL} type="video/mp4" />{" "}
        </video>
        <div
          style={{
            paddingLeft: "10em",
            paddingRight: "10em",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "8em",
          }}
        >
          <Search
            onChangeSearch={this.props.onChangeSearch}
            myArray={this.props.state.myArray}
            {...this.props}
          />
          <br />
                  <Button
                    onClick={() => {
                      this.props.makeBeerQuery();
                      this.props.history.push('/randomizer');
                      }}
                    variant="outline-warning"
                    size="lg"
                    style={{width: "80%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    block
                  >
                    Find My Brew
                  </Button>{" "}
              
        </div>
        <div>
          <br />

          <div
            className="container"
            style={{ height: "65vh", textAlign: "center", alignSelf: "center" }}
          >
            <h2>
              Pick as many of the following filters to help you choose the
              perfect brew.
            </h2>
            <CustomScrollbars
              autoHide
              autoHideTimeout={500}
              autoHideDuration={200}
            >
              <br />
              <div className="row">
                <div className="col-sm">
                  <h3>Beer Styles</h3>
                  <p>Select as many style cards as you'd like</p>
                  <StyleCards
                    addItem={this.props.addItem}
                    onChangeToggle={this.props.onChangeToggle}
                  />
                </div>
                <div className="col-sm">
                  <h3>Countries</h3>
                  <p>Pick any country! (Only one at a time)</p>
                  <CountryCards />
                </div>
                <div className="col-sm">
                  <h3>Categories</h3>Choose a wider range of beers
                  <CategoryCards
                    addItem={this.props.addItem}
                    onChangeToggle={this.props.onChangeToggle}
                  />
                </div>
              </div>
            </CustomScrollbars>
          </div>
          <div
            id="top-container"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              WebkitTransform: "scaley(.75)",
            }}
          >
            {/* <div id="one">
              <Link to="/beers">
                <img src="/images-videos/beerpour.gif" alt=" All Beers" />
                <p>Browse All Beers</p>
              </Link>
            </div> */}
            {/* <div id="two">
              <Link to="/randomizer">
                <img src="/images-videos/beerpour.gif" alt=" New Beer" />
                <p>Find a New Beer</p>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Home;

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: "rgba(35, 49, 86, 0.8)",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = (props) => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props}
  />
);

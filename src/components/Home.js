import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import StyleCards from "./StyleCards"
import CountryCards from "./CountryCards";
// import CategoryCards from "./CategoryCards"
import Search from './Search'
import { beerOptions } from "../components/data";



class Home extends Component {
  componentDidMount() {}

  state = {
    myArray: [],
  };

  addItem = (beerStyle) => {
    console.log(beerStyle)
    const beerOption = {
      value: beerStyle,
      label: beerStyle
    }
    const newarr = [
      ...this.state.myArray,
      beerOption
    ];
    this.setState({ myArray: newarr });
  };

  onChangeSearch = (_, e) => {
    console.log(e);
    if(e.action === 'remove-value' || e.action === 'pop-value') {
      const name = e.removedValue.label;
      let myArray = this.state.myArray.filter(label => label.label !== name);
      this.setState({
        myArray
      })
    } else if(e.action === 'clear') {
      this.setState({
        myArray: []
      })
    }
  }

  onChangeToggle = (value, e) => {
    if(!value.length) {
      let myArray = this.state.myArray.filter(label => label.label !== e.target.value);
      this.setState({
        myArray
      })
    }
  }

  render() {
    return (
      <div className="Home">
        <div>
        <Search  onChangeSearch={this.onChangeSearch} myArray={this.state.myArray} />
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
                <StyleCards addItem={this.addItem} onChangeToggle={this.onChangeToggle}/>
              </div>
              <div className="col-sm">
                <h3>Countries</h3>
                <CountryCards/>
              </div>
              <div className="col-sm">
                <h3>Categories</h3>(broader range of beers)
                {/* <CategoryCards /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

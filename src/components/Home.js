import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import StyleCards from "./StyleCards"
import CountryCards from "./CountryCards";
import CategoryCards from "./CategoryCards"
import Search from './Search'
import { Scrollbars } from 'react-custom-scrollbars';
import { beerOptions } from "../components/data";



class Home extends Component {
  state = {
    myArray: [],
    searchArray: [],
  };

  addItem = (beerStyle) => {
    const beerOption = {
      value: beerStyle,
      label: beerStyle,
      type: 'beerStyle'
    }
    const newarr = [
      ...this.state.myArray,
      beerOption
    ];
    this.setState({ myArray: newarr });
  };

  makeBeerQuery = () => {
    const country = "United States"
    const beerStyles = this.state.myArray.filter(item => item.type === 'beerStyle').map(bs => axios.get(`https://data.opendatasoft.com/api/records/1.0/search/?dataset=open-beer-database%40public-us&rows=5878&refine.style_name=${ bs.value.split(' ').join('+')}&refine.country=${country}`))

    Promise.all(beerStyles).then( res => {
      // console.log(res);
      this.setState({
        searchArray: res
      })
      console.log(res);
    })
    // User needs to be on a new page with all the beers displayed

    // setState to include response
    // have a route to a new component
    // pass props to the component
    // make component to display results
  }

  onChangeSearch = (_, e) => {
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
        <div style={{paddingLeft:"5em", paddingRight:"5em" ,marginLeft:"auto", marginRight:"auto" }}>
        <Search  onChangeSearch={this.onChangeSearch} myArray={this.state.myArray} />
        </div>
        <div>
          <div>
            <Link to="/beers">
              <video src="/images/beers.png" alt=" All Beers" />
              <p>Browse All Beers</p>
            </Link>
          </div>
          <div>
            <Link to="/randomizer">
              <img src="/images/new-beer.png" alt=" New Beer" />
              <p>Find a New Beer</p>
            </Link>
          </div>
          <div className="container" style={{height:"65vh", textAlign:"center", justifyContent:"center"}}>
          <button onClick={this.makeBeerQuery}>CLick me</button>
          <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200} >
            <h2>
              Pick as many of the following filters to help you choose the
              perfect brew.
            </h2>
            <br />
            <div className="row" >
              <div className="col-sm">
                <h3>Beer Styles</h3><p>Select as many style cards as you'd like</p>
                <StyleCards addItem={this.addItem} onChangeToggle={this.onChangeToggle}/>
              </div>
              <div className="col-sm">
                <h3>Countries</h3><p>Pick any country! (Only one at a time)</p>
                <CountryCards/>
              </div>
              <div className="col-sm">
                <h3>Categories</h3>Choose a wider range of beers
                <CategoryCards addItem={this.addItem} onChangeToggle={this.onChangeToggle}/>
              </div>
            </div>
                </CustomScrollbars>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;


const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: 'rgba(35, 49, 86, 0.8)'
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = props => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props}
  />
);
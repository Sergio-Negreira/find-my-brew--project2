import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Random from './components/Random'
import Details from './components/Details'
import NavBar from './components/NavBar'
import axios from "axios";
import BottomBar from "./components/BottomBar";
//***UNSPLASH API for searching images
//***Beer Facts in loading screen


class App extends Component {
  state = {
    myArray: [],
    searchArray: [],
    videoURL: "images-videos/bar-nosound.mp4",
  };

  addItem = (beerStyle) => {
    const beerOption = {
      value: beerStyle,
      label: beerStyle,
      type: "beerStyle",
    };
    const newarr = [...this.state.myArray, beerOption];
    this.setState({ myArray: newarr });
  };

  makeBeerQuery = () => {
    const country = "United States";
    const beerStyles = this.state.myArray
      .filter((item) => item.type === "beerStyle")
      .map((bs) =>
        axios.get(
          `https://data.opendatasoft.com/api/records/1.0/search/?dataset=open-beer-database%40public-us&rows=5878&refine.style_name=${bs.value
            .split(" ")
            .join("+")}`
        )
          //&refine.country=${country}&refine.cat_name=${category}
        );

    Promise.all(beerStyles).then((res) => {
      this.setState({
        searchArray: res.reduce((a, v) => a.concat(v.data.records), []),
      });
    });
    // User needs to be on a new page with all the beers displayed

    // setState to include response
    // have a route to a new component
    // pass props to the component
    // make component to display results
  };

  onChangeSearch = (_, e) => {
    if (e.action === "remove-value" || e.action === "pop-value") {
      const name = e.removedValue.label;
      let myArray = this.state.myArray.filter((label) => label.label !== name);
      this.setState({
        myArray,
      });
    } else if (e.action === "clear") {
      this.setState({
        myArray: [],
      });
    }
  };

  onChangeToggle = (value, e) => {
    if (!value.length) {
      let myArray = this.state.myArray.filter(
        (label) => label.label !== e.target.value
      );
      this.setState({
        myArray,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header>
           <NavBar />
        </header>
        <Switch>
        
          <Route exact path="/" render={(props) => <Home {...props} addItem ={this.addItem} makeBeerQuery={this.makeBeerQuery} onChangeSearch={this.onChangeSearch} onChangeToggle={this.onChangeToggle} state={this.state}/>} />
          <Route exact path="/beers/:id" render={(props) => <Details {...props} beer={this.state.searchArray}/>} /> 
          <Route exact path="/randomizer" render={(props) =><Random {...props} beers={this.state.searchArray} />} />
          
          {/* <Route exact path="/new" component={NewBeer} />  */}
        </Switch>
        <div>
           <BottomBar />
        </div>
      </div>
    );
  }
}

export default App;

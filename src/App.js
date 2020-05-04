import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Random from './components/Random'
import NavBar from './components/NavBar'

//***UNSPLASH API for searching images
//***Beer Facts in loading screen


class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <header>
           <NavBar />
        </header>
        <div class="title"><h1>Find My Brew</h1></div>
        <Switch>
          <Route exact path="/" component={Home} />
          
          {/* <Route exact path="/beers/:id" component={Details} />*/} 
          <Route exact path="/randomizer" component={Random} />
          {/* <Route exact path="/new" component={NewBeer} />  */}
        </Switch>
      </div>
    );
  }
}

export default App;

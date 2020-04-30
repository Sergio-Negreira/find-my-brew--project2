import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Random from './components/Random'
import NavBar from './components/NavBar'

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <header>
           <NavBar />
        </header>
        <h1>Find My Beer</h1>

        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/beers" component={AllBeers} />
          <Route exact path="/beers/:id" component={Details} />*/}
          <Route exact path="/randomizer" component={Random} />
          {/* <Route exact path="/new" component={NewBeer} />  */}
        </Switch>
      </div>
    );
  }
}
export default App;

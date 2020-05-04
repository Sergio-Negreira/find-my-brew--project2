// import 'react-select/dist/react-select.css'
// import 'react-virtualized-select/styles.css'
import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Button } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

const animatedComponents = makeAnimated();

class AnimatedMulti extends React.Component {
  
  render() {
    return (
      <>
          <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={this.props.myArray}
          value={this.props.myArray}
          isMulti
          onChange={this.props.onChangeSearch}
          // options
          setValue={(e)=>console.log(e,e)}
        />
        <Switch>
        <Route><Button variant="outline-warning" size="lg" block>Search</Button>{" "}</Route>
        </Switch> 
      </>
    );
  }
}
export default AnimatedMulti;

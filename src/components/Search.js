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
          options={false}
          setValue={(e)=>console.log(e,e)}   
        />
        <br/>
        <Switch>
        <Route><Button variant="outline-warning" size="lg" style={{width:"80%", marginLeft:"auto", marginRight:"auto"}} block>Find My Brew</Button>{" "}</Route>
        </Switch> 
      </>
    );
  }
}
export default AnimatedMulti;

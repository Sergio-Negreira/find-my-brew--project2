import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

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
               
      </>
    );
  }
}
export default AnimatedMulti;

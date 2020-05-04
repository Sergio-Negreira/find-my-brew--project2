// import 'react-select/dist/react-select.css'
// import 'react-virtualized-select/styles.css'
import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from '../components/data';

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}

import React, { Component } from 'react';
import XYAxis from './XYAxis';

import {scaleBand} from "d3-scale";


const yScale = (props) => {
  return scaleBand().domain(props.data.cancer_study_id).range([props.height - props.padding, props.padding]);
};

const xScale = (props) => {
  let x = scaleBand()
    .domain(props.data.symbol)
    .range([props.padding, props.width - props.padding])
  console.log(x('lung'))
  return x
};




const Blackspot = (props) => {
    const scales = { xScale: xScale(props), yScale: yScale(props) };

  return (
			<svg width={props.width} height={props.height}>
				<XYAxis {...props} {...scales}/>
			</svg>
          )
}

export default Blackspot;

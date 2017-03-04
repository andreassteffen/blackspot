import React, { Component } from 'react';
import XYAxis from './XYAxis';
import ExpressionCircle from './ExpressionCircle';

import {scaleBand, scaleLinear} from "d3-scale";


const yScale = (props) => {
  return scaleBand().domain(props.data.cohort).range([props.height - props.padding, props.padding]);
};

const xScale = (props) => {
  let x = scaleBand()
    .domain(props.data.gene)
    .range([props.padding, props.width - props.padding])
  
  return x
};


const circleScale = (props) => {
  return scaleLinear().domain([props.data.min_val,props.data.max_val]).range([1,10]);
};

const Blackspot = (props) => {
    const scales = { xScale: xScale(props), yScale: yScale(props), circleScale: circleScale(props) };
  return (
			<svg width={props.width} height={props.height}>
				<XYAxis {...props} {...scales}/>
        {props.data.expression.map((expr) => <ExpressionCircle data={expr}  {...scales} />)}
			</svg>
          )
}

export default Blackspot;

import React, { Component } from 'react';
import {scaleLinear} from "d3-scale";
const CirclesRow = (props) => {
  
  return (
			<g>
				{props.data.map((expression,id) => <circle cx={250+id*100} cy={props.y*100 +50} r={expression*0.5}/>)}
			</g>
          )
}

export default CirclesRow;

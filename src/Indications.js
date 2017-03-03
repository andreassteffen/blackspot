import React, { Component } from 'react';
import {scaleLinear} from "d3-scale";


const Indications = (props) => {
  
  return (
			<g>
				{props.data.map((indication,id) => <text x={200} y={id*100+50} textAnchor="end">{indication}</text>)}
			</g>
          )
}

export default Indications;

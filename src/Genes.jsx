import React, { Component } from 'react';

let myStyle: {
    transform: [{ rotate: '-90deg'}]
}


const Genes = (props) => {
  
  return (
			<g>
				{props.data.map((symbol,id) => <text y={-45 - id*100} x={310} transform="rotate(90, 100, 100)" textAnchor="end">{symbol}</text>)}
			</g>
          )
}

export default Genes;

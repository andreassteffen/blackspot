import React, { Component } from 'react';

const ExpressionCircle = (props) => {
  console.log("gene",props.data.gene)
  console.log("cohort",props.data.cohort)
  console.log(props.padding)

  return(
	<circle cx={props.xScale(props.data.gene)+42} cy={props.yScale(props.data.cohort)+36} r={props.circleScale(props.data.expression_log2)}/>
	)
}

export default ExpressionCircle;

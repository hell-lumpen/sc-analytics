import React from 'react';
import { RadialChart } from 'react-vis';

const RadialChart_ = ({ data, width, height }) => {
  return (
      <RadialChart data={data} width={width} height={height} showLabels />
  );
};

export default RadialChart_;
import React from 'react';
import { XYPlot, VerticalBarSeries } from 'react-vis';

const BarChart = ({ data, width, height }) => {
  return (
      <XYPlot width={width} height={height}>
        <VerticalBarSeries data={data} />
      </XYPlot>
  );
};

export default BarChart;
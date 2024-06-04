import React from 'react';
import { XYPlot, LineSeries } from 'react-vis';

const LineChart = ({ data, width, height }) => {
  return (
      <XYPlot width={width} height={height}>
        <LineSeries data={data} />
      </XYPlot>
  );
};

export default LineChart;
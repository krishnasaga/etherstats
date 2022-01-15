import React from 'react';
import { Box } from 'theme-ui';
import {
    XYPlot,
    LineSeries
  } from 'react-vis';
import '../../../../node_modules/react-vis/dist/style.css';

export const Chart = () => {
  if(true) {
    return null;
  }
    return <Box>
    <XYPlot width={1200} height={300} >
      <LineSeries
        data={[
          {x: -1, y: 10},
          {x: 0, y: 5},
          {x: 1, y: 3},
          {x: 2, y: -5},
          {x: 3, y: 15}
        ]}
      />
      </XYPlot>
    </Box>;
};

export default Chart;

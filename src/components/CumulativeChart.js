import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import data from '../data/sc_cumulative';
import { Card } from 'theme-ui';

const CumulativeChart = () => {
  return (
    <Card
      sx={{
        bg: 'text',
        color: 'primary',
        p: 3,
        my: 2,
        mx: 3,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'text',
      }}
    >
      <LineChart
        width={350}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="Cumulative"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Cumulative" stroke="#82ca9d" />
      </LineChart>
    </Card>
  );
};

export default CumulativeChart;

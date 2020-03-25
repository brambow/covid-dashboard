import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import data from '../data/total_us_cases';
import { Card, Heading } from 'theme-ui';

const CumulativeChart = () => {
  return (
    <Card
      sx={{
        bg: 'background',
        color: 'primary',
        width: '100%',
      }}
    >
      <Heading as="h3" color="text">
        Total US Cases
      </Heading>
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
        <XAxis dataKey="day_count" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="total_confirmed_cases"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="total_deaths"
          stroke="purple"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </Card>
  );
};

export default CumulativeChart;

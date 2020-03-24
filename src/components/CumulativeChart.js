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
import data from '../data/total_us_cases';
import { Card, Heading } from 'theme-ui';

const CumulativeChart = () => {
  return (
    <Card
      sx={{
        bg: 'background',
        color: 'primary',
        p: 3,
        my: 3,
        mx: 3,
        borderRadius: 20,
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
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
        {/* <Legend /> */}
        {/* <Line
          type="monotone"
          dataKey="total_confirmed_cases"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        /> */}
        <Line
          type="monotone"
          dataKey="total_confirmed_cases"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </Card>
  );
};

export default CumulativeChart;

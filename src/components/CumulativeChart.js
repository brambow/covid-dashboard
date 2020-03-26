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
import abbreviateNumber from '../util/abbreviateNumber';

const CumulativeChart = ({ width }) => {
  return (
    <Card
      style={{ paddingLeft: 0 }}
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
        width={width - 50 || 350}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 5,
          // left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day_count" />
        <YAxis
          dataKey="total_confirmed_cases"
          domain={[0, 55000]}
          tickFormatter={(tick) => {
            return abbreviateNumber(tick);
          }}
        />
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

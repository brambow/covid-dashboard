import React from 'react';
import { Card, Text } from 'theme-ui';
import config from '../config';

const SummaryStats = () => {
  return (
    <Card
      sx={{
        bg: 'text',
        color: 'primary',
        my: 2,
        p: 3,
        mx: 3,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'text',
      }}
    >
      <Text sx={{ fontSize: 4, fontWeight: 'bold', p: 1 }}>
        Total Cases: {config.summaryData.totalCases}
      </Text>
      <Text sx={{ fontSize: 4, fontWeight: 'bold', p: 1 }}>
        Sick: {config.summaryData.sick}
      </Text>
      <Text sx={{ fontSize: 4, fontWeight: 'bold', p: 1 }}>
        Deaths: {config.summaryData.deaths}
      </Text>
      <Text sx={{ fontSize: 4, fontWeight: 'bold', p: 1 }}>
        Recovered: {config.summaryData.recovered}
      </Text>
      <Text sx={{ fontSize: 4, fontWeight: 'bold', p: 1 }}>
        Total Tests: {config.summaryData.totalTests}
      </Text>
    </Card>
  );
};

export default SummaryStats;

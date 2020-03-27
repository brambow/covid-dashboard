import React from 'react';
import { Card, Text, Link } from 'theme-ui';

const DataInfo = () => {
  return (
    <Card
      my={4}
      // mx={[0, 0, 4, 0]}
      sx={{ fontSize: [0, 1, 2], width: '100%' }}
    >
      <Text sx={{ textAlign: 'left' }}>
        The virus counts for this dashboard are provided by the{' '}
        <Link
          variant="primary"
          target="_blank"
          href="https://github.com/nytimes/covid-19-data"
        >
          New York Times
        </Link>
        .
      </Text>
      <Text sx={{ pt: 2, textAlign: 'left' }}>
        The demographic data is sourced from the US Census Bureau American
        Community Survey 5-year Data (2018).
      </Text>
      <Text sx={{ pt: 2, textAlign: 'left' }}>
        The goal for this project was to build a data dashboard for the COVID-19
        pandemic that demonstrates some neat Mapbox features and also adds
        additional data contexts beyond plain counts.
      </Text>
      <Text sx={{ pt: 2, textAlign: 'left' }}>
        This application was built with React, MapboxGL, ThemeUI, and several
        other libraries. Check out the{' '}
        <Link
          variant="primary"
          target="_blank"
          href="https://github.com/brambow/covid-dashboard"
        >
          source code.
        </Link>
      </Text>
    </Card>
  );
};

export default DataInfo;

import React from 'react';
import { Card, Text, Link, Heading } from 'theme-ui';

const DataInfo = () => {
  return (
    <Card
      my={4}
      // mx={[0, 0, 4, 0]}
      sx={{ fontSize: [0, 1, 2], width: '100%' }}
    >
      <Heading as="h4">DATA SOURCES</Heading>
      <Text sx={{ textAlign: 'left' }}>
        Virus Counts:{' '}
        <Link
          variant="primary"
          target="_blank"
          href="https://github.com/nytimes/covid-19-data"
        >
          New York Times
        </Link>
      </Text>
      <Text sx={{ pt: 2, textAlign: 'left' }}>
        County Demographics: US Census Bureau American Community Survey 5-year
        Data (2018).
      </Text>
      <Text sx={{ pt: 2, textAlign: 'left' }}>
        State Actions:{' '}
        <Link target="_blank" href="https://www.nga.org/coronavirus/#states">
          National Governors Association
        </Link>
      </Text>
      <Text sx={{ pt: 2, textAlign: 'left' }}>
        Health Policy Data:{' '}
        <Link
          target="_blank"
          href="https://www.kff.org/health-costs/issue-brief/state-data-and-policy-actions-to-address-coronavirus/#policyactions"
        >
          Kaiser Family Foundation
        </Link>
      </Text>
      <Text sx={{ pt: 2, textAlign: 'left' }}>
        <Link
          variant="primary"
          target="_blank"
          href="https://github.com/brambow/covid-dashboard"
        >
          Source code for this application
        </Link>
      </Text>
    </Card>
  );
};

export default DataInfo;

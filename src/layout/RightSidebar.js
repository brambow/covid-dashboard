import React from 'react';
import { Flex, Box, Link, Text, Card } from 'theme-ui';
import SummaryStats from '../components/SummaryStats';
import CumulativeChart from '../components/CumulativeChart';

const RightSidebar = () => {
  return (
    <Box
      className="app-sidebar-right"
      sx={{
        flex: 'none',
        bg: 'background',
        height: '100%',
        width: 450,
        p: 4,
        mt: [64, 0],
        alignItems: 'start',
        '@media only screen and (max-width: 768px)': {
          display: 'none',
        },
        '@media only screen and (max-width: 1824px)': {
          height: '50%',
          width: '100%',
          my: 2,
          paddingRight: 4,
          // px: 4,
        },
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <Flex
        sx={{
          flexDirection: 'column',
          '@media only screen and (max-width: 1824px)': {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        }}
      >
        <CumulativeChart />
        <Card my={3}>
          <Text sx={{ textAlign: 'left' }}>
            The data for this dashboard comes from{' '}
            <Link
              target="_blank"
              href="https://usafacts.org/visualizations/coronavirus-covid-19-spread-map/"
            >
              usafacts.org
            </Link>
            . Please follow this link to review where this data comes from and
            the accuracy.
          </Text>
        </Card>
      </Flex>
    </Box>
  );
};

export default RightSidebar;

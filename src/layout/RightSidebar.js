import React from 'react';
import { Flex, Box, Link, Text, Card } from 'theme-ui';
import SummaryStats from '../components/SummaryStats';
import CumulativeChart from '../components/CumulativeChart';
import DataInfo from '../components/DataInfo';

const RightSidebar = () => {
  return (
    <Box
      className="app-sidebar-right"
      sx={{
        flex: 'none',
        bg: 'background',
        height: '100%',
        width: 450,
        p: [4],
        mt: 0,
        alignItems: 'start',
        // '@media only screen and (max-width: 768px)': {
        //   display: 'none',
        // },
        '@media only screen and (max-width: 1824px)': {
          height: '50%',
          width: '100%',
          my: 2,
          paddingRight: 4,
          // px: 4,
        },
        overflowY: 'hidden',
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
        <DataInfo />
      </Flex>
    </Box>
  );
};

export default RightSidebar;

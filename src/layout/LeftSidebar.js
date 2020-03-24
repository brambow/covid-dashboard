import React from 'react';
import { Flex, Box } from 'theme-ui';
import SummaryStats from '../components/SummaryStats';
import CumulativeChart from '../components/CumulativeChart';

const LeftSidebar = () => {
  return (
    <Box
      className="app-sidebar"
      sx={{
        flex: 'none',
        height: '100%',
        width: 400,
        pt: 3,
        pb: 4,
        mt: [64, 0],
        alignItems: 'start',
        '@media only screen and (max-width: 768px)': {
          display: 'none',
        },
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <Flex sx={{ flexDirection: 'column' }}>
        <SummaryStats />
        <CumulativeChart />
      </Flex>
    </Box>
  );
};

export default LeftSidebar;

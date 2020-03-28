import React from 'react';
import { Flex, Box } from 'theme-ui';
// import SummaryStats from '../components/SummaryStats';
import CumulativeChart from '../components/CumulativeChart';
import DataInfo from '../components/DataInfo';
import CountsCard from '../components/CountsCard';

const RightSidebar = ({ width }) => {
  return (
    <Box
      className="app-sidebar-right"
      sx={{
        flex: 'none',
        bg: 'background',
        height: '100%',
        width: width || 450,
        p: [4],
        mt: 0,
        alignItems: 'start',
        // '@media only screen and (max-width: 768px)': {
        //   display: 'none',
        // },
        // '@media only screen and (max-width: 1824px)': {
        //   height: '50%',
        //   width: '100%',
        //   my: 2,
        //   paddingRight: 4,
        //   // px: 4,
        // },
        overflowY: 'hidden',
        overflowX: 'hidden',
      }}
    >
      <Flex
        sx={{
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <CountsCard />
        <CumulativeChart width={width} />
        <DataInfo />
      </Flex>
    </Box>
  );
};

export default RightSidebar;

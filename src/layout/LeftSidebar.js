import React from 'react';
import { Flex, Box } from 'theme-ui';
import SummaryStats from '../components/SummaryStats';
import CumulativeChart from '../components/CumulativeChart';
import TimeSlider from '../components/TimeSlider';
import { LayerList } from '@cartolab/elements';

const LeftSidebar = () => {
  return (
    <Box
      className="app-sidebar"
      sx={{
        flex: 'none',
        bg: 'background',
        height: '100%',
        width: 450,
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
        <TimeSlider />
        <LayerList
          panel={true}
          legend
          css={{
            marginTop: '20px',
            maxWidth: 400,
            height: 880,
            borderRadius: 20,
            position: 'relative',
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
            width: 400,
          }}
          layers={[
            {
              layerIds: ['confirmed-cases'],
              layerName: 'Total Confirmed Cases',
            },
            {
              layerIds: ['confirmed-cases-per-1000'],
              layerName: 'Confirmed Cases (per 1000 people)',
            },
            {
              layerIds: ['pct_health_coverage'],
              layerName: '% of Population w/ Health Insurance',
            },
            {
              layerIds: ['pct_65_plus'],
              layerName: '% 65 and older',
            },
          ]}
        />
      </Flex>
    </Box>
  );
};

export default LeftSidebar;

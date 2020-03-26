import React from 'react';
import { Flex, Box } from 'theme-ui';
import TimeSlider from '../components/TimeSlider';
import { LayerList } from '@cartolab/elements';

const LeftSidebar = ({ width }) => {
  return (
    <Box
      className="app-sidebar"
      sx={{
        flex: 'none',
        bg: 'background',
        height: '100%',
        width: width || 450,
        pt: 3,
        pb: 0,
        mt: [64, 0],
        alignItems: 'start',
        '@media only screen and (max-width: 768px)': {
          display: 'none',
        },
        overflowY: 'hidden',
        overflowX: 'hidden',
      }}
    >
      <Flex sx={{ flexDirection: 'column', height: '100%' }}>
        <TimeSlider />
        <LayerList
          panel={true}
          legend
          css={{
            marginTop: '20px',
            maxWidth: 400,
            // maxHeight: 950,
            borderRadius: 20,
            position: 'relative',
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
            width: 400,
            overflowY: 'auto',
          }}
          sx={{
            overflowY: 'auto',
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

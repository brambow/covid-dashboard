import React, { useEffect, useState } from 'react';
import { Flex, Box } from 'theme-ui';
import { useSelector } from 'react-redux';
import TimeSlider from '../components/TimeSlider';
import { LayerList } from '@cartolab/elements';

const countyLayers = [
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
];

const stateLayers = [
  {
    layerIds: ['states-fill'],
    layerName: 'TEST STATE',
  },
];

const LeftSidebar = ({ width }) => {
  const viewLevel = useSelector((state) => state.viewLevel);
  const [layers, setLayers] = useState(countyLayers);

  useEffect(() => {
    switch (viewLevel) {
      case 'counties':
        setLayers(countyLayers);
        break;
      case 'states':
        setLayers(stateLayers);
        break;
      default:
        setLayers(countyLayers);
        break;
    }
  }, [viewLevel]);

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
            width: width - 25 || 400,
            overflowY: 'auto',
          }}
          sx={{
            overflowY: 'auto',
          }}
          layers={layers}
        />
      </Flex>
    </Box>
  );
};

export default LeftSidebar;

import React, { useState, useEffect } from 'react';
import { Flex, Box } from 'theme-ui';
import MapPanel from '../components/MapPanel';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Content = ({ colorMode }) => {
  const [viewHeight, setViewHeight] = useState(window.innerHeight);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setViewHeight(window.innerHeight);
      setViewWidth(window.innerWidth);
    });
  }, []);

  return (
    <React.Fragment>
      <Flex
        id="covid-app-content"
        sx={{
          height: viewHeight - 60,
          width: viewWidth,
        }}
      >
        <LeftSidebar />
        <Box css={{ height: '100%' }}>
          <Flex
            css={{
              flexDirection: 'row',
              height: '100%',
              '@media only screen and (max-width: 1600px)': {
                flexDirection: 'column',
              },
            }}
          >
            <MapPanel colorMode={colorMode} viewWidth={viewWidth - 900} />
            <RightSidebar />
          </Flex>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default Content;

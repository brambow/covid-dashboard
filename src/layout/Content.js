import React, { useState, useEffect } from 'react';
import { Flex, Box } from 'theme-ui';
import MapPanel from '../components/MapPanel';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { useMediaQuery } from 'react-responsive';

const Content = ({ colorMode }) => {
  const [viewHeight, setViewHeight] = useState(window.innerHeight);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  const isBigScreen = useMediaQuery({
    minWidth: 1824,
  });
  const isDesktopOrLaptop = useMediaQuery({
    minDeviceWidth: 1224,
  });
  // const isTablet = useMediaQuery({
  //   query: '(max-width: 1223px, minWidth: 769px)',
  // });
  const isMobile = useMediaQuery({
    maxDeviceWidth: 768,
  });

  useEffect(() => {
    window.addEventListener('resize', () => {
      setViewHeight(window.innerHeight);
      setViewWidth(window.innerWidth);
    });
  }, []);

  console.log(isBigScreen, isDesktopOrLaptop);

  return (
    <React.Fragment>
      {isBigScreen && (
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
              }}
            >
              <MapPanel colorMode={colorMode} viewWidth={viewWidth - 900} />
              <RightSidebar />
            </Flex>
          </Box>
        </Flex>
      )}
      {isDesktopOrLaptop && (
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
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <MapPanel colorMode={colorMode} viewWidth={viewWidth - 450} />
              <RightSidebar />
            </Flex>
          </Box>
        </Flex>
      )}
    </React.Fragment>
  );
};

export default Content;

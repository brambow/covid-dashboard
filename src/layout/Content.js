import React, { useState, useEffect } from 'react';
import { Flex, Box } from 'theme-ui';
import MapPanel from '../components/MapPanel';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { useMediaQuery } from 'react-responsive';
import TimeSlider from '../components/TimeSlider';
import CumulativeChart from '../components/CumulativeChart';

const Content = ({ colorMode }) => {
  const [viewHeight, setViewHeight] = useState(window.innerHeight);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  const isBigScreen = useMediaQuery({
    minWidth: 1824,
  });
  const isDesktopOrLaptop = useMediaQuery({
    minDeviceWidth: 1224,
  });
  const isTabletOrMobile = useMediaQuery({
    maxWidth: 1224,
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
      {isDesktopOrLaptop && isBigScreen && (
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
      {isDesktopOrLaptop && !isBigScreen && (
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
      )}{' '}
      {isTabletOrMobile && (
        <Flex
          id="covid-app-content"
          sx={{
            height: viewHeight - 60,
            width: '100vw',
          }}
        >
          <Box css={{ height: '100%' }}>
            <Flex
              css={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <MapPanel colorMode={colorMode} viewWidth={'100vw'} />
              <Box>
                <TimeSlider />
              </Box>
              <Box mt={5}>
                <CumulativeChart></CumulativeChart>
              </Box>
            </Flex>
          </Box>
        </Flex>
      )}
    </React.Fragment>
  );
};

export default Content;

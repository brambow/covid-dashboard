import React, { useState, useEffect } from 'react';
import { Flex, Box } from 'theme-ui';
import MapPanel from '../components/MapPanel';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Content = ({ /* countyData, */ colorMode }) => {
  const [viewHeight, setViewHeight] = useState(window.innerHeight);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setViewHeight(window.innerHeight);
      setViewWidth(window.innerWidth);
    });
  }, []);

  return (
    <Flex
      id="tab-app-content"
      sx={{ height: viewHeight - 60, width: viewWidth }}
    >
      <LeftSidebar />
      <MapPanel
        colorMode={colorMode}
        viewWidth={viewWidth - 900}
        // countyData={countyData}
      />
      <RightSidebar />
    </Flex>
  );
};

export default Content;

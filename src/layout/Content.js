import React, { useState, useEffect } from 'react';
import { Flex, Box } from 'theme-ui';
import MapPanel from '../components/MapPanel';
import LeftSidebar from './LeftSidebar';

const Content = ({ countyData }) => {
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
      <MapPanel viewWidth={viewWidth - 400} countyData={countyData} />
    </Flex>
  );
};

export default Content;

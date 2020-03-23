import React, { useState, useEffect } from 'react';
import { Flex, Box } from 'theme-ui';
import MapPanel from '../components/MapPanel';
// import Sidebar from "./Sidebar";

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
      sx={{ height: viewHeight - 68, width: viewWidth }}
    >
      {/* <Sidebar /> */}
      {/* <MapView viewWidth={viewWidth - 200} /> */}
      <MapPanel viewWidth={viewWidth} countyData={countyData} />
    </Flex>
  );
};

export default Content;

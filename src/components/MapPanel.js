import React, { useContext, useEffect } from 'react';
import { ElementsContext, Map, Zoom, MapInfo } from '@cartolab/elements';
import { Box } from 'theme-ui';
import 'mapbox-gl/dist/mapbox-gl.css'; // we need the mapbox css
import mapExists from '../util/mapExists';
import config from '../config';
import { useSelector } from 'react-redux';
import addMapLayers from '../util/addMapLayers';

const MapPanel = ({ viewWidth }) => {
  const ctx = useContext(ElementsContext);
  const { map } = ctx;
  const dayCount = useSelector((state) => state.dayCount);

  const colorMode = useSelector((state) => state.colorMode);

  const mapOptions = {
    container: 'map',
    customAttribution:
      '<a href="https:www.cartolab.com" target="_blank">Powered by CartoLab</a>',
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
    bounds: [-129.19948, 21.03198, -63.46102, 53.76579],
    // pitch: 40,
  };

  useEffect(() => {
    if (mapExists(map)) {
      if (colorMode === 'default') {
        map.setStyle('mapbox://styles/mapbox/light-v10');
      } else if (colorMode === 'dark') {
        map.setStyle('mapbox://styles/mapbox/dark-v10');
      }
      map.on('style.load', () => {
        addMapLayers(map);
      });
    }
  }, [colorMode, map]);

  useEffect(() => {
    if (mapExists(map)) {
      map.on('load', () => {
        addMapLayers(map);
      });
    }
  }, [map]);

  useEffect(() => {
    if (mapExists(map)) {
      map.setFilter('confirmed-cases-per-1000', [
        'match',
        ['get', 'day_count'],
        parseInt(dayCount),
        true,
        false,
      ]);
      map.setFilter('confirmed-cases-per-1000-3d', [
        'match',
        ['get', 'day_count'],
        parseInt(dayCount),
        true,
        false,
      ]);
      map.setFilter('confirmed-cases', [
        'match',
        ['get', 'day_count'],
        parseInt(dayCount),
        true,
        false,
      ]);
    }
  }, [dayCount]);

  return (
    <Box
      className="map-panel"
      sx={{
        marginTop: [0, 4],
        height: '90%',
        width: viewWidth,
        borderRadius: 20,
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
        // '@media only screen and (max-width: 768px)': {
        //   height: '100%',
        //   width: '100%',
        // },
        '@media only screen and (max-width: 1824px, min-width: 769px)': {
          height: '50%',
        },
      }}
    >
      <Map
        css={{
          height: '100%',
          width: '100%',
          borderRadius: 20,
        }}
        mapOptions={mapOptions}
      >
        <Zoom />
        {/* <MapInfo bottom="1.25rem" left="25%" /> */}
      </Map>
    </Box>
  );
};

export default MapPanel;

import React, { useContext, useEffect } from 'react';
import { ElementsContext, Map, Zoom, MapInfo } from '@cartolab/elements';
import { Box } from 'theme-ui';
import 'mapbox-gl/dist/mapbox-gl.css'; // we need the mapbox css
import mapExists from '../util/mapExists';

const MapPanel = ({ viewWidth, countyData }) => {
  const ctx = useContext(ElementsContext);
  const { map } = ctx;
  const baseTileUrl = 'mapbox://';

  const mapOptions = {
    container: 'map',
    customAttribution:
      '<a href="https:www.cartolab.com" target="_blank">Powered by CartoLab</a>',
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
    bounds: [-86.23762, 31.72935, -75.60692, 35.61244],
  };

  useEffect(() => {
    if (mapExists(map)) {
      map.on('load', (e) => {
        map.addSource('counties-src', {
          type: 'vector',
          url: `${baseTileUrl}cartolab.0wtlnz4e`,
        });

        map.addLayer({
          id: 'counties-outline',
          type: 'line',
          source: 'counties-src',
          'source-layer': 'counties-2it7qx',
          paint: {
            'line-color': '#000000',
            'line-width': 1.25,
          },
          filter: ['match', ['get', 'STATEFP'], 45, true, false],
        });

        const expression = ['match', ['get', 'NAME']];

        //WARNING THIS SHOULDNT BE HARDCODED
        const maxValue = 43;

        countyData.forEach((row) => {
          var val = (1 - row['COUNTA of Condition'] / maxValue) * 255;
          var color = 'rgba(' + 0 + ', ' + val / 2 + ', ' + val + ', 1)';
          expression.push(row['County'], color);
        });

        // Last value is the default, used where there is no data
        expression.push('rgba(0,0,0,0)');

        map.addLayer({
          id: 'counties',
          type: 'fill',
          source: 'counties-src',
          'source-layer': 'counties-2it7qx',
          paint: {
            'fill-color': expression,
            'fill-outline-color': '#000000',
          },
          filter: ['match', ['get', 'STATEFP'], 45, true, false],
        });
      });
    }
  }, [map]);

  return (
    <Box
      className="map-panel"
      sx={{
        height: '100%',
        width: viewWidth,
      }}
    >
      <Map css={{ height: '100%', width: '100%' }} mapOptions={mapOptions}>
        <Zoom />
        <MapInfo bottom="1.25rem" left="25%" />
      </Map>
    </Box>
  );
};

export default MapPanel;

import React, { useContext, useEffect } from 'react';
import { ElementsContext, Map, Zoom, MapInfo } from '@cartolab/elements';
import { Box } from 'theme-ui';
import 'mapbox-gl/dist/mapbox-gl.css'; // we need the mapbox css
import mapExists from '../util/mapExists';
import config from '../config';

const MapPanel = ({ viewWidth, countyData }) => {
  const ctx = useContext(ElementsContext);
  const { map } = ctx;
  const baseTileUrl = 'mapbox://';

  const mapOptions = {
    container: 'map',
    customAttribution:
      '<a href="https:www.cartolab.com" target="_blank">Powered by CartoLab</a>',
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
    bounds: [-188.79565, 6.38169, -10.3621, 71.72543],
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
            'line-width': 0.75,
          },
        });

        map.addSource('covid-polygon-src', {
          type: 'vector',
          url: `${baseTileUrl}cartolab.5w53rqco`,
        });

        map.addLayer({
          id: 'pct_health_coverage',
          type: 'fill',
          source: 'covid-polygon-src',
          'source-layer': 'covid_polygons',
          paint: {
            'fill-color': {
              property: 'pct_w_health_coverage',
              stops: [
                [0, '#ffffff'],
                [0.8, '#eff3ff'],
                [0.84, '#bdd7e7'],
                [0.88, '#6baed6'],
                [0.92, '#3182bd'],
                [0.96, '#08519c'],
              ],
            },
            'fill-opacity': 0.8,
          },
          filter: ['match', ['get', 'date'], '2020-03-22', true, false],
        });

        map.addLayer({
          id: 'confirmed-cases-per-1000',
          type: 'fill',
          source: 'covid-polygon-src',
          'source-layer': 'covid_polygons',
          paint: {
            'fill-color': {
              property: 'confirmed_cases_per_1000',
              stops: [
                [0, '#ffffff'],
                [0.01, '#edf8e9'],
                [0.025, '#bae4b3'],
                [0.05, '#74c476'],
                [0.1, '#31a354'],
                [0.2, '#006d2c'],
              ],
            },
            'fill-opacity': 0.8,
          },
          filter: ['match', ['get', 'date'], '2020-03-22', true, false],
        });

        map.addSource('covid-point-src', {
          type: 'vector',
          url: `${baseTileUrl}cartolab.9ocnb1rb`,
        });

        map.addLayer({
          id: 'confirmed-cases',
          type: 'circle',
          source: 'covid-point-src',
          'source-layer': 'covid_points',
          paint: {
            'circle-radius': {
              property: 'confirmed_cases',
              stops: [
                [0, 0],
                [50, 5],
                [100, 10],
                [250, 15],
                [500, 25],
                [1000, 50],
              ],
            },
            'circle-color': 'orange',
            'circle-opacity': 0.6,
          },
          filter: ['match', ['get', 'date'], '2020-03-22', true, false],
        });

        // const expression = ['match', ['get', 'NAME']];

        // //WARNING THIS SHOULDNT BE HARDCODED
        // const maxValue = config.summaryData.countyMax;

        // countyData.forEach((row) => {
        //   var val = (1 - row['COUNTA of Condition'] / maxValue) * 255;
        //   var color = 'rgba(' + 0 + ', ' + val / 2 + ', ' + val + ', 1)';
        //   expression.push(row['County'], color);
        // });

        // // Last value is the default, used where there is no data
        // expression.push('rgba(0,0,0,0)');

        // map.addLayer({
        //   id: 'counties',
        //   type: 'fill',
        //   source: 'counties-src',
        //   'source-layer': 'counties-2it7qx',
        //   paint: {
        //     'fill-color': expression,
        //     'fill-outline-color': '#000000',
        //   },
        //   filter: ['match', ['get', 'STATEFP'], 45, true, false],
        // });
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

import React, { useContext, useEffect } from 'react';
import {
  ElementsContext,
  Map,
  Zoom,
  MapInfo,
  MapPopup,
} from '@cartolab/elements';
import { Box } from 'theme-ui';
import 'mapbox-gl/dist/mapbox-gl.css'; // we need the mapbox css
import mapExists from '../util/mapExists';
import { useSelector } from 'react-redux';
import addCountyModeMapLayers from '../util/addCountyModeMapLayers';
import mapboxgl from 'mapbox-gl';
import addStateModeMapLayers from '../util/addStateModeMapLayers';
import removeCountyModeMapLayers from '../util/removeCountyModeMapLayers';
import removeStateModeMapLayers from '../util/removeStateModeMapLayers';

const MapPanel = ({ viewWidth }) => {
  const ctx = useContext(ElementsContext);
  const { map } = ctx;
  const dayCount = useSelector((state) => state.dayCount);

  const colorMode = useSelector((state) => state.colorMode);
  const mapMode = useSelector((state) => state.mapMode);
  const viewLevel = useSelector((state) => state.viewLevel);

  const mapOptions = {
    container: 'map',
    customAttribution:
      '<a href="https:www.cartolab.com" target="_blank">Powered by CartoLab</a>',
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
    bounds: [-129.19948, 21.03198, -63.46102, 53.76579],
    // pitch: 40,
  };

  const popupLayers = [
    {
      layerId: 'confirmed-cases-per-1000', // id of layer on map
      title: {
        field: 'county_name',
      }, // popup title field
      attributes: [
        {
          field: 'date', // original field name
          label: 'Date', // desired label
          type: 'text', // text, link, image
        },
        {
          field: 'confirmed_cases',
          label: 'Confirmed Cases',
          type: 'text',
        },
        {
          field: 'deaths',
          label: 'Deaths',
          type: 'text',
        },
        {
          field: 'confirmed_cases_per_1000',
          label: 'Cases per 1000',
          type: 'text',
        },
      ],
    },
    {
      layerId: 'confirmed-cases-per-1000-3d', // id of layer on map
      title: {
        field: 'county_name',
      }, // popup title field
      attributes: [
        {
          field: 'date', // original field name
          label: 'Date', // desired label
          type: 'text', // text, link, image
        },
        {
          field: 'confirmed_cases',
          label: 'Confirmed Cases',
          type: 'text',
        },
        {
          field: 'deaths',
          label: 'Deaths',
          type: 'text',
        },
        {
          field: 'confirmed_cases_per_1000',
          label: 'Cases per 1000',
          type: 'text',
        },
      ],
    },
  ];

  // useEffect(() => {
  //   mapboxgl.clearStorage();
  // }, []);

  useEffect(() => {
    if (mapExists(map)) {
      if (mapMode === '3D') {
        map.setPitch(50);
        map.setLayoutProperty('confirmed-cases-per-1000', 'visibility', 'none');
        map.setLayoutProperty(
          'confirmed-cases-per-1000-3d',
          'visibility',
          'visible'
        );
      } else {
        map.setPitch(0);
        map.on('style.load', () => {
          map.setLayoutProperty(
            'confirmed-cases-per-1000',
            'visibility',
            'visible'
          );
          map.setLayoutProperty(
            'confirmed-cases-per-1000-3d',
            'visibility',
            'none'
          );
        });
      }
    }
  }, [mapMode, map]);

  useEffect(() => {
    if (mapExists(map)) {
      if (colorMode === 'default') {
        map.setStyle('mapbox://styles/mapbox/light-v10');
      } else if (colorMode === 'dark') {
        map.setStyle('mapbox://styles/mapbox/dark-v10');
      }
      map.on('style.load', () => {
        addCountyModeMapLayers(map);
      });
    }
  }, [colorMode, map]);

  useEffect(() => {
    if (mapExists(map)) {
      map.on('load', () => {
        addCountyModeMapLayers(map);

        map.on('mouseenter', 'confirmed-cases-per-1000', (e) => {
          map.getCanvas().style.cursor = 'pointer';
        });

        map.on('mouseleave', 'confirmed-cases-per-1000', (e) => {
          map.getCanvas().style.cursor = '';
        });

        map.on('mouseenter', 'confirmed-cases-per-1000-3d', (e) => {
          map.getCanvas().style.cursor = 'pointer';
        });

        map.on('mouseleave', 'confirmed-cases-per-1000-3d', (e) => {
          map.getCanvas().style.cursor = '';
        });
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

  useEffect(() => {
    if (mapExists(map)) {
      if (viewLevel === 'states') {
        addStateModeMapLayers(map);
        removeCountyModeMapLayers(map);
      } else if (viewLevel === 'counties') {
        addCountyModeMapLayers(map);
        removeStateModeMapLayers(map);
      }
    }
  }, [viewLevel, map]);

  return (
    <Box
      className="map-panel"
      sx={{
        marginTop: [0, 4],
        marginLeft: [0, 4, 4, 0],
        height: '90%',
        width: viewWidth,
        borderRadius: 20,
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
        // '@media only screen and (max-width: 1824px, min-width: 884px)': {
        //   height: '50%',
        // },
        '@media only screen and (max-width: 884px)': {
          height: '400px',
        },
        zIndex: 3,
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
        <MapPopup layers={popupLayers} />
      </Map>
    </Box>
  );
};

export default MapPanel;

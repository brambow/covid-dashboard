import config from '../config';
import removeStateModeMapLayers from './removeStateModeMapLayers';

const baseTileUrl = 'mapbox://';
const maxDayCount = config.currentDayCount;

export default function addStateModeMapLayers(map) {
  removeStateModeMapLayers(map);

  map.addSource('states-src', {
    type: 'vector',
    url: `${baseTileUrl}cartolab.3leq2ysf`,
  });

  map.addLayer({
    id: 'states-fill',
    type: 'fill',
    source: 'states-src',
    'source-layer': 'covid_state_stats',
    paint: {
      'fill-color': 'green',
      'fill-outline-color': 'white',
      'fill-opacity': 0.6,
    },
  });
}

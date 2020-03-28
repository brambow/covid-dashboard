import config from '../config';

const baseTileUrl = 'mapbox://';
const maxDayCount = config.currentDayCount;

export default function addStateModeMapLayers(map) {
  // try {
  //   //to-do better way to check when switching styles
  //   map.removeLayer('counties-outline');
  //   map.removeLayer('pct_health_coverage');
  //   map.removeLayer('pct_65_plus');
  //   map.removeLayer('confirmed-cases-per-1000');
  //   map.removeLayer('confirmed-cases-per-1000-3d');
  //   map.removeLayer('confirmed-cases');

  //   map.removeSource('counties-src');
  //   map.removeSource('covid-polygon-src');
  //   map.removeSource('covid-point-src');
  // } catch (err) {
  //   // console.warn(err);
  // }
  /* COUNTIES */
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

import config from '../config';

const baseTileUrl = 'mapbox://';
const maxDayCount = config.currentDayCount;

export default function addCountyModeMapLayers(map) {
  map.on('style.load', () => {
    /* COUNTIES */
    map.addSource('counties-src', {
      type: 'vector',
      url: `${baseTileUrl}cartolab.cl45j47g?fresh=true`,
    });

    map.addLayer({
      id: 'counties-outline',
      type: 'line',
      source: 'counties-src',
      'source-layer': 'covid_county_demographics',
      paint: {
        'line-color': '#000000',
        'line-width': 0.75,
      },
    });

    /* HEALTH COVERAGE */
    map.addLayer({
      id: 'pct_health_coverage',
      type: 'fill',
      source: 'counties-src',
      'source-layer': 'covid_county_demographics',
      paint: {
        'fill-color': {
          property: 'pct_w_health_coverage',
          stops: [
            [75, '#eff3ff'],
            [85, '#bdd7e7'],
            [90, '#6baed6'],
            [95, '#3182bd'],
          ],
        },
        'fill-opacity': 0.8,
      },
      layout: {
        visibility: 'none',
      },
    });

    map.addLayer({
      id: 'pct_65_plus',
      type: 'fill',
      source: 'counties-src',
      'source-layer': 'covid_county_demographics',
      paint: {
        'fill-color': {
          property: 'pct_65_and_over',
          stops: [
            [14, '#f2f0f7'],
            [18, '#cbc9e2'],
            [22, '#9e9ac8'],
            [28, '#6a51a3'],
          ],
        },
        'fill-opacity': 0.8,
      },
      layout: {
        visibility: 'none',
      },
    });

    map.addSource('covid-polygon-src', {
      type: 'vector',
      url: `${baseTileUrl}cartolab.ckoo8jt2?fresh=true`,
    });

    /* CONFIRMED CASES CHOROPLETH */
    map.addLayer({
      id: 'confirmed-cases-per-1000',
      type: 'fill',
      source: 'covid-polygon-src',
      'source-layer': 'covid_polygons',
      paint: {
        'fill-color': {
          property: 'confirmed_cases_per_1000',
          stops: [
            [0.15, '#edf8e9'],
            [0.5, '#bae4b3'],
            [1, '#74c476'],
            [2.5, '#31a354'],
            [5, '#006d2c'],
          ],
        },
        'fill-opacity': 0.9,
      },
      filter: ['match', ['get', 'day_count'], maxDayCount, true, false],
      layout: {
        visibility: 'visible',
      },
    });

    /* CONFIRMED CASES 3D */
    map.addLayer({
      id: 'confirmed-cases-per-1000-3d',
      type: 'fill-extrusion',
      source: 'covid-polygon-src',
      'source-layer': 'covid_polygons',
      paint: {
        'fill-extrusion-color': {
          property: 'confirmed_cases_per_1000',
          stops: [
            [0.1, '#edf8e9'],
            [0.25, '#bae4b3'],
            [1, '#74c476'],
            [2, '#31a354'],
            [3, '#006d2c'],
          ],
        },
        'fill-extrusion-height': [
          '*',
          ['get', 'confirmed_cases_per_1000'],
          10000,
        ],
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 1,
      },
      filter: ['match', ['get', 'day_count'], maxDayCount, true, false],
      layout: {
        visibility: 'none',
      },
    });

    map.addSource('covid-point-src', {
      type: 'vector',
      url: `${baseTileUrl}cartolab.881ugg70`,
    });

    /* CONFIRMED CASES GRADUATED CIRCLE */
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
            [10, 5],
            [100, 10],
            [250, 15],
            [500, 20],
            [1000, 30],
            [5000, 40],
            [10000, 45],
          ],
        },
        'circle-color': '#FF9F1C',
        'circle-opacity': 0.6,
      },
      filter: ['match', ['get', 'day_count'], maxDayCount, true, false],
      layout: {
        visibility: 'visible',
      },
    });
  });
}

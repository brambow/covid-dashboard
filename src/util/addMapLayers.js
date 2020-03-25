const baseTileUrl = 'mapbox://';
const maxDayCount = 60;

export default function addMapLayers(map) {
  try {
    //to-do better way to check when switching styles
    map.removeLayer('counties-outline');
    map.removeLayer('pct_health_coverage');
    map.removeLayer('pct_65_plus');
    map.removeLayer('confirmed-cases-per-1000');
    map.removeLayer('confirmed-cases-per-1000-3d');
    map.removeLayer('confirmed-cases');

    map.removeSource('counties-src');
    map.removeSource('covid-polygon-src');
    map.removeSource('covid-point-src');
  } catch (err) {
    // console.warn(err);
  }
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
          [0.1, '#edf8e9'],
          [0.25, '#bae4b3'],
          [1, '#74c476'],
          [2, '#31a354'],
          [3, '#006d2c'],
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
        ],
      },
      'circle-color': 'orange',
      'circle-opacity': 0.6,
    },
    filter: ['match', ['get', 'day_count'], maxDayCount, true, false],
    layout: {
      visibility: 'visible',
    },
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
}

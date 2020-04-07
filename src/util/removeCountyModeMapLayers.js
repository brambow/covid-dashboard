export default function removeCountyModeMapLayers(map) {
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

    return true;
  } catch (err) {
    console.warn(err);
    return false;
  }
}

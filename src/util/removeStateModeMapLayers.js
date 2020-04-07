export default function removeStateModeMapLayers(map) {
  try {
    map.removeLayer('states-fill');
    return true;
  } catch (err) {
    console.warn(err);
    return false;
  }
}

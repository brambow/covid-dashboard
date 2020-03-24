export function setDayCount(dayCount) {
  return {
    type: 'SET_DAY_COUNT',
    payload: dayCount,
  };
}

export function toggleColorMode(mode) {
  return {
    type: 'SET_COLOR_MODE',
    payload: mode,
  };
}

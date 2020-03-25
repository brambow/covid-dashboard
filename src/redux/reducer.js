export const initialState = {
  dayCount: 60,
  colorMode: localStorage.getItem('theme-ui-color-mode') ?? 'default',
  mapMode: '2D',
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DAY_COUNT':
      return {
        ...state,
        dayCount: action.payload,
      };
    case 'SET_COLOR_MODE':
      return {
        ...state,
        colorMode: action.payload,
      };
    case 'SET_MAP_MODE':
      return {
        ...state,
        mapMode: action.payload,
      };
    default:
      return { ...state };
  }
}

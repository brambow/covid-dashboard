export const initialState = {
  dayCount: 0,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DAY_COUNT':
      return {
        ...state,
        dayCount: action.payload,
      };
    default:
      return { ...state };
  }
}

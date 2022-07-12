const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_VALUE":
      return {
        ...state,
        count: state.count + action.payload,
      };
      break;
    case "DECREMENT_VALUE":
      return {
        ...state,
        count: state.count - action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default counterReducer;

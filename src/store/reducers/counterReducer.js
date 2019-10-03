export default (state = null, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return {
        ...state,
        count: state.count + action.payload
      };

    case "DEC_COUNTER":
      return {
        ...state,
        count: state.count - action.payload
      };

    default:
      return state;
  }
};

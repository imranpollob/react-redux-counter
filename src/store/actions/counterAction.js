export const incCounter = number => {
  return {
    type: "INC_COUNTER",
    payload: number
  };
};

export const decCounter = number => {
  return {
    type: "DEC_COUNTER",
    payload: number
  };
};

export const incCounterAsync = (number) => {
  return (dispatch) => {
    setTimeout(
      () => dispatch(incCounter(Math.ceil(Math.random() * 100))),
      1000
    );
  };
};

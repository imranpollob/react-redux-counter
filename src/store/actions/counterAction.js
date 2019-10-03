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

export const incCounterAsync = number => {
  return dispatch => {
    fetch("https://wrkm8.sse.codesandbox.io/")
      .then(res => res.json())
      .then(res => dispatch(incCounter(res.random_number)))
      .catch(err => console.log(err));
  };
};

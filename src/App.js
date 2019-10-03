import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  incCounter,
  decCounter,
  incCounterAsync
} from "./store/actions/counterAction";

function App(props) {
  return (
    <div>
      <h1>Pollob {props.count}</h1>
      <button onClick={() => props.incCounter(5)}>Add 5</button>
      <button onClick={() => props.decCounter(2)}>Sub 2</button>
      <button onClick={() => props.incCounterAsync(1)}>Add Random</button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.counterData.count
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      incCounter,
      decCounter,
      incCounterAsync
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

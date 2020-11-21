import React from 'react';
import { connect } from 'react-redux'
import './style/style.css';
import {increment, decrement} from './actions/counterActions'

function mapStateToProps (state) {
  return {
      count : state.count
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

function Counter ({count, increment, decrement}) {
  return (
      <div className="counters">
        <div className="counters__text">
          <h5>Counter: <span className="number">{count}</span> </h5>
        </div>
        <button onClick={increment} className="counters__add">+</button>
        <button onClick={decrement} className="counters__sub">-</button>
      </div>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);

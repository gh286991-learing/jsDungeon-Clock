import React from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import Clock from '../components/clock';
import '../css/main.sass'


class ClockContainer extends React.Component {
  render() {
    return (
      <div className = 'container'>
      <Clock/>
      </div>
    );
  }
}



export default connect(
  (state) => ({ state }),
  ActionCreators
)(ClockContainer);

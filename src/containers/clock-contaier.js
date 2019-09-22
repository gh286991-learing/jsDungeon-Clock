import React from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import Clock from '../components/clock';
import '../css/main.sass';


class ClockContainer extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      hour: date.getHours() * 30 + date.getMinutes() * 0.5  - 90,
      minute: date.getMinutes() * (360 / 60) + 180,
      second: date.getSeconds() * (360 / 60) + 180,

    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.getTime(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getTime = () => {
    const date = new Date();
    const minute = date.getMinutes() * (360 / 60) + 180;
    const second = date.getSeconds() * (360 / 60) + 180;
    const hour = date.getHours() * 30 + date.getMinutes() * 0.5  - 90; ;

    this.setState({
      hour,
      minute,
      second,
    });
  }

  render() {
    const { hour, minute, second } = this.state;

    return (
      <div className="container">
        <Clock hour={hour} minute={minute} second={second} />
      </div>
    );
  }
}


export default connect(
  (state) => ({ state }),
  ActionCreators
)(ClockContainer);

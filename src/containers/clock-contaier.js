import React from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import Clock from '../components/clock';
import '../css/main.sass';


class ClockContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),

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
    const hour = date.getHours();
    const minute = date.getHours();
    const second = date.getSeconds();

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

import React from 'react';
import PropTypes from 'prop-types';


class Clock extends React.Component {
  render() {
    const { hour, minute, second } = this.props;

    const style = {
      hour: {
        transform: `rotate(${hour}deg)`,
      },
      minute: {
        transform: `rotate(${minute}deg)`,
      },
      second: {
        transform: `rotate(${second}deg)`,
      },
    };


    return (
      <div className="clock_body">
        <div className="clock">
          <div style={style.hour} className="hour"> </div>
          <div style={style.minute} className="minute" />
          <div style={style.second} className="second" />
        </div>
      </div>
    );
  }
}

Clock.propTypes = {
  hour: PropTypes.number.isRequired,
  minute: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
};

export default Clock;

import React from 'react';


class Clock extends React.Component {
  render() {
    const { hour, minute, second } = this.props;


    return (
      <div className="clock_body">
        <div className="clock">
          <div className="hour"> </div>
          <div className="minute" />
          <div className="second" />
        </div>
      </div>
    );
  }
}

export default Clock;

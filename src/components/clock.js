import React from 'react';


class Clock extends React.Component {
  render() {
    return (
      <div className = "clock_body">
        <div className = "clock">
          <div className = "hour"> </div>
          <div className = "minute"></div>
          <div className = "second"></div>
        </div>
      </div>
    );
  }
}

export default Clock;

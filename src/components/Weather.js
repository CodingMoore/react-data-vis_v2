import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions/';
import Graph from './Graph';

class Weather extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    let displayGraph = null;
    const handleDateTimeConversion = (dt) => {
      const milliseconds = dt * 1000;
      const dateObject = new Date(milliseconds);
      const humanDateFormat = dateObject.toLocaleString("en-US", { weekday: "long", hour: "numeric" })
      return humanDateFormat;
    }
    const { error, isLoading, weatherData } = this.props;
    if (error) {
      return <>Error: { error.message}</>
    } else if (isLoading) {
      return <>Loading...</>
    } else {
      displayGraph = <Graph weatherData={this.props.weatherData} />
      return (
        <>
          <h1>Weather Data</h1>
          <ul>
            {weatherData.map((weather, index) =>
              <li key={index}>
                <p>{weather.temp.day}</p>
                <p>{handleDateTimeConversion(weather.dt)}</p>
              </li>
            )}
          </ul>
          {console.log("line 40 of Weather.js", weatherData)}
          {displayGraph}
        </>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    weatherData: state.weatherData,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Weather);
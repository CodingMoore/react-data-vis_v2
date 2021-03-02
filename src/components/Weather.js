import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions/';
import Graph from './Graph';

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    let displayGraph;
    const handleDateTimeConversion = (dt) => {
      const milliseconds = dt * 1000;
      const dateObject = new Date(milliseconds);
      const humanDateFormat = dateObject.toLocaleString("en-US", { weekday: "long", hour: "numeric" })
      return humanDateFormat;
    }
    const { error, isLoading, weatherData } = this.props;
    if (error) {
      return <>Error: { error.message}</>
    } else if (isLoading || !weatherData) {
      return <>Loading...</>
    } else {
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
          {weatherData.length > 0 && <Graph />}
          {console.log("line 43 of Weather.js", weatherData)}
          {/* <Graph weatherData = {this.props.weatherData} /> */}
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
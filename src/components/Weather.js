import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions/';
import Graph from './Graph';
import MapContainer from './Map';

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, coordinates } = this.props;
    console.log("THIS IS THE STORE", this.props);
    console.log(coordinates);
    dispatch(makeApiCall(coordinates.lat, coordinates.lng));
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.prevProps != )
  //   const { dispatch, coordinates } = this.props;
  //   console.log("THIS IS THE STORE", this.props);
  //   console.log(coordinates);
  //   dispatch(makeApiCall(coordinates.lat, coordinates.lng));
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.data !== this.state.data) {
  //     // Now fetch the new data here.
  //   }
  // }
  

  render() {
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
          <MapContainer />
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
          {console.log("line 43 of Weather.js", this.props)}
        </>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    weatherData: state.weatherData,
    isLoading: state.isLoading,
    error: state.error,
    coordinates: state.coordinates,
  }
}

export default connect(mapStateToProps)(Weather);
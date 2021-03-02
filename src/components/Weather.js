import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions/';

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {

    const { error, isLoading, weatherData } = this.props;
    console.log(typeof (weatherData));
    if (error) {
      return <>Error: { error.message}</>
    } else if (isLoading) {
      return <>Loading...</>
    } else {
      return (
        <>
          { console.log(weatherData)}
          <h1>Weather Data</h1>
          <ul>
            {weatherData.map((weather, index) =>
              <li key={index}>
                {console.log(weather.temp.day)}
                <p>{weather.temp}</p>
              </li>
            )}
          </ul>

        </>
      )
    }
  }
}

// weatherData["daily"].map(object => object["temp"]["day"])

const mapStateToProps = state => {
  return {
    weatherData: state.weatherData,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Weather);
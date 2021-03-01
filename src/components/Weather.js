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
    { console.log(weatherData) }
    const { error, isLoading, weatherData } = this.props;
    if (error) {
      return <>Error: { error.message}</>
    } else if (isLoading) {
      return <>Loading...</>
    } else {
      return (
        <>
          <h1>Weather Data</h1>
          <ul>
            {weatherData["daily"][0]["temp"]["day"].map((weather, index) =>
              <li key={index}>
                <p>{weather}</p>
              </li>
            )}
          </ul>

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
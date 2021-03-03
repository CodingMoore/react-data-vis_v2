import React from 'react';
import CanvasJSReact from './../canvasjs.react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Graph extends React.Component {
  constructor(props) {
    super(props);
  }
  // const data = useSelector(state => state.weatherData);
  //layout of graph structure
  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   dispatch(makeApiCall());
  // }
  render() {
    const handleDateTimeConversion = (dt) => {
      const milliseconds = dt * 1000;
      const dateObject = new Date(milliseconds);
      const humanDateFormat = dateObject.toLocaleString("en-US", { weekday: "long", hour: "numeric" })
      return humanDateFormat;
    }
    // const weatherData = this.props;
    const { error, isLoading, weatherData } = this.props;
    const options = {
      title: {
        text: "Temperature in Freedom Units"
      },
      axisY: {
        title: "Temp Fahrenheit",
        minimum: -50,
        maximum: 145,
      },
      data: [{
        type: "column",
        dataPoints: [
          { label: handleDateTimeConversion(weatherData[0].dt), y: weatherData[0].temp.day },
          { label: handleDateTimeConversion(weatherData[1].dt), y: weatherData[1].temp.day },
          { label: handleDateTimeConversion(weatherData[2].dt), y: weatherData[2].temp.day },
          { label: handleDateTimeConversion(weatherData[3].dt), y: weatherData[3].temp.day },
          { label: handleDateTimeConversion(weatherData[4].dt), y: weatherData[4].temp.day },
          { label: handleDateTimeConversion(weatherData[5].dt), y: weatherData[5].temp.day },
          { label: handleDateTimeConversion(weatherData[6].dt), y: weatherData[6].temp.day },
          { label: handleDateTimeConversion(weatherData[7].dt), y: weatherData[7].temp.day }
        ]
      }]
    }
    if (error) {
      return <>Error: { error.message}</>
    } else if (isLoading || !weatherData) {
      return <>Loading...</>
    } else {
      return (
        <div>
          <CanvasJSChart options={options} />
        </div>
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

export default connect(mapStateToProps)(Graph);

// making the API call in this component -- before that weatherData was undefined. also, check Weather.js line 41 (Graph component render)
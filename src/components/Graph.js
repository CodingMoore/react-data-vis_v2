import React from 'react';
import CanvasJSReact from './../canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Graph(props) {
  const { weatherData } = props;
  //layout of graph structure
  console.log("Line 9 of Graphs", weatherData);

  const options = {
    title: {
      text: "Temperature in Freedom Units"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: weatherData[0].dt, y: weatherData[0].temp.day },
        { label: weatherData[1].dt, y: weatherData[1].temp.day },
        { label: weatherData[2].dt, y: weatherData[2].temp.day },
        { label: weatherData[3].dt, y: weatherData[3].temp.day },
        { label: weatherData[4].dt, y: weatherData[4].temp.day },
        { label: weatherData[5].dt, y: weatherData[5].temp.day },
        { label: weatherData[6].dt, y: weatherData[6].temp.day },
        { label: weatherData[7].dt, y: weatherData[7].temp.day }
      ]
    }]
  }

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>

  )

}

export default Graph;
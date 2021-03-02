import * as c from './ActionTypes';

export const requestWeather = () => ({
  type: c.REQUEST_WEATHER
});

export const getWeatherSuccess = (weatherData) => ({
  type: c.GET_WEATHER_SUCCESS,
  weatherData
});

export const getWeatherFailure = (error) => ({
  type: c.GET_WEATHER_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestWeather);
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=45.5051&lon=-122.6750&units=imperial&exclude=hourly,minutely,weather&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getWeatherSuccess(jsonifiedResponse.daily));
        })
      .catch((error) => {
        dispatch(getWeatherFailure(error));
      });
  }
}
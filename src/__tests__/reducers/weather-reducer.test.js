import weatherReducer from '../../reducers/weather-reducer';
import * as c from './../../actions/ActionTypes';

describe('weatherReducer', () => {

  let action;

  const defaultState = {
    isLoading: false,
    weatherData: [],
    error: null
  };

  const loadingState = {
    isLoading: true,
    weatherData: [],
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(weatherReducer(defaultState, { type: null })).toEqual(
      {
        isLoading: false,
        weatherData: [],
        error: null
      }
    );
  });

  test('requesting weather data should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_WEATHER
    };
    expect(weatherReducer(defaultState, action)).toEqual({
      isLoading: true,
      weatherData: [],
      error: null
    });
  });

  test('successfully getting weather data should change isLoading to false and update weather data', () => {
    const weatherData = "Weather data";
    action = {
      type: c.GET_WEATHER_SUCCESS,
      weatherData
    };
    expect(weatherReducer(loadingState, action)).toEqual({
      isLoading: false,
      weatherData: "Weather data",
      error: null
    });
  });

  test('failing to get weather data should change isLoading to false and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_WEATHER_FAILURE,
      error
    };

    expect(weatherReducer(loadingState, action)).toEqual({
      isLoading: false,
      weatherData: [],
      error: "An error"
    });

  });
});
import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  weatherData: [],
  error: null,
  coordinates: { lat: 45.5051, lng: -122.6750 }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_WEATHER:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        weatherData: action.weatherData,
        error: null
      });
    case c.GET_WEATHER_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    case c.ADD_COORDINATES:
      return Object.assign({}, state, {
        coordinates: action.coordinates
      });
    default:
      return state;
  }
}
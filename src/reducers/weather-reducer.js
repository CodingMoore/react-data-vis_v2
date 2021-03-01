import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  weatherData: [],
  error: null
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
        weatherData: {},
        error: null
      });
    case c.GET_WEATHER_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
}
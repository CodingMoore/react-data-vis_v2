import * as actions from "./../../actions";
import * as c from "./../../actions/ActionTypes";

describe("weather reducer actions", () => {
  it("requestWeather should create REQUEST_WEATHER action", () => {
    expect(actions.requestWeather()).toEqual({
      type: c.REQUEST_WEATHER
    });
  });

  it("getWeatherSuccess should create GET_WEATHER_SUCCESS action", () => {
    const weather = "Some weather";
    expect(actions.getWeatherSuccess(weather)).toEqual({
      type: c.GET_WEATHER_SUCCESS,
      weather
    });
  });
  it("getWeatherFailure should creat GET_WEATHER_FAILURE action", () => {
    const error = "An error";
    expect(actions.getWeatherFailure(error)).toEqual({
      type: c.GET_WEATHER_FAILURE,
      error
    });
  });

});
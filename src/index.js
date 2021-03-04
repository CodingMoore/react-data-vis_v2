import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import middlewareLogger from './middleware/middleware-logger';
import reducer from './reducers/weather-reducer';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { makeApiCall } from './actions';


const store = createStore(reducer, applyMiddleware(thunkMiddleware, middlewareLogger));
// const store = createStore(reducer);
const unsubscribe = store.subscribe(() => 
  console.log("Subscription", store)
  // makeApiCall(store.coordinates.lat, store.coordinates.lng)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </ Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
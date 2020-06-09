import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
// import NavBar from './NavBar';
import userReducer from './reducers/userReducer'
const store = createStore(userReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    {/* <NavBar /> */}
    <App />
  </Provider>,
  document.getElementById('root')
);



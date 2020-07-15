import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase';
import userReducer from './reducers/userReducer'
const store = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    {/* <NavBar /> */}
    <App />
  </Provider>,
  document.getElementById('root')
);



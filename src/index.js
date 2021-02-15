import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App';
import reportWebVitals from './components/reportWebVitals';
import { createStore } from 'redux';
import reducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux'; //provider will give all its children access to the connect() func, connecting them to the store

const store = createStore(reducer); //connect our reducer to store here

ReactDOM.render( 
  <Provider store={store}>
    <App />  
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();

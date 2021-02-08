import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App';
import reportWebVitals from './components/reportWebVitals';

ReactDOM.render( // reactDom invokes react-dom library. ReactDOM has render() method responsible for rendering React elements to the DOM. It takes two arguments; <App /> which is our root component. The second states where the element should be rendered
  <React.StrictMode>
    <App />  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

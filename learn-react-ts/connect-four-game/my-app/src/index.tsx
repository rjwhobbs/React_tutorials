import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ArrayPrac from './ArrayPrac';
import FormPrac from './FormPrac';
import DynamicArrayPrac from './DynamicArrayPrac';
import DynamicArraySolution from './DynamicArraySolution';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<ArrayPrac />, document.getElementById('root'));
// ReactDOM.render(<FormPrac />, document.getElementById('root'));
ReactDOM.render(<DynamicArraySolution />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comment from './ExtractingComponents';
import * as serviceWorker from './serviceWorker';
import Clock from './Clock';

ReactDOM.render(
		<Clock
			date={new Date()}
		/>,
		document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function tick() {
	const el = (
		<>
			<h1>My bruzzz!!</h1>
			<h1>it is {new Date().toLocaleTimeString()}</h1>
		</>
	);
	ReactDOM.render(
		el,
		document.getElementById('root')
	);
} 

setInterval(tick, 1000);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comment from './ExtractingComponents';
import * as serviceWorker from './serviceWorker';
import Clock from './Clock';
import EventListener from './EventListener';
import Page from './RetruningNull';
import Forms from './Forms';
import LiftingStateUp from './LiftingStateUp';
import PropsChild from './PropsChild';
import Composition from './Composition';
import ThinkingInReact from './ThinkingInReact';
// import App from './Context/App';
import App from './DynamicContext/App';

ReactDOM.render(
		<Forms />,
		document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

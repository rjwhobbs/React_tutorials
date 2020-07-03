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
// import App from './DynamicContext/App';
// import App from './FuncInContext/App';
// import App from './ConsumeMultiContexts/App';
// import App from './ErrorBoundaries/ErrorBoundary';
import App from './RefForwarding/App';
import MouseTracker from './RenderProps/MouseTracker';
import HOC from './HOC/HOCtwo'
import PracOne from './JSXprac/PracOne';
import SCUPrac from './PerformancePrac/SCUPrac';
import PortalsOne from './Portals/PortalsOne';

ReactDOM.render(
		<PortalsOne />,
		document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

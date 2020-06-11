import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comment from './ExtractingComponents';
import * as serviceWorker from './serviceWorker';

const comment = {
	date: new Date(),
	text: "This is a commnet",
	author: {
		name: "Joe",
		url: 'https://placekitten.com/g/64/64'
	}
}

ReactDOM.render(
		<Comment
			text={comment.text}
			date={comment.date} 
			author={comment.author}
		/>,
		document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

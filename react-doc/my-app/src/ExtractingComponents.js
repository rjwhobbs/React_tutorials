import React from 'react';

// Example input
// const comment = {
// 	date: new Date(),
// 	text: "This is a commnet",
// 	author: {
// 		name: "Joe",
// 		url: 'https://placekitten.com/g/64/64'
// 	}
// }

function formatDate(date) {
  return date.toLocaleDateString();
}

const Avatar = function (props) {
	return (
		<img 
			src={props.user.url} 
			alt={props.user.name}
		/>
	)
}

const UserInfo = function (props) {
	return (
		<div>
			<Avatar user={props.user} />
			<div>{props.user.name}</div>
		</div>
	)
}

const Comment = function (props) {
	return (
		<div>
			<UserInfo user={props.author} />
			<p>{props.text}</p>
			<div>{formatDate(props.date)}</div>
		</div>
	)
}

export default Comment;
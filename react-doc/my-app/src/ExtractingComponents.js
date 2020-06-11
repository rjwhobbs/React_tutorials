import React from 'react';

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
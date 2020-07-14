import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class TestModal extends Component {
	render() {
		return (
			<div>
				Howzit, this are website
				<Modal show={true}>
					<Modal.Header>Hi</Modal.Header>
					<Modal.Body>asdfasdf</Modal.Body>
					<Modal.Footer>This is the footer</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default TestModal;

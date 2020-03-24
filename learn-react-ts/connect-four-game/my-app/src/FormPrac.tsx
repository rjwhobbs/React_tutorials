import React from 'react'
import { isTSParenthesizedType } from '@babel/types';

interface FormPracStates {
  userIn: string;
}

export default class FormPrac extends React.Component<{}, FormPracStates>{
  constructor(props: any) {
    super(props);
    this.state = {
      userIn: ""
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e: any) {
    this.setState({userIn: e.target.value});
  }

  render() {
    let userIn = this.state.userIn;
    const handleInput = this.handleInput;
    return(
      <>
        <input type="text" value={userIn} onChange={(e) => handleInput(e)}/>
        <p>{userIn}</p>
      </>
    )
  }
}
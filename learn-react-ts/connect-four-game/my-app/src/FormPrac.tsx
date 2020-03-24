import React from 'react'
import { isTSParenthesizedType } from '@babel/types';

interface FormPracStates {
  userIn: string;
  isChecked: boolean;
  userText: string;
}

export default class FormPrac extends React.Component<{}, FormPracStates>{
  constructor(props: any) {
    super(props);
    this.state = {
      userIn: "",
      isChecked: false,
      userText: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  handleInput(e: any) {
    this.setState({userIn: e.target.value});
  }

  handleCheck(e: any) {
    this.setState({isChecked: e.target.checked});
  }

  handleText(e: any) {
    this.setState({userText: e.target.value});
  }

  render() {
    let userIn = this.state.userIn;
    let checked: string = "";
    let text = this.state.userText;
    let isChecked = this.state.isChecked;
    isChecked ? checked = "Checked" : checked = "Unchecked";
    return(
      <>
        <input type="text" value={userIn} onChange={(e) => this.handleInput(e)}/>
        <p>{userIn}</p>
        <input type="checkbox" checked={isChecked} onChange={(e) => this.handleCheck(e)}/>
        <p>{checked}</p>
        <textarea cols={60} rows={7} onChange={(e) => this.handleText(e)}></textarea>
        <p>The stuff you typed: {text}</p>
      </>
    )
  }
}
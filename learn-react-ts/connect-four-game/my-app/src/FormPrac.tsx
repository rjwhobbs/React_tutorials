import React from 'react'
import { isTSParenthesizedType } from '@babel/types';

interface FormPracStates {
  userIn: string;
  isChecked: boolean;
  userText: string;
  selected: string;
  inputName: string;
}

export default class FormPrac extends React.Component<{}, FormPracStates>{
  constructor(props: any) {
    super(props);
    this.state = {
      userIn: "",
      isChecked: false,
      userText: "",
      selected: "apple",
      inputName: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleSelection(e: any) {
    this.setState({selected: e.target.value});
  }

  handleChange(e: any) {
    this.setState({inputName: e.target.value})
  }

  render() {
    let userIn = this.state.userIn;
    let inputName = this.state.inputName;
    let checked: string = "";
    let text = this.state.userText;
    let isChecked = this.state.isChecked;
    let userSelection = this.state.selected;
    let arr = ["apple","banana","carrot","donuts"];
    let options = arr.map((item, index) => {
      return <option key={index} value={item}>{item}</option>
    })
    isChecked ? checked = "Checked" : checked = "Unchecked";
    return(
      <>
        <input type="text" value={userIn} onChange={(e) => this.handleInput(e)}/>
        <p>{userIn}</p>
        <input type="checkbox" checked={isChecked} onChange={(e) => this.handleCheck(e)}/>
        <p>{checked}</p>
        <textarea cols={60} rows={7} onChange={(e) => this.handleText(e)}></textarea>
        <p>The stuff you typed: {text}</p>
        <select value={userSelection} onChange={(e) => this.handleSelection(e)}>
          {options}
        </select>
        <p>{userSelection}</p>
        <form>
          {/* How come I can just call the function here with out passing anything 
          like the others? */}
          <input type="text" value={inputName} onChange={this.handleChange}/>
        </form>
        <p>{inputName}</p>
      </>
    )
  }
}
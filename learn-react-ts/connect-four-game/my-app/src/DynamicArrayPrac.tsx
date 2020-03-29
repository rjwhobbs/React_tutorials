import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TopicList from './lib/TopicList';
import _ from "lodash";

interface DynamicArrayPracStates {
  topicArr: any;
  userInput: string;
  inputValue: string;
  votes: number;
}

export default class DynamicArrayPrac extends React.Component<{}, DynamicArrayPracStates> {
  constructor(props: any) {
    super(props);

    let topicArr: any[] = [];
    // topicArr.push(new Array());c // Dangerous as Array can be reasigned

    this.state = {
      topicArr: topicArr,
      userInput: "",
      inputValue: "",
      votes: 0
    }
  }

  handleInput = (e: any) => {
    let userInput = e.target.value;
    this.setState({userInput: userInput, inputValue: userInput});
  }

  userSubmit = () => {
    let userInput = this.state.userInput;

    const newTopic = {
      id: uuidv4(),
      topic: userInput,
      votes: 0
    }

    this.setState({userInput: userInput, inputValue: ""}, () => {
      let temp: any[] = [...this.state.topicArr];
      temp.push(newTopic);
      this.setState({topicArr: temp});
    });
  }

  removeTopic = (id: string) => {
    let temp: any[] = this.state.topicArr.filter(((item: any) => item.id !== id));
    this.setState({topicArr: temp});
  }

  upVote = (id: string) => {
    let len: number = this.state.topicArr.length;
    let i: number = 0;
    while (i < len) {
      if (id === this.state.topicArr[i].id) {
        let temp = _.cloneDeep(this.state.topicArr[i]); 
        temp.votes += 1;
        // this.setState({topicArr[i]: temp});
        return ;
      }
      i++;
    }
  }

  render() {
    let inputValue = this.state.inputValue;
    return (
      <div>
        <input type="text" value={inputValue} onChange={this.handleInput}/>
        <button onClick={this.userSubmit}>Submit</button>
        <br/>
        <TopicList 
          topicArr={this.state.topicArr} 
          removeTopic={this.removeTopic} 
          upVote={this.upVote}/>
      </div>
    )
  }
}

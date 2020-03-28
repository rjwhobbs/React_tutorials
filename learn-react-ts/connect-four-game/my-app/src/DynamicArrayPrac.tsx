import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TopicList from './lib/TopicList';

interface DynamicArrayPracStates {
  topicArr: any;
  userInput: string;
}



export default class DynamicArrayPrac extends React.Component<{}, DynamicArrayPracStates> {
  constructor(props: any) {
    super(props);

    let topicArr: any[] = [];
    // topicArr.push(new Array());c // Dangerous as Array can be reasigned

    this.state = {
      topicArr: topicArr,
      userInput: ""
    }
  }

  userSubmit = () => {
    console.log("Clicked");
    let userInput: string = this.state.userInput + "X"

    const newTopic = {
      id: uuidv4(),
      topic: userInput
    }

    this.setState({userInput: userInput}, () => {
      let temp: any[] = [...this.state.topicArr];
      temp.push(newTopic);
      this.setState({topicArr: temp});
    });
  }

  removeTopic = (id: string) => {
    console.log("XXX", this);
    let temp: any[] = this.state.topicArr.filter(((item: any) => item.id !== id));
    this.setState({topicArr: temp});
  }

  render() {
    return (
      <div>
        <button onClick={this.userSubmit}>Press This</button>
        <br/>
        <TopicList topicArr={this.state.topicArr} removeTopic={this.removeTopic} />
      </div>
    )
  }
}

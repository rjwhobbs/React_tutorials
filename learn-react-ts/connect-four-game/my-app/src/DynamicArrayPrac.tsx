import React from 'react';

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
      topicArr: [],
      userInput: ""
    }
  }

  userSubmit = () => {
    let test: string = this.state.userInput + "X"
    this.setState({userInput: test}, () => {
      let temp: any[] = [...this.state.topicArr];
      temp.push(this.state.userInput);
      this.setState({topicArr: temp});
    });
  }

  render() {
    let list = this.state.topicArr.map((item: any, index: any) => {
      return <p key={index}>{item}</p>
    });
    return (
      <div>
        <button onClick={this.userSubmit}>Press This</button>
        <br/>
        {list}
      </div>
    )
  }
}

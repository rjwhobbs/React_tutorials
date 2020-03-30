import React, { Component } from 'react';

function PostButton(props: any) {
  let style = {
    width: 24,
    height: 24
  }

  return (
    <button style={style} onClick={() => props.handleClick()}>{props.label}</button>
  )
}

function PostText(props: any) {
  let style = {
    border: "1px solid red",
    width: props.width
  }

  return (
    <div style={style}>{props.text}</div>
  )
}

function Post(props: any) {
  let style = {
    display: "flex"
  }

  return (
    <div style={style}>
      <PostButton label="X" handleClick={props.removeItem}/>
      <PostText text={props.title} width="200px" />
      <PostButton label="+" handleClick={props.incScore}/>
      <PostText text={props.score} width="20px" />
      <PostButton label="-" handleClick={props.decScore}/>
    </div>
  )
}

function PostList(props: any) {
  let list = props.postList.map((item: any, index: any) => {
    return (
      <Post 
        key={index} // using index here instead of a unique id?
        title={item.title}
        score={item.score} 
        incScore={() => props.updateScore(index, 1)} // So the attributes are an actaul function
        decScore={() => props.updateScore(index, -1)}
        removeItem={() => props.removeItem(index)}/>
    )
  });
  return (
    <div>
      {list}
    </div>
  )
}

interface DynArrStates {
  value: string;
  items: any;
}

class DynamicArraySolution extends Component<{}, DynArrStates>{
  constructor(props: any) {
    super(props);
    this.state = {
      value: "",
      items: []
    }
  }

  handleChange = (e: any) => {
    this.setState({value: e.target.value});
  }

  addItem = () => {
    let itemsTemp = this.state.items.slice();
    let userInput = this.state.value.substring(0, 20);
    itemsTemp.push({title: userInput, score: 0});
    itemsTemp.sort((a: any, b: any) => {
      return b.score - a.score;
    });
    this.setState({items: itemsTemp, value: ""});
  }

  updateScore = (index: number, val: number) => {
    let itemsTemp = this.state.items.slice();
    itemsTemp[index].score += val;
    itemsTemp.sort((a: any, b: any) => {
      return b.score - a.score;
    });
    this.setState({items: itemsTemp});
  }

  removeItem = (index: number) => {
    let itemsTemp = this.state.items.slice();
    itemsTemp.splice(index, 1);
    itemsTemp.sort((a: any, b: any) => {
      return b.score - a.score;
    });
    this.setState({items: itemsTemp});
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.addItem}>Submit</button>
        <PostList 
          postList={this.state.items}
          updateScore={this.updateScore} 
          removeItem={this.removeItem}/>
      </div>
    );
  }
}

export default DynamicArraySolution;

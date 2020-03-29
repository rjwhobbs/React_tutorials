import React, { Component } from 'react';
import TopicItem from './TopicItem';

interface TopicListProps {
  topicArr: any;
  removeTopic: any;
  upVote: any;
}

class TopicList extends Component<TopicListProps, {}>{
  render() {
    let topiclist = this.props.topicArr.map((item: any) => {
      return (
      <TopicItem 
        key={item.id} 
        topicItem={item.topic}
        removeTopic={this.props.removeTopic}
        itemId={item.id}
        upVote={this.props.upVote}/>
      )
    })
    return (
      <div>
        {topiclist}
      </div>
    );
  }
}

export default TopicList;

import React, { Component } from 'react';

interface TopicItemProps {
  topicItem: string;
  removeTopic: any;
  itemId: string;
  upVote: any;
}

class TopicItem extends Component<TopicItemProps, {}>{
  render() {
    return (
        <div>
          <button onClick={this.props.removeTopic.bind(this, this.props.itemId)}>X</button>
          {this.props.topicItem}
          <button onClick={this.props.upVote.bind(this, this.props.itemId)}>+</button>
        </div>
    );
  }
}

export default TopicItem;

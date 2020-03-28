import React, { Component } from 'react';

interface TopicItemProps {
  topicItem: string;
  removeTopic: any;
  itemId: string;
}

class TopicItem extends Component<TopicItemProps, {}>{
  render() {
    return (
        <div>
          {this.props.topicItem}
          <button onClick={this.props.removeTopic.bind(this, this.props.itemId)}>X</button>
        </div>
    );
  }
}

export default TopicItem;

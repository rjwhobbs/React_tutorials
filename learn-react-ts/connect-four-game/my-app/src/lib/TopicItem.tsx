import React, { Component } from 'react';

interface TopicItemProps {
  topicItem: string;
}

class TopicItem extends Component<TopicItemProps, {}>{
  render() {
    return (
        <p>{this.props.topicItem}</p>
    );
  }
}

export default TopicItem;

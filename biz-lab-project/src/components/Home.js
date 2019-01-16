import React, { Component } from 'react';
import Aside from './Aside';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  toggleSidebar() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    return (
      <div>
        <Aside toggleSidebar={this.toggleSidebar.bind(this)} expanded={this.state.expanded} />
      </div>
    );
  }
}

export default Home;

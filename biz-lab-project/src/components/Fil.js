import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/fil.scss';

class Fil extends Component {
  render() {
    const { expanded } = this.props;
    const className = expanded ? 'fil' : 'fil fil--expanded'
    return (
      <div className={className}>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expanded: state.aside.expanded
})

export default connect(mapStateToProps)(Fil);
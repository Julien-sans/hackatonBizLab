import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/fil.scss';
import Carte from './Carte';

class Fil extends Component {
  render() {
    const { expanded, projects } = this.props;
    const className = expanded ? 'fil' : 'fil fil--expanded';
    return (
      <div className={className}>
        {
          projects && projects.map(project =>
            <Carte project={project} />
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expanded: state.aside.expanded,
  projects: state.forms.project
})

export default connect(mapStateToProps)(Fil);
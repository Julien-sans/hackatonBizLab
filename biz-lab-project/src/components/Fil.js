import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/fil.scss';
import Carte from './Carte';

class Fil extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filter: '',
    };
  }

  componentDidMount() {
    const projet = require('../data/project.json');
     this.setState({
       items: projet
    })
  }

  handleChange = e => this.setState({ filter: e.target.value });
  
  render() {
    const { items } = this.state;
    console.log(items)

    if (this.state.filter) {
      items = items.filter(item =>
        items.toLowerCase().includes(this.state.filter.toLowerCase()),
      );
    }    
    
    const { expanded, projects } = this.props;
    const className = expanded ? 'fil' : 'fil fil--expanded';
    return (
      <div className={className}>
        <div className="list-item-names-container">
          <input type="text" onChange={this.handleChange} />
          {items.map(item =>
            <h5 key={item.type}>
              {item.type}
            </h5>,
          )}
        </div>
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
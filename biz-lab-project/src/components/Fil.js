import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/fil.scss';
import Carte from './Carte';

class Fil extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projet: [],
      filter: '',
    };
  }
  
  componentDidMount() {
    const projet = require('../data/project.json');
    this.setState({
      projet: projet
    })
  }
  
  handleChange = e => this.setState({ filter: e.target.value });
  
  render() {
    let { expanded, projects } = this.props;
    const className = expanded ? 'fil' : 'fil fil--expanded';
    let projet = this.state.projet;
    console.log(projet)
    
    if (this.state.filter) {
      projects = projects.filter(item =>
        item.type.toLowerCase().includes(this.state.filter.toLowerCase()),
      );
    }   
    
    return (
      <div className={className}>
        <div className="list-item-names-container mt-5 w-50">
          <input className="form-control" placeholder="FILTRER LES PROJETS PAR TYPE" type="text" onChange={this.handleChange} />
        </div>
        {
          projects && projects.reverse().map(project =>
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
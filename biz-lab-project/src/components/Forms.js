import React, { Component } from 'react';
import '../styles/forms.css';
import Aside from './Aside'
import { connect } from 'react-redux';
import { editorInputForm, createProject } from '../actions/forms';
import { ToastContainer, ToastStore } from 'react-toasts';
import '../styles/fil.scss';

class Forms extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target }) {
    this.props.editorInputForm(target.name, target.value);
  }

  handleSubmit(e) {
    const { form } = this.props;
    e.preventDefault();
    this.props.createProject(form);
  }

  render() {
    const { expanded } = this.props;
    const className = expanded ? 'fil' : 'fil fil--expanded'
    return (
      <div className="wrapper">
        <Aside />
        <div class="cont" className={className}>
          <h1 className="projectTitle">PROJECT CREATION</h1>
          <form className="form" onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} name="name" className="my-4" type="text" placeholder="NOM DU PROJET"></input>
            <textarea onChange={this.handleChange} name="description" className="projectDescription my-4" type="text" placeholder="DESCRIPTION DU PROJET"></textarea>
            <input onChange={this.handleChange} name="type" className="my-4" type="text" placeholder="TYPE DE PROJET"></input>
            <input onChange={this.handleChange} name="competences" className="my-4 competences" type="text" placeholder="COMPETENCES"></input>
            <input onChange={this.handleChange} name="lien" className="my-4" type="text" placeholder="LIEN GITHUB"></input>
            <input onChange={this.handleChange} name="equipe" className="my-4" type="text" placeholder="EQUIPE"></input>
            <input onChange={this.handleChange} name="initiateur" className="my-4" type="text" placeholder="INITIATEUR"></input>
            <div className="d-flex justify-content-center">
              <button onClick={() => ToastStore.success("Votre projet a bien été ajouté")} className="my-4" type="submit" id="login-button">SUBMIT</button>
            </div>
            <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_RIGHT}/>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, description, type, competence, lien, equipe, initiateur } = state;
  return {
    expanded: state.aside.expanded,
    form: {
      name,
      description,
      type,
      competence,
      lien,
      equipe,
      initiateur,
    }
  }
};

const mapDispatchToProps = {
  editorInputForm, createProject
}

export default connect(mapStateToProps, mapDispatchToProps)(Forms);

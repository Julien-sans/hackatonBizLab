import React, { Component } from 'react';
import '../styles/forms.css';

class Forms extends Component {
  render() {
    return (
      <div class="wrapper">
        <div class="container">
          <h1>PROJECT CREATION</h1>
          <form class="form">
            <input className="my-4" type="text" placeholder="NOM DU PROJET"></input>
            <textarea className="projectDescription my-4" type="text" placeholder="DESCRIPTION DU PROJET"></textarea>
            <input className="my-4" type="text" placeholder="TYPE DE PROJET"></input>
            <input className="my-4 competences" type="text" placeholder="COMPETENCES"></input>
            <input className="my-4" type="text" placeholder="LIEN GITHUB"></input>
            <input className="my-4" type="text" placeholder="EQUIPE"></input>
            <input className="my-4" type="text" placeholder="INITIATEUR"></input>
            <button className="my-4" type="submit" id="login-button">SUBMIT</button>
          </form>
        </div>


      </div>
    );
  }
}

export default Forms;

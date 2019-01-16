import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Mon dashboard <i class="fas fa-caret-down"></i></li>
          <li>Mon profil</li>
          <li>Créer un projet</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
import React, { Component } from 'react';
import '../styles/home.scss';
import { connect } from 'react-redux';
import { underMenu } from '../actions/aside';

class Menu extends Component {
  render() {
    const { underMenu, isUnderMenuOpen } = this.props;
    return (
      <div>
        <ul className="ml-5">
          <li onClick={underMenu}>Mon dashboard&nbsp;&nbsp;&nbsp;<i class="fas fa-caret-down"></i></li>
          {isUnderMenuOpen ? 'oui' : ''}
          <li>Mon profil</li>
          <li>Créer un projet</li>
        </ul>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  isUnderMenuOpen: state.aside.isUnderMenuOpen
})

const mapDispatchToProps = {
  underMenu
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
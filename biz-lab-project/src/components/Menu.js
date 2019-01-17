import React, { Component } from 'react';
import '../styles/home.scss';
import { connect } from 'react-redux';
import { underMenu } from '../actions/aside';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    const { underMenu, isUnderMenuOpen } = this.props;
    return (
      <div>
        <ul className="ml-5">
          <li className="my-2" style={{ cursor: "pointer" }} onClick={underMenu}>Mon dashboard&nbsp;&nbsp;&nbsp;<i class="fas fa-caret-down"></i></li>
          {isUnderMenuOpen ?
            <ul className="ml-4">
              <Link to="" style={{ textDecoration: 'none' }}><li className="mb-1">Mes projets</li></Link>
              <Link to="" style={{ textDecoration: 'none' }}><li>Vue d'ensemble</li></Link>
            </ul>
            : ''}
          <Link to="" style={{ textDecoration: 'none' }}><li className="my-2">Mon profil</li></Link>
          <Link to="/forms" style={{ textDecoration: 'none' }}><li className="my-2">Créer un projet</li></Link>
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
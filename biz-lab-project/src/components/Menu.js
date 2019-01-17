import React, { Component } from 'react';
import '../styles/home.scss';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { underMenu } from '../actions/aside';
import { HashLink as Link } from 'react-router-hash-link';

class Menu extends Component {
  render() {
    const { underMenu, isUnderMenuOpen } = this.props;
    return (
      <div>
        <ul className="ml-5">
          <Link to="/home" style={{ textDecoration: 'none' }}><li className="my-2">Fil d'actualité</li></Link>
          <li className="my-2" style={{ cursor: "pointer" }} onClick={underMenu}>Mon dashboard&nbsp;&nbsp;&nbsp;<i class="fas fa-caret-down"></i></li>          {isUnderMenuOpen ?
            <ul className="ml-4">
              <Link to="/dashboard#vuedensemble" style={{ textDecoration: 'none' }}><li>Vue d'ensemble</li></Link>
              <Link to="/dashboard#mesprojets" style={{ textDecoration: 'none' }}><li className="mb-1">Mes projets</li></Link>
            </ul>
            : ''}
            <Link to="" style={{ textDecoration: 'none' }}><li className="my-2">Mon profil</li></Link>
            <Link to="/forms" style={{ textDecoration: 'none' }}><li className="my-2">Créer un projet</li></Link>
            <Link to="/" style={{ textDecoration: 'none' }}><li className="my-2"><Button className="mt-5" color="secondary">SE DECONNECTER</Button></li></Link>            
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
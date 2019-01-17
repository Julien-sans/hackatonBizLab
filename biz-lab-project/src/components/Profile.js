import React, { Component } from 'react';
import {
  Col,
  Row,
  Container,
  Button
} from 'reactstrap';
import '../styles/profile.css';

import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
      <div id="Profile">
        <Container className="container">
          <Row>
            <Col lg="12">
              <div className="profile">
                Mon Profil
              </div>
            </Col>
            <Col lg='12'>
              <div className="circularPicture">
                <img src="https://cache.cosmopolitan.fr/data/photo/w650_c17/47/photo-retro-humour-large.jpg" alt="Photo de profil" />
              </div>
              <div>
                Nom
              </div>
              <div>
                Prénom
              </div>
              <div>
                Email
              </div>
              <div>
                Poste occupé
              </div>
              <div>
                Numéro de téléphone
              </div>
              <div>
                Compétences
              </div>
              <div>
                <Button>
                  <Link to='/profile/dashboard'>
                    Consulter mon dashboard
                  </Link>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Profile;
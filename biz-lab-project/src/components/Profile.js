import React, { Component } from 'react';
import {
  Col,
  Row,
  Container,
  Button
} from 'reactstrap';
import Aside from './Aside'
import '../styles/profile.css';

import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
      <div>
        <Aside />
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
                <div className="profileList">
                  Doe
              </div>
                <div className="profileList">
                  John
              </div>
                <div className="profileList">
                  john.doe@gmail.com
              </div>
                <div className="profileList">
                  Graphiste
              </div>
                <div className="profileList">
                  01 23 45 67 89
              </div>
                <div className="profileList">
                  PhotoShop / Pixen / Procreate
              </div>
                <div>
                  <Button>
                    <Link to='/dashboard' className="profileList">
                      Consulter mon dashboard
                  </Link>
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Profile;
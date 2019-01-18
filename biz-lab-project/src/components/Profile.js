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
                <div>
                  <img className="rounded-circle" src="https://66.media.tumblr.com/avatar_9cc8b64575a4_512.pnj" style={{width: '20%'}} alt="Photo de profil" />
                </div>
                <div className="profileList">
                  Spessoto
              </div>
                <div className="profileList">
                  Eva
              </div>
                <div className="profileList">
                  eva.spessoto@gmail.com
              </div>
                <div className="profileList">
                  Graphiste/Développeuse
              </div>
                <div className="profileList">
                  01 23 45 67 89
              </div>
                <div className="profileList">
                  PhotoShop / Indesign / Illustrator / JavaScript / React / NodeJS
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
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Commentaire = (props) => (
  <div style={{ width: '93%' }}>
    <Container>
      <Row>
        <Col xs="1">
        <img className="rounded-circle" src="https://66.media.tumblr.com/avatar_9cc8b64575a4_512.pnj" style={{width: '120%'}} alt="Photo de profil" />
        </Col>
        <Col xs="11">
          <p>{props.commentaire.nom}</p>
          <p style={{ backgroundColor: 'white', borderRadius: '5px', padding: '10px' }}>{props.commentaire.comment}</p>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Commentaire;
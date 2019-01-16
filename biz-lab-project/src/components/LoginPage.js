import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md='6'>
              <Button color="danger"><Link to="/home">SE CONNECTER</Link></Button>
            </Col>
            <Col md='6'>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginPage;

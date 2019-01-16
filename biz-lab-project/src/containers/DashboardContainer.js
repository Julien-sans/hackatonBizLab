import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjetMonitoring from '../components/Dashboard/ProjectMonitoring';

class DashboardContainer extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Mes projets</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjetMonitoring />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DashboardContainer;
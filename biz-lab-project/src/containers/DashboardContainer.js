import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjetMonitoring from '../components/Dashboard/ProjectMonitoring';
import  styled  from 'styled-components';
import '../styles/projectMonitoring.scss';

const Title = styled.h2`
  font-family: Helvetica;
  font-weight: 900;
`;


class DashboardContainer extends Component {
  render() {
    return (
      <Container id="project-monitoring">
        <Row>
          <Col>
            <Title>Mes projets</Title> 
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
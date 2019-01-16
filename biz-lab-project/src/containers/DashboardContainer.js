import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjetMonitoring from '../components/Dashboard/ProjectMonitoring';
import  styled  from 'styled-components';
import '../styles/projectMonitoring.scss';

const Title = styled.h1`
  font-family: Helvetica;
  font-weight: 900;
`;
class DashboardContainer extends Component {
  render() {
    return (
      <Container fluid >
        <Row className="text-center mt-5">
          <Col>
            <Title>Mon Dashboard</Title>
          </Col>
        </Row>
       
        <Row id="project-monitoring">
          <Col>
            <ProjetMonitoring />
          </Col>
        </Row>

        <Row>
          <Col>
          
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DashboardContainer;
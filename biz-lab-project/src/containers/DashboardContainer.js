import React, { Component } from 'react';
import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import ProjetMonitoring from '../components/Dashboard/ProjectMonitoring';
import DashboardGraphics from '../components/Dashboard/Graphics/DashboardGraphics';
import styled from 'styled-components';
import classnames from 'classnames';
import '../styles/projectMonitoring.scss';

const Title = styled.h1`
  font-family: Helvetica;
  font-weight: 900;
`;

class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
        <Container className="mb-5">
          <Row className="text-center mt-5">
            <Col>
              <Title>Mon Dashboard</Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                    style={{color: 'black'}}
                  >

                      Mon activité
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}
                      style={{color: 'black'}}
                    >
                      Mes projets
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1" className="mt-5">
              <Row>
                <Col>
                  <DashboardGraphics />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2" className="mt-5">
              <Row>
                <Col>
                  <ProjetMonitoring />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
    );
  }
}

export default DashboardContainer;
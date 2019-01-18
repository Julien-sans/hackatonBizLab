import React, { Component } from 'react';
import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import ProjetMonitoring from '../components/Dashboard/ProjectMonitoring';
import DashboardGraphics from '../components/Dashboard/Graphics/DashboardGraphics';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Aside from '../components/Aside'
import classnames from 'classnames';
import '../styles/projectMonitoring.scss';
import '../styles/fil.scss';
import '../styles/dashboard.css';
import { Link } from 'react-router-dom';

const Title = styled.h1`
font-family: Helvetica;
font-weight: 900;
`;

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'vuedensemble'
    };
  }

  componentDidUpdate() {
    const hash = this.props.location.hash.substr(1)
    if (hash !== this.state.activeTab) {
      this.setState({ activeTab: hash })
    }
  }


  render() {
    const { expanded } = this.props;
    const className = expanded ? 'fil' : 'fil fil--expanded'
    return (
      <div className={className} class="fil">
        <Aside />
        <Container className="mb-5">
          <Row className="text-center mt-5">
            <Col>
              <Title>Mon Dashboard</Title>
              <Link to="/profile" className="backToProfile">Voir mon profil</Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.props.history.push('#vuedensemble'); }}
                    style={{ color: 'black', cursor: 'pointer' }}
                  >
                    <div id="vuedensemble">
                      Vue d'ensemble
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.props.history.push('#mesprojets') }}
                    style={{ color: 'black', cursor: 'pointer' }}
                  >
                    <div id="mesprojets">
                      Mes projets
                    </div>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="vuedensemble" className="mt-5">
              <Row>
                <Col>
                  <DashboardGraphics />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="mesprojets" className="mt-5">
              <Row>
                <Col>
                  <ProjetMonitoring />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expanded: state.aside.expanded
  }
};

export default connect(mapStateToProps)(DashboardContainer);

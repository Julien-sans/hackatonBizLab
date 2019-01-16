import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/home.scss';
import Menu from '../components/Menu';

class Aside extends Component {
  render() {
    return (
      <div>
        <div className={this.props.expanded ? "sidebar sidebar--expanded" : "sidebar"} onClick={this.props.toggleSidebar} >
          <Container>
            <Row>
              <Col>
              <Menu />
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Aside;
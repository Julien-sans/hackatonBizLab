import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/home.scss';
import Menu from '../components/Menu';
import { toggleSidebar } from '../actions/aside';
import { connect } from 'react-redux';

class Aside extends Component {
  render() {
    const { toggleSidebar, expanded } = this.props;
    return (
      <div>
        <div className={expanded ? "sidebar sidebar--expanded" : "sidebar"} >
          <Container>
            <Row>
              <Col xs="9">
                <p className="titre ml-2 mt-2">CROWD CRAFT</p>
              </Col>
              <Col xs="3" onClick={toggleSidebar}>
                <i className="fas fa-bars mt-4 ml-3"></i>
              </Col>
            </Row>
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

const mapStateToProps = state => ({
  expanded: state.aside.expanded
})

const mapDispatchToProps = {
  toggleSidebar
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Aside);
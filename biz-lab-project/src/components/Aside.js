import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/home.scss';
import Menu from '../components/Menu';
import { toggleSidebar } from '../actions/aside';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoCrowdCraft from '../images/crowdcraftlogo.png';

class Aside extends Component {
  render() {
    const { toggleSidebar, expanded } = this.props;
    return (
      <div>
        <div className={expanded ? "sidebar sidebar--expanded" : "sidebar"} >
          <Container>
            <Row>
              <Col xs="9">
                <Link to="home" style={{textDecoration: 'none'}}><img src={LogoCrowdCraft} className="w-100 pt-3 pb-3" alt="Logo Crowd Craft" /></Link>
              </Col>
              <Col xs="3" onClick={toggleSidebar}>
                {
                  expanded
                    ? <i style={{ cursor: 'pointer' }} className="fas fa-chevron-left mt-4 ml-3"></i>
                    : <i style={{ cursor: 'pointer' }} className="fas fa-chevron-right mt-4 ml-3"></i>
                }
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
            <Row className="footer mb-3">
              <Col xs="2">
                <ul>
                  <li style={{ cursor: 'pointer' }}><i className="fab fa-facebook-square fa-lg"></i></li>
                  <li style={{ cursor: 'pointer' }}><i className="fab fa-github-square fa-lg"></i></li>
                  <li style={{ cursor: 'pointer' }}><i className="fab fa-twitter-square fa-lg"></i></li>
                </ul>
              </Col>
              <Col xs="10" className="d-flex align-items-end mb-3">
                <span>Made with ❤ by <br />Eva, Julien, Alexis, Nelson & Maitetxu</span>
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

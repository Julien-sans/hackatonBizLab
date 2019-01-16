import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/loginPage.css'

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md='4' className="px-0">
              <div className="aside d-flex flex-column align-items-center justify-content-center">
                <div>
                  <h1>WELCOME TO</h1>
                </div>
                <div>
                  <h2>CROWD CRAFT</h2>
                </div>
              </div>
            </Col>
            <Col md='8' className="px-0 d-flex flex-column justify-content-center align-items-center">
              <div className="interfaceConnect">
                <div className="mb-5 text-center">
                  <h2 className='titleLogin'>LOGIN TO CROWD CRAFT PLATFORM</h2>
                </div>
                <div class="input-group mb-4 w-100">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Email</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>

                <div class="input-group mb-4 w-100">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Password</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>

                <div className="d-flex flex-row mt-5">
                  <button type="button" className="btn btn-dark mr-4"><Link className='connectLink' to="/home">SE CONNECTER</Link></button>
                  <div>If you are a new user: SignUp Here</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginPage;

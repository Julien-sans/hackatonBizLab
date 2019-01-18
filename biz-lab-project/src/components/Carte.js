import React, { Component } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import '../styles/carte.scss';

class Carte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: 'John Doe',
      commentaires: []
    }
  }

  render() {
    return (
      <div>
        <Card className="my-5">
          <CardBody>
            <CardTitle className="titre">{this.props.project.name.toUpperCase()}</CardTitle>
            <CardSubtitle className="textMini">{this.props.project.type}</CardSubtitle>
            <div className="text-center mt-3">
              {this.props.project.competences && this.props.project.competences.split(', ').map(competence =>
                <Button color="secondary" size="sm" className="mx-1 my-1" style={{ cursor: 'inherit' }}>{competence}</Button>
              )}
            </div>
            <CardText className="text mt-4 mx-5">{this.props.project.description}</CardText>
            <CardText className="text mt-2 mx-5"><u>Team :</u> {this.props.project.equipe}</CardText>
            <CardText className="text mt-3 mx-5">{this.props.project.github}</CardText>
          </CardBody>
          <Form>
            <FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Carte;
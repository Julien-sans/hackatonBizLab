import React, { Component } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, CardFooter
} from 'reactstrap';
import '../styles/carte.scss';
import Commentaire from './Commentaire';

class Carte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: 'Eva Spessoto',
      comment: '',
      commentaires: []
    }
  }


  componentDidMount () {
    const key = `commentaire-${this.props.project.id}`;
    const com = JSON.parse(localStorage.getItem(key))
    if(com) {
      this.setState({commentaires: com})
    }
  }

  updateFile = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { nom, comment } = this.state
    const commentaires = [...this.state.commentaires, { nom: nom, comment: comment }]
    this.setState({ commentaires })
    const key = `commentaire-${this.props.project.id}`;
    localStorage.setItem(key, JSON.stringify(commentaires))
  }

  render() {
    const { commentaires } = this.state;
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
          <CardFooter className="text-muted">
            {commentaires && commentaires.map(commentaire =>
              <Commentaire commentaire={commentaire} />
            )}
          </CardFooter>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <FormGroup>
                <Label for="comment" className="text" style={{ marginLeft: '10%' }}>Laisser un commentaire</Label>
                <Input
                  type="textarea"
                  name="comment"
                  id="comment"
                  style={{ width: '80%', textAlign: 'left' }}
                  onChange={this.updateFile}
                />
              </FormGroup>
            </FormGroup>
            <div className="d-flex justify-content-end">
              <Button style={{ width: '12%', marginRight: '10%' }} className="text">Publier</Button>
            </div>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Carte;

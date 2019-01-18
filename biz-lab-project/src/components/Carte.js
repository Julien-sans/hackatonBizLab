import React, { Component } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../styles/carte.scss';

import { ToastContainer, ToastStore } from 'react-toasts';

class Carte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: 'John Doe',
      commentaires : [],
      bgColor: ""
    }
  }

  onClickButton = (event) => {
    ToastStore.success("Projet ajouté avec succès !")
    this.setState({
      bgColor: "green"
    })
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
            <CardText
            className="text d-flex justify-content-end">
              <Button
                style={{
                  backgroundColor: 'white',
                  color: 'grey'
                }}>Récupération des outils de travail
              </Button>
              <Button
                onClick={this.onClickButton} className="my-4" type="submit"
                className="d-flex ml-3 justify-content-start"
                style={{
                  backgroundColor: this.state.bgColor,
                  color: 'black'
                }}>Je suis intéressé !
              </Button>
            </CardText>
            <ToastContainer
              store={ToastStore}
              position={ToastContainer.POSITION.BOTTOM_RIGHT}
            />
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Carte;
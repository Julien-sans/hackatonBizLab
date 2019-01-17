import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Carte = ( props ) => (
  <div>
    <Card className="my-5">
      <CardBody>
        <CardTitle>{props.project.name}</CardTitle>
        <CardSubtitle>{props.project.type}</CardSubtitle>
        <CardText>{props.project.description}, {props.project.competences}</CardText>
      </CardBody>
    </Card>
  </div>
)


export default Carte;
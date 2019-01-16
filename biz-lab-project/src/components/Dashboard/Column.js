import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Container = styled.div`
  margin: 15px 20px 20px 0px;
  border-radius: 2px;
  background-color: lightgrey;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 10px 0px 0px 20px;
  font-family: Helvetica;
  font-weight: 900;
  font-size: 1.2em;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: grey;
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id} >
        {
          (provided, snapshot) => (
            <TaskList
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )
        }
        </Droppable>
      </Container>
    )
  }
}


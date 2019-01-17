import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const SingleTask = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: ${(props => 
    props.isDragging ? 'lightgreen' : 'white'
  )}
  display: flex;
  font-family: Helvetica;
  font-weight: 600;
`;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {
          (provided, snapshot) => (
            <SingleTask
            {...provided.draggableProps}
            {...provided.dragHandleProps} 
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            >
              {this.props.task.content}
            </SingleTask>

        )}
      </Draggable>
    );
  }
}

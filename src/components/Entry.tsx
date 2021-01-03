import React, { Component } from 'react';
import './Entry.css';
import Label from './Label';
import { Draggable } from 'react-beautiful-dnd'

interface IProps {
  entry_id: number,
  index: number,
  title: string,
  participants?: string[],
  onClick?: () => void,
}

export default class Entry extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <Draggable draggableId={this.props.entry_id.toString()} index={this.props.index}>
        {(provided) => (
          <div className="Entry" onClick={this.props.onClick} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            <div className="Entry-title">{this.props.title}</div>
            <div className="Entry-participant-list">
              {
                this.props.participants && this.props.participants.map(participant => {
                  return <Label title={participant} key={"participant_" + participant} />;
                })
              }
            </div>
          </div>
        )}
      </Draggable>
    )
  }
}
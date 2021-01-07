import React, { Component } from 'react';
import './Entry.css';
import { Draggable } from 'react-beautiful-dnd'
import Chip from '@material-ui/core/Chip'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

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
          <Card className="Entry" onClick={this.props.onClick} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            <CardContent>
              <div className="Entry-title">{this.props.title}</div>
              <div className="Entry-participant-list">
                {
                  this.props.participants && this.props.participants.map(participant => {
                    return <Chip label={participant} color="primary" />;
                  })
                }
              </div>
            </CardContent>
          </Card>
        )}
      </Draggable>
    )
  }
}
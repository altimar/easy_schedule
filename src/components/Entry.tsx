import React from 'react';
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

export default function Entry(props:IProps) {
    return (
      <Draggable draggableId={props.entry_id.toString()} index={props.index}>
        {(provided) => (
          <Card className="Entry" onClick={props.onClick} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            <CardContent>
              <div className="Entry-title">{props.title}</div>
              <div className="Entry-participant-list">
                {
                  props.participants && props.participants.map(participant => {
                    return <Chip label={participant} color="primary" key={participant} />;
                  })
                }
              </div>
            </CardContent>
          </Card>
        )}
      </Draggable>
    )
}
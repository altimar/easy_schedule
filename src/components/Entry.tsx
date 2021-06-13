import React from 'react';
import './Entry.css';
import clsx from 'clsx';
import { Draggable } from 'react-beautiful-dnd'
import Chip from '@material-ui/core/Chip'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

interface IProps {
  entry_id: number,
  index: number,
  title: string,
  participants?: string[],
  bad_participants?: string[],
  expanded: boolean,
  onClick?: () => void,
  onCollapseExpand?: () => void,
}

export default function Entry(props: IProps) {
  let bad_participants: { [id: string]: boolean } = {};
  let style = {};
  if (props.bad_participants && props.bad_participants.length) {
    props.bad_participants.forEach((item: string) => { bad_participants[item] = true })
    style = { backgroundColor: "#fdd" };
  }
  const handleExpandClick = (e:React.MouseEvent) => {
    e.stopPropagation();
    props.onCollapseExpand && props.onCollapseExpand()
  };
  return (
    <Draggable draggableId={props.entry_id.toString()} index={props.index}>
      {(provided) => (
        <Card className="Entry" onClick={props.onClick} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <CardContent style={style}>
            <div className="Entry-title">
            <IconButton
            className={clsx('Entry-expand', {
              'Entry-expandOpen': props.expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={props.expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>{props.title}</div>
            <Collapse in={props.expanded} timeout="auto" unmountOnExit>
              <div className="Entry-participant-list">
              {
                props.participants && props.participants.map(participant => {
                  const color = bad_participants[participant] ? "secondary" : "primary";
                  return <Chip label={participant} color={color} key={participant} />;
                })
              }
              </div>
            </Collapse>
          </CardContent>
        </Card>
      )}
    </Draggable>
  )
}
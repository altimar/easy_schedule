import React from 'react';
import './EntryList.css';
import Entry from './Entry'
import { EntryType } from '../store/types'
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd'

interface IProps {
  entries: EntryType[],
  onSelect?: (id: number) => void,
  onRearrange?: (id: number, index: number) => void
}

export default function EntryList(props:IProps) {
  function onDragEnd(result: DropResult) {
    const {destination, source, draggableId} = result; 
    if (!destination || !props.onRearrange) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    props.onRearrange(+draggableId, destination.index)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="1">
        {provided => (
          <div
            className="EntryList"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {
              props.entries && props.entries.map((entry, index) => {
                return <Entry
                  entry_id={entry.id}
                  index = {index}
                  title={entry.title}
                  key={"entry_" + entry.title}
                  participants={entry.participants}
                  onClick={() => props.onSelect && props.onSelect(entry.id)}
                />;
              })
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
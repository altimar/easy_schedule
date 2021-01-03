import React, { Component } from 'react';
import './EntryList.css';
import Entry from './Entry'
import { EntryType } from '../store/types'
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd'

interface IProps {
  entries: EntryType[],
  onSelect?: (id: number) => void,
  onRearrange?: (id: number, index: number) => void
}

export default class EntryList extends Component<IProps> {
  onDragEnd = (result: DropResult) => {
    const {destination, source, draggableId} = result; 
    if (!destination || !this.props.onRearrange) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    this.props.onRearrange(+draggableId, destination.index)
  }
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="1">
          {provided => (
            <div
              className="EntryList"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {
                this.props.entries && this.props.entries.map((entry, index) => {
                  return <Entry
                    entry_id={entry.id}
                    index = {index}
                    title={entry.title}
                    key={"entry_" + entry.title}
                    participants={entry.participants}
                    onClick={() => this.props.onSelect && this.props.onSelect(entry.id)}
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
}
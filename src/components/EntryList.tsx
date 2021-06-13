import React from 'react';
import './EntryList.css';
import Entry from './Entry'
import { EntryType } from '../store/types'
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd'

interface IProps {
  entries: EntryType[],
  onSelect?: (id: number) => void,
  onCollapseExpand?: (entry: EntryType) => void,
  onRearrange?: (id: number, index: number) => void
}

function BadParticipantsForEntries(entries: EntryType[]): string[][] {
  let prevEntry: EntryType | undefined = undefined;
  let result: string[][] = [];
  entries.forEach((entry: EntryType) => {
    result.push([]);
    if (prevEntry) {
      entry.participants.forEach((participant) => {
        if (prevEntry && prevEntry.participants.indexOf(participant) !== -1) {
          result[result.length - 1].push(participant);
          result[result.length - 2].push(participant);
        }
      })
    }
    prevEntry = entry;
  });
  return result;
}

export default function EntryList(props: IProps) {
  function onDragEnd(result: DropResult) {
    const { destination, source, draggableId } = result;
    if (!destination || !props.onRearrange) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    props.onRearrange(+draggableId, destination.index)
  }

  const bad_participants = BadParticipantsForEntries(props.entries);

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
                  index={index}
                  title={entry.title}
                  key={"entry_" + entry.title}
                  participants={entry.participants}
                  bad_participants={bad_participants[index]}
                  expanded={entry.expanded}
                  onClick={() => props.onSelect && props.onSelect(entry.id)}
                  onCollapseExpand={() => props.onCollapseExpand && props.onCollapseExpand(entry)}
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
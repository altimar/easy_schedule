import React, { Component } from 'react';
import './EntryList.css';
import Entry from './Entry'
import { EntryType } from '../store/types'

interface IProps {
  entries: EntryType[],
  onSelect?: (id: number) => void,
}

export default class EntryList extends Component<IProps> {
  render() {
    return (
      <div className="EntryList">
        {
          this.props.entries && this.props.entries.map(entry => {
            return <Entry
              title={entry.title}
              key={"entry_" + entry.title}
              participants={entry.participants}
              onClick={() => this.props.onSelect && this.props.onSelect(entry.id)}
            />;
          })
        }
      </div>
    )
  }
}
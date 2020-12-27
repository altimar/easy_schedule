import React, {Component} from 'react';
import './EntryList.css';
import {Entry, EntryProps} from './Entry';

export type EntryListProps = {
  entries: EntryProps[]
}

export class EntryList extends Component<EntryListProps> {
  constructor(props: EntryListProps) {
    super(props)
  }

  render() {
    return (
      <div className="EntryList">
        {
          this.props.entries && this.props.entries.map(entry => {
            return <Entry title={entry.title} key={"entry_"+entry.title} participants={entry.participants}/>;
          })
        }
      </div>
    )
  }
}
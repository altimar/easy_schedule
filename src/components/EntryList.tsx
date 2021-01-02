import React, { Component } from 'react';
import './EntryList.css';
import Entry from './Entry'
import { EntryType } from '../store/types'

type Props = {
  entries: EntryType[]
}

export default class EntryList extends Component<Props> {
  render() {
    return (
      <div className="EntryList">
        {
          this.props.entries && this.props.entries.map(entry => {
            return <Entry title={entry.title} key={"entry_" + entry.title} participants={entry.participants} />;
          })
        }
      </div>
    )
  }
}
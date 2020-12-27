import React, {Component} from 'react';
import './Entry.css';
import {Participant} from './Participant';

export type EntryProps = {
  title: string,
  participants?: string[],
}

export class Entry extends Component<EntryProps> {
  constructor(props: EntryProps) {
    super(props)
  }

  render() {
    return (
      <div className="Entry">
        <div className="Entry-title">{this.props.title}</div>
        <div className="Entry-participant-list">
        {
          this.props.participants && this.props.participants.map(participant => {
            return <Participant name={participant} key={"participant_"+participant}/>;
          })
        }
        </div>
      </div>
    )
  }
}
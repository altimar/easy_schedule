import React, {Component} from 'react';
import './Entry.css';
import Label from './Label';

interface IProps {
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
      <div className="Entry" onClick={this.props.onClick}>
        <div className="Entry-title">{this.props.title}</div>
        <div className="Entry-participant-list">
        {
          this.props.participants && this.props.participants.map(participant => {
            return <Label title={participant} key={"participant_"+participant}/>;
          })
        }
        </div>
      </div>
    )
  }
}
import React, {Component} from 'react';
import './Participant.css';

type ParticipantProps = {
  name: String
}

export class Participant extends Component<ParticipantProps> {
  constructor(props: ParticipantProps) {
    super(props)
  }

  render() {
    return (
      <div className="Participant">
        {this.props.name}
      </div>
    )
  }
}
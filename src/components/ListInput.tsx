import React, { Component } from 'react';
import './ListInput.css';
import Label from './Label';

interface IListInputProps {
  values: string[];
  onChange?: (values: string[]) => void;
}

interface IListInputState {
  values: string[]
}

export default class ListInput extends Component<IListInputProps, IListInputState> {
  constructor(props: IListInputProps) {
    super(props)
    this.state = {
      values: Object.assign([], this.props.values)
    }
  }

  onParticipantEdit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    let value = (event.target as HTMLInputElement).value.trim();
    if (event.key === 'Enter' && value !== '') {
      let newValues = [...this.state.values, value];
      this.setState({ values: newValues });
      this.props.onChange && this.props.onChange(newValues);
      (event.target as HTMLInputElement).value = '';
    }
  }

  onParticipantClose = (index: number) => {
    let newValues = Object.assign([], this.state.values);
    newValues.splice(index, 1);
    this.setState({ values: newValues });
    this.props.onChange && this.props.onChange(newValues);
  }

  render() {
    return (
      <div className="ListInput">
        {
          this.state.values && this.state.values.map((value, index) => {
            return <Label
              title={value}
              key={"value_" + value}
              editable={true}
              onClose={() => this.onParticipantClose(index)}
            />;
          })
        }
        <input type="text" onKeyPress={this.onParticipantEdit} />
      </div>
    )
  }
}
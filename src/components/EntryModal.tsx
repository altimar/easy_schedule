import React, { Component, ChangeEvent } from 'react';
import './EntryModal.css';
import { EntryType } from '../store/types';
import ListInput from './ListInput';
import { isConstructorDeclaration } from 'typescript';
import { Console } from 'console';

type EntryModalProps = {
  entry?: EntryType,
  onCancel?: () => void,
  onSave?: (entry: EntryType) => void,
}

export default class EntryModal extends Component<EntryModalProps, EntryType> {
  constructor(props: EntryModalProps) {
    super(props)
    this.state = this.props.entry ? Object.assign({}, this.props.entry) : { id: 0, title: '', participants: [] };
  }

  onTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: event.target.value });
  }

  onParticipantsChange = (values: string[]) => {
    this.setState({ participants: values });
  }

  onCloseClick = () => {
    this.props.onCancel && this.props.onCancel();
  }

  render() {
    return (
      <div className="EntryModal">
        <div className="EntryModal-title">
          {
            this.state.id == 0 ? 'Добавить элемент' : 'Редактировать элемент'
          }
          <button className="EntryModal-close" onClick={this.onCloseClick}/>
        </div>
        <div className="EntryModal-body">
          <div className="EntryModal-row">
            <label>Название: </label><input type="text" value={this.state.title} onChange={this.onTitleChangeHandler} />
          </div>
          <div className="EntryModal-row">
            <label>Участники: </label><ListInput values={this.state.participants} onChange={this.onParticipantsChange}/>
          </div>
        </div>
      </div>
    )
  }
}
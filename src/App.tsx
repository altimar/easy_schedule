import React, { Component } from 'react';
import './App.css';
import EntryList from './components/EntryList';
import EntryModal from './components/EntryModal';
import { connect } from 'react-redux';
import { RootState, EntryListType, EntryType } from './store/types'

const mapStateToProps = (state: RootState) => ({
  schedule: state.schedule,
});

type Props = {
  schedule: EntryListType
}

interface IState {
  is_modal: boolean;
  schedule: EntryListType;
  edited_entry: EntryType;
}

function getEmptyEntry(): EntryType {
  return {
    id: 0,
    title: '',
    participants: [],
  }
}

class App extends Component<Props, IState> {

  constructor(props: Props) {
    super(props);

    this.state = {
      is_modal: false,
      schedule: { ...this.props.schedule },
      edited_entry: getEmptyEntry()
    };
  }

  onEntrySelect = (id: number) => {
    for (let i = 0; i < this.state.schedule.entries.length; i++) {
      if (this.state.schedule.entries[i].id === id) {
        this.setState({
          is_modal: true,
          edited_entry: { ...this.state.schedule.entries[i] },
        })
      }
    }
  }

  onModalCancel = () => {
    this.setState({ is_modal: false });
  }

  onModalSave = (entry: EntryType) => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Easy Schedule</h1>
        </header>
        <EntryList entries={this.state.schedule.entries} onSelect={this.onEntrySelect} />
        {
          this.state.is_modal &&
          <EntryModal key={this.state.edited_entry.id}
            entry={this.state.edited_entry}
            onCancel={this.onModalCancel}
            onSave={this.onModalSave}
          />
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(App);

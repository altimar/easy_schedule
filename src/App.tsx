import React, { Component } from 'react';
import './App.css';
import EntryList from './components/EntryList';
import EntryModal from './components/EntryModal';
import { connect, ConnectedProps } from 'react-redux';
import { RootState, EntryListType, EntryType } from './store/types'
import { addEntryAction, updateEntryAction, deleteEntryAction, rearrangeEntryAction } from './store/actions'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

const mapState = (state: RootState) => ({
  schedule: state.schedule,
});

const mapDispatch = {
  addEntry: addEntryAction,
  updateEntry: updateEntryAction,
  deleteEntry: deleteEntryAction,
  rearrangeEntry: rearrangeEntryAction,
}

const connector = connect(mapState, mapDispatch)

type Props = ConnectedProps<typeof connector>

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

  componentWillReceiveProps(newProps: Props): void {
    this.setState({
      schedule: { ...newProps.schedule },
    });
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
    if (entry.title.length > 0) {
      this.setState({ is_modal: false });
      if (entry.id === 0) {
        this.props.addEntry(entry);
      } else {
        this.props.updateEntry(entry);
      }
    }
  }

  onModalDelete = (entry: EntryType) => {
    this.setState({ is_modal: false });
    this.props.deleteEntry(entry);
  }

  onAddButtonClick = () => {
    this.setState({
      is_modal: true,
      edited_entry: getEmptyEntry(),
    });
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <header className="App-header">
          <h1>Easy Schedule</h1>
        </header>
        <Button variant="contained" color="primary" onClick={this.onAddButtonClick}>Add entry</Button>
        <EntryList
          entries={this.state.schedule.entries}
          onSelect={this.onEntrySelect}
          onRearrange={this.props.rearrangeEntry}
        />
        <EntryModal key={this.state.edited_entry.id}
          open={this.state.is_modal}
          entry={this.state.edited_entry}
          onCancel={this.onModalCancel}
          onSave={this.onModalSave}
          onDelete={this.onModalDelete}
        />
      </div>
    );
  }
}

export default connector(App);

import React, { useState } from 'react';
import './App.css';
import EntryList from './components/EntryList';
import EntryModal from './components/EntryModal';
import { connect, ConnectedProps } from 'react-redux';
import { RootState, EntryType } from './store/types'
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

function getEmptyEntry(): EntryType {
  return {
    id: 0,
    title: '',
    participants: [],
  }
}

function App(props: Props) {
  const [state, setState] = useState({
    is_modal: false,
    schedule: { ...props.schedule },
    edited_entry: getEmptyEntry()
  });

  function onEntrySelect(id: number) {
    for (let i = 0; i < state.schedule.entries.length; i++) {
      if (state.schedule.entries[i].id === id) {
        setState({
          ...state,
          is_modal: true,
          edited_entry: { ...state.schedule.entries[i] },
        })
      }
    }
  }

  function onModalCancel() {
    setState({ ...state, is_modal: false });
  }

  function onModalSave(entry: EntryType) {
    if (entry.title.length > 0) {
      setState({
        ...state,
        is_modal: false
      });
      if (entry.id === 0) {
        props.addEntry(entry);
      } else {
        props.updateEntry(entry);
      }
    }
  }

  function onModalDelete(entry: EntryType) {
    setState({
      ...state,
      is_modal: false
    });
    props.deleteEntry(entry);
  }

  function onAddButtonClick() {
    setState({
      ...state,
      is_modal: true,
      edited_entry: getEmptyEntry(),
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Easy Schedule</h1>
      </header>
      <Button variant="contained" color="primary" onClick={onAddButtonClick}>Add entry</Button>
      <EntryList
        entries={state.schedule.entries}
        onSelect={onEntrySelect}
        onRearrange={props.rearrangeEntry}
      />
      <EntryModal key={state.edited_entry.id}
        open={state.is_modal}
        entry={state.edited_entry}
        onCancel={onModalCancel}
        onSave={onModalSave}
        onDelete={onModalDelete}
      />
      <CssBaseline />
    </div>
  );
}

export default connector(App);

import React, { useState, useEffect } from 'react';
import './App.css';
import EntryList from './components/EntryList';
import EntryModal from './components/EntryModal';
import NewProject from './components/NewProject';
import { Modal } from './components/Modal';
import { connect, ConnectedProps } from 'react-redux';
import { RootState, EntryType, ProjectType, MODAL_EDIT_NAME, MODAL_NEW_PROJECT_NAME, MODAL_VOID_NAME } from './store/types'
import { collapseExpandEntryAction, addEntryAction, updateEntryAction, deleteEntryAction, rearrangeEntryAction, newProjectAction } from './store/actions'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createTheme();

const mapState = (state: RootState) => ({
  schedule: state.schedule,
});

const mapDispatch = {
  addEntry: addEntryAction,
  updateEntry: updateEntryAction,
  deleteEntry: deleteEntryAction,
  rearrangeEntry: rearrangeEntryAction,
  newProject: newProjectAction,
  collapseExpandEntry: collapseExpandEntryAction,
}

const connector = connect(mapState, mapDispatch)

type Props = ConnectedProps<typeof connector>

function getEmptyEntry(): EntryType {
  return {
    id: 0,
    title: '',
    participants: [],
    expanded: true,
  }
}

function App(props: Props) {
  const [state, setState] = useState({
    modal: MODAL_VOID_NAME,
    schedule: { ...props.schedule },
    edited_entry: getEmptyEntry(),
  });

  useEffect(() => {
    setState({
      ...state,
      schedule: { ...props.schedule },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props])

  function onEntrySelect(id: number) {
    for (let i = 0; i < state.schedule.entries.length; i++) {
      if (state.schedule.entries[i].id === id) {
        setState({
          ...state,
          modal: MODAL_EDIT_NAME,
          edited_entry: { ...state.schedule.entries[i] },
        })
      }
    }
  }

  function onModalCancel() {
    setState({ ...state, modal: MODAL_VOID_NAME });
  }

  function onModalSave(entry: EntryType) {
    if (entry.title.length > 0) {
      setState({
        ...state,
        modal: MODAL_VOID_NAME,
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
      modal: MODAL_VOID_NAME
    });
    props.deleteEntry(entry);
  }

  function onAddButtonClick() {
    setState({
      ...state,
      modal: MODAL_EDIT_NAME,
      edited_entry: getEmptyEntry(),
    });
  }

  function onNewProjectButtonClick() {
    setState({
      ...state,
      modal: MODAL_NEW_PROJECT_NAME,
    });
  }

  function onNewProject(project_type: ProjectType) {
    setState({
      ...state,
      modal: MODAL_VOID_NAME
    });
    props.newProject(project_type);
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {
        state.schedule.title === "" ?
          <NewProject onOk={onNewProject} />
          :
          <>
            <header className="App-header">
              <h1>{state.schedule.title}</h1>
            </header>
            <Button variant="contained" color="primary" onClick={onAddButtonClick}>Add entry</Button>
            <EntryList
              entries={state.schedule.entries}
              onSelect={onEntrySelect}
              onRearrange={props.rearrangeEntry}
              onCollapseExpand={props.collapseExpandEntry}
            />
            <Button variant="contained" color="secondary" onClick={onNewProjectButtonClick}>New project</Button>
            <EntryModal key={state.edited_entry.id}
              open={state.modal === MODAL_EDIT_NAME}
              entry={state.edited_entry}
              onCancel={onModalCancel}
              onSave={onModalSave}
              onDelete={onModalDelete}
            />
            <Modal
              open={state.modal === MODAL_NEW_PROJECT_NAME}
              onCancel={onModalCancel}
              title='New Schedule'
            >
              <NewProject onOk={onNewProject} />
            </Modal>
          </>
      }
      <CssBaseline />
    </div>
    </ThemeProvider>
  );
}

export default connector(App);

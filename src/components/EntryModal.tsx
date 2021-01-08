import React, { useState, ChangeEvent } from 'react';
import { EntryType } from '../store/types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import ChipInput from 'material-ui-chip-input';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

type EntryModalProps = {
  open: boolean,
  entry?: EntryType,
  onCancel?: () => void,
  onSave?: (entry: EntryType) => void,
  onDelete?: (entry: EntryType) => void,
}

export default function EntryModal(props: EntryModalProps) {
  const initialState = props.entry ? Object.assign({}, props.entry) : { id: 0, title: '', participants: [] };
  const [state, setState] = useState(initialState);

  function onTitleChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, title: event.target.value });
  }

  function onParticipantsChange(values: string[]) {
    setState({ ...state, participants: values });
  }

  function onSaveClick() {
    props.onSave && props.onSave(state);
  }

  function onDeleteClick() {
    props.onDelete && props.onDelete(state);
  }

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open={props.open}
      fullScreen={fullScreen}
      onClose={props.onCancel}
    >
      <DialogTitle>
        {
          state.id === 0 ? 'Добавить элемент' : 'Редактировать элемент'
        }
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Название:"
          type="text"
          fullWidth
          value={state.title}
          onChange={onTitleChangeHandler}
        />
        <ChipInput
          label="Участники:"
          variant="outlined"
          margin="dense"
          fullWidth
          defaultValue={state.participants}
          onChange={onParticipantsChange}
        />
      </DialogContent>
      <DialogActions>
        {
          state.id !== 0 &&
          <Button onClick={onDeleteClick} color="secondary">
            Delete
          </Button>
        }
        <Button onClick={props.onCancel}>
          Close
        </Button>
        <Button onClick={onSaveClick}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
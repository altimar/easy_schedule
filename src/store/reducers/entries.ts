import {
  EntryListType,
  EntriesActionTypes,
  EntryType,
  ADD_ENTRY,
  UPDATE_ENTRY,
  DELETE_ENTRY,
  REARRANGE_ENTRY,
} from '../types';

const initialState: EntryListType = {
  entries: [],
}

export function entries(state = initialState, action: EntriesActionTypes) {
  switch (action.type) {
    case ADD_ENTRY:
      return {
        entries: [...state.entries, action.entry]
      }
    case UPDATE_ENTRY:
      let newState = {...state};
      for(let i = 0; i < newState.entries.length; i++) {
        if (newState.entries[i].id === action.entry.id) {
          newState.entries[i] = {...action.entry}
        }
      }
      return newState;
    case DELETE_ENTRY:
      state.entries = state.entries.filter((value) => value.id !== action.id );
      return {...state};
    case REARRANGE_ENTRY:
      let currentIndex = -1;
      let currentEntry: EntryType;
      for(let i = 0; i < state.entries.length; i++) {
        if (state.entries[i].id === action.id) {
          currentIndex = i;
          break;
        }
      }
      if (currentIndex === -1) {
        return state;
      }

      [currentEntry] = state.entries.splice(currentIndex, 1);
      state.entries.splice(action.index, 0, currentEntry);
      return {...state};
    default:
      return state
  }
}
import {
  EntryListType,
  EntriesActionTypes,
  ADD_ENTRY,
  UPDATE_ENTRY,
  DELETE_ENTRY
} from '../types';

const initialState: EntryListType = {
  entries: [],
}

export function entries(state = initialState, action: EntriesActionTypes) {
  switch (action.type) {
    case ADD_ENTRY:
    case UPDATE_ENTRY:
    case DELETE_ENTRY:
    default:
      return state
  }
}
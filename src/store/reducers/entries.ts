import {
  EntryListType,
  EntriesActionTypes,
  EntryType,
  ADD_ENTRY,
  UPDATE_ENTRY,
  DELETE_ENTRY,
  REARRANGE_ENTRY,
  ProjectType,
  DEMO_PROJECT_TYPE,
  EMPTY_PROJECT_TYPE,
  NEW_PROJECT,
  COLLAPSE_EXPAND_ENTRY,
} from '../types';

import data_generator from '../demo';

const initialState: EntryListType = {
  title: '',
  entries: [],
}

let project_counter: number = 1;

function newProject(project_type: ProjectType, project_counter: number): EntryListType {
  switch (project_type) {
    case DEMO_PROJECT_TYPE:
      return { ...data_generator(5, 2, 6), title: 'Demo schedule ' + project_counter.toString() };
    case EMPTY_PROJECT_TYPE:
    default:
      return {
        title: 'New schedule ' + project_counter.toString(),
        entries: [],
      };
  }
}

export function entries(state = initialState, action: EntriesActionTypes) {
  switch (action.type) {
    case COLLAPSE_EXPAND_ENTRY:
      state.entries = state.entries.map((value) => {
        if (value.id === action.entry.id) {
          value.expanded = !value.expanded
        }
        return value
      });
      return {...state};
    case NEW_PROJECT:
      return newProject(action.project_type, project_counter++);
    case ADD_ENTRY:
      let id = 0;
      state.entries.forEach((entry) => {
        if (entry.id > id) {
          id = entry.id
        }
      })
      action.entry.id = id + 1
      console.log(action.entry.id);
      return {
        entries: [...state.entries, action.entry]
      }
    case UPDATE_ENTRY:
      let newState = { ...state };
      for (let i = 0; i < newState.entries.length; i++) {
        if (newState.entries[i].id === action.entry.id) {
          newState.entries[i] = { ...action.entry }
        }
      }
      return newState;
    case DELETE_ENTRY:
      state.entries = state.entries.filter((value) => value.id !== action.id);
      return { ...state };
    case REARRANGE_ENTRY:
      let currentIndex = -1;
      let currentEntry: EntryType;
      for (let i = 0; i < state.entries.length; i++) {
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
      return { ...state };
    default:
      return state
  }
}
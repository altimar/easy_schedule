export const ADD_ENTRY = 'ADD_ENTRY';
export const UPDATE_ENTRY = 'UPDATE_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';

export interface EntryAddAction {
  type: typeof ADD_ENTRY
  entry: EntryType
}

export interface EntryUpdateAction {
  type: typeof UPDATE_ENTRY
  entry: EntryType
}

export interface EntryDeleteAction {
  type: typeof DELETE_ENTRY
  id: number
}

export type EntriesActionTypes = EntryAddAction | EntryUpdateAction | EntryDeleteAction;

export interface EntryType {
  id: number
  title: string
  participants: string[]
}

export interface EntryListType {
  entries: EntryType[],
}

export interface RootState {
  schedule: EntryListType
}
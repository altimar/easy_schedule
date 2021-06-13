export const ADD_ENTRY = 'ADD_ENTRY';
export const UPDATE_ENTRY = 'UPDATE_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';
export const REARRANGE_ENTRY = 'REARRANGE_ENTRY';
export const NEW_PROJECT = 'NEW_PROJECT';
export const COLLAPSE_EXPAND_ENTRY = 'COLLAPSE_EXPAND_ENTRY';

export const EMPTY_PROJECT_TYPE = 'EMPTY_PROJECT';
export const DEMO_PROJECT_TYPE = 'DEMO_PROJECT';
export type ProjectType = typeof EMPTY_PROJECT_TYPE | typeof DEMO_PROJECT_TYPE;

export const MODAL_VOID_NAME = '';
export const MODAL_NEW_PROJECT_NAME = 'NewProject';
export const MODAL_EDIT_NAME = 'Edit';
export type ModalType = typeof MODAL_NEW_PROJECT_NAME | typeof MODAL_EDIT_NAME | typeof MODAL_VOID_NAME;

export interface EntryCollapseExpandAction {
  type: typeof COLLAPSE_EXPAND_ENTRY
  entry: EntryType
}

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

export interface EntryRearrangeAction {
  type: typeof REARRANGE_ENTRY
  id: number
  index: number
}

export interface NewProjectEntryAction {
  type: typeof NEW_PROJECT,
  project_type: ProjectType,
}

export type EntriesActionTypes = EntryCollapseExpandAction | EntryAddAction | EntryUpdateAction | EntryDeleteAction | EntryRearrangeAction | NewProjectEntryAction;

export interface EntryType {
  id: number
  title: string
  participants: string[]
  expanded: boolean
}

export interface EntryListType {
  title: string,
  entries: EntryType[],
}

export interface RootState {
  schedule: EntryListType
}
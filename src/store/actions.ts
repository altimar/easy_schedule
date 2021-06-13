import {
  ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY, REARRANGE_ENTRY, NEW_PROJECT, COLLAPSE_EXPAND_ENTRY,
  EntryCollapseExpandAction, EntryAddAction, EntryUpdateAction, EntryDeleteAction, EntryRearrangeAction, NewProjectEntryAction,
  EntryType, ProjectType
} from './types';

export function collapseExpandEntryAction(entry: EntryType): EntryCollapseExpandAction {
  return {
    type: COLLAPSE_EXPAND_ENTRY,
    entry: entry,
  }
}

export function addEntryAction(entry: EntryType): EntryAddAction {
  return {
    type: ADD_ENTRY,
    entry: entry,
  }
}

export function updateEntryAction(entry: EntryType): EntryUpdateAction {
  return {
    type: UPDATE_ENTRY,
    entry: entry,
  }
}

export function deleteEntryAction(entry: EntryType): EntryDeleteAction {
  return {
    type: DELETE_ENTRY,
    id: entry.id,
  }
}

export function rearrangeEntryAction(id: number, index: number): EntryRearrangeAction {
  return {
    type: REARRANGE_ENTRY,
    id: id,
    index: index,
  }
}

export function newProjectAction(project_type: ProjectType): NewProjectEntryAction {
  return {
    type: NEW_PROJECT,
    project_type: project_type,
  }
}
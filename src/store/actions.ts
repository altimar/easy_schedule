import {
  ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY, REARRANGE_ENTRY,
  EntryAddAction, EntryUpdateAction, EntryDeleteAction, EntryRearrangeAction,
  EntryType,
} from './types';

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
const UPDATE_ITEM = 'UPDATE_ITEM'
import { List } from 'immutable'

export default function reducer(state = List(), action) {
  const { type, payload } = action

  switch (type) {
    case UPDATE_ITEM:
      return state.set(payload.itemIdx, payload.itemValue)

    default:
      return state
  }
}

export function updateItem(itemIdx, itemValue) {
  return {
    type: UPDATE_ITEM,
    payload: {
      itemIdx, itemValue
    }
  }
}

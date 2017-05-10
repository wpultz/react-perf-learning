import { Map, List } from 'immutable'

const initialState = Map({
  ts: null,
  activities: List()
})

export default function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    default:
      return state
  }
}

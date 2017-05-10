import { Map } from 'immutable'


const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY'
const NEW_ACTIVITY = 'NEW_ACTIVITY'


export default function reducer(state = Map(), action) {
  const { type, payload } = action

  switch (type) {
    case UPDATE_ACTIVITY:
      return state.mergeIn([payload.activityId], payload.activity)

    case NEW_ACTIVITY:
      return state.set(payload.activityId, payload.activity)

    default:
      return state
  }
}


export const updateActivity = (activityId, activity) => (
  { type: UPDATE_ACTIVITY, payload: { activityId, activity } }
)

export const newActivity = (activityId, activity) => (
  { type: NEW_ACTIVITY, payload: { activityId, activity } }
)

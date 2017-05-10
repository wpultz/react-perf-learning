import { Map } from 'immutable'


const UPDATE_USER = 'UPDATE_USER'


export default function reducer(state = Map(), action) {
  const { type, payload } = action

  switch (type) {
    case UPDATE_USER:
      return state.mergeIn([payload.userId], payload.user)

    default:
      return state
  }
}


export const updateUser = (userId, user) => (
  { type: UPDATE_USER, payload: { userId, user } }
)

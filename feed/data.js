import uuidV4 from 'uuid/v4'
import { fromJS } from 'immutable'

export default function getState() {
  const initialState = {
    activities: {},
    users: {},
    feed: {
      ts: null,
      activities: []
    }
  }

  for (let i = 0, len = 5000; i < len; i++) {
    const activityUuid = uuidV4()
    const authorId = i % 5

    initialState.activities[activityUuid] = {
      title: `Activity #${i}`,
      author: authorId
    }

    initialState.feed.activities.push(activityUuid)
  }

  initialState.users = fromJS({
    0: { name: 'Daniel' },
    1: { name: 'Dan' },
    2: { name: 'Danny' },
    3: { name: 'Dani' },
    4: { name: 'Danielle' }
  })
  initialState.activities = fromJS(initialState.activities)
  initialState.feed = fromJS(initialState.feed)

  return initialState
}

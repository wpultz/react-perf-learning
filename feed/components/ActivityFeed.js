import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Activity from './Activity'

class ActivityFeed extends PureComponent {
  render() {
    const { activities, users, feed } = this.props

    const feedActivities = feed.get('activities').map(activityId => {
      const activity = activities.get(activityId)
      const activityAuthorId = String(activity.get('author'))
      const userizedActivity = activity.set('author', users.get(activityAuthorId))

      return <Activity activity={ userizedActivity } />
    })

    return (
      <div>
        <h3>As of { new Date(feed.get('ts')).toString() }</h3>
        { feedActivities }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activities: state.activities,
    users: state.users,
    feed: state.feed
  }
}

export default connect(mapStateToProps)(ActivityFeed)

import React, { PureComponent } from 'react'

export default class Activity extends PureComponent {
  render() {
    const { activity } = this.props

    const author = activity.get('author')
    const title = activity.get('title')

    return (
      <div>
        <h2>{ title }</h2>
        <h4>By { author.get('name') }</h4>
      </div>
    )
  }
}

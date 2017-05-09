import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ListItemForm from './ListItemForm'

export default class ListItem extends PureComponent {
  static propTypes = {
    itemIdx: PropTypes.number,
    itemValue: PropTypes.string,
    updateItem: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.onFormUpdate = ::this.onFormUpdate
  }

  onFormUpdate(value) {
    const { itemIdx, updateItem } = this.props

    updateItem(itemIdx, value)
  }

  // componentWillReceiveProps(nextProps) {
    // console.log(nextProps.itemIdx === this.props.itemIdx, nextProps.itemValue === this.props.itemValue, nextProps.updateItem === this.props.updateItem)
  // }

  // shouldComponentUpdate(nextProps) {
  //   return nextProps.value !== this.props.value
  // }

  render() {
    const { itemIdx, itemValue } = this.props

    return (
      <div>
        List Item #{ itemIdx }
        <br />
        <ListItemForm fieldValue={ itemValue } updateValue={ this.onFormUpdate } />
      </div>
    )
  }
}

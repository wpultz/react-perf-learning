import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateItem } from '../modules/list'

import ListItem from './ListItem'

class ItemList extends Component {
  static propTypes = {
    items: PropTypes.object
  }

  render() {
    const { items, updateItem } = this.props

    const listItems = items.map((item, i) =>
      <ListItem key={ i } itemIdx={ i } itemValue={ item } updateItem={ updateItem } />
    )

    return (
      <div>
        { listItems }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state
})

const dispatchableActions = {
  updateItem
}

export default connect(mapStateToProps, dispatchableActions)(ItemList)

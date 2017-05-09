import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class ListItemForm extends PureComponent {
  static propTypes = {
    fieldValue: PropTypes.string,
    updateValue: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = { fieldVal: props.fieldValue }

    this.handleFieldChange = ::this.handleFieldChange
    this.handleSubmit = ::this.handleSubmit
  }

  handleFieldChange(e) {
    this.setState({ fieldVal: e.target.value })
  }

  handleSubmit(e) {
    this.props.updateValue(this.state.fieldVal)
  }

  render() {
    const { fieldValue } = this.state
    return (
      <div>
        <input type="text" value={ fieldValue } onChange={ this.handleFieldChange } />
        <button type="button" onClick={ this.handleSubmit }>Update</button>
      </div>
    )
  }
}

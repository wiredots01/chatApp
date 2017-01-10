import _ from 'underscore'
import React from 'react'

class Container extends React.Component {

  componentProps() {
    const { component } = this.props
    return _.pick(this.props, _.keys(component.propTypes))
  }

  renderLoading() {
    return (
      <div >
        Loading...
      </div>
    )
  }

  render() {
    const { component, subsReady } = this.props

    return (
      subsReady ?
        React.createElement(component, this.componentProps()) :
        this.renderLoading()
    )
  }
}

Container.propTypes = {
  component: React.PropTypes.any.isRequired,
  subsReady: React.PropTypes.bool.isRequired
}

Container.contextTypes = {
  currentUser: React.PropTypes.object
}

export default Container

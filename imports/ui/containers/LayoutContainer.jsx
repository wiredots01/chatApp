import React from 'react'

class LayoutContainer extends React.Component {

  getChildContext() {
    return {
      currentUser: this.props.currentUser
    }
  }

  renderLayout() {
    const { content } = this.props

    return (
      <div>
        {content}
      </div>
    )
  }

  renderLoading() {
    return (
      <div style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -50, marginLeft: -70 }}>
        <p>Loading Chat App...</p>
      </div>
    )
  }

  render() {
    const { appReady } = this.props

    return (
      appReady ?
        this.renderLayout() :
        this.renderLoading()
    )
  }
}

LayoutContainer.propTypes = {
  currentUser: React.PropTypes.object,
  content: React.PropTypes.element,
  appReady: React.PropTypes.bool
}

LayoutContainer.childContextTypes = {
  currentUser: React.PropTypes.object
}

export default LayoutContainer

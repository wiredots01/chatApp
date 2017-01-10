import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Subs } from '/imports/api/common'

import Container from '/imports/ui/containers/Container'
import Chats from '/imports/api/chats/chats'

class ChatContainer extends Container {

  renderChatNotFound() {
    return (
      <div>
        There are no chats yet
      </div>
    )
  }

  renderComponent() {
    const { component } = this.props
    return (
      <div>
        {React.createElement(component, this.componentProps())}
      </div>
    )
  }

  render() {
    const { subsReady, chats } = this.props
    return (
      subsReady ?
        this.renderComponent() :
        this.renderLoading()
    )
  }
}

export default createContainer(({ component, toId }) => {
  Subs.subscribe('singleChat', toId)
  const chats = Chats.find().fetch()
  return {
    component,
    subsReady: Subs.ready(),
    chats
  }
}, ChatContainer)

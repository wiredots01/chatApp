/* global Bert, saveAs, Blob */
import { Meteor } from 'meteor/meteor'
import React from 'react'

export default class ChatItem extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { chat } = this.props
    const author = chat.author().emails[0].address || ''
    const { currentUser } = this.context

    return (
      <div>
        <div className={(currentUser._id === chat.owner) ? 'from-content' : 'to-content'}>
          <div className={(currentUser._id === chat.owner) ? 'callout left' : 'callout right'}>{chat.msg}</div>
          <span>{ (currentUser._id === chat.owner) ? 'You' : author }</span>
        </div>
      </div>
    )
  }
}

ChatItem.propTypes = {
  chat: React.PropTypes.object
}

ChatItem.contextTypes = {
  currentUser: React.PropTypes.object
}


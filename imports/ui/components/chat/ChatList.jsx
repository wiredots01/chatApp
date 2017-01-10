import { FlowRouter } from 'meteor/kadira:flow-router'
import { $ } from 'meteor/jquery';
import React from 'react'
import ChatForm from './ChatForm.jsx'
import ChatItem from './ChatItem.jsx'
class ChatList extends React.Component {

  constructor(props) {
    super(props)

  }


  gotoBottom(){
    $('.chat-wrapper').animate({ scrollTop: $('.chat-wrapper')[0].scrollHeight}, 1000);
  }

  componentDidMount() {
    this.gotoBottom()
  }

  render() {
    const { toId, chats } = this.props
    return (
      <div >
        <div className="chat-wrapper">
        { chats && chats.map((chat) => (
          <ChatItem chat={chat} key={chat._id}/>
        ))}
        </div>
        <ChatForm toId={toId} gotoBottom={this.gotoBottom} />
      </div>
    )
  }
}

ChatList.propTypes = {
  toId: React.PropTypes.string,
  chats: React.PropTypes.array
}

ChatList.contextTypes = {
  currentUser: React.PropTypes.object
}

export default ChatList

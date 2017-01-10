import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import s from 'underscore.string'

import { Chat } from './schema'

class ChatsCollection extends Mongo.Collection {

}

const Chats = new ChatsCollection('chats')

Chats.attachSchema(Chat)

Chats.helpers({
  author() {
    return Meteor.users.findOne(this.owner)
  }
})

export default Chats

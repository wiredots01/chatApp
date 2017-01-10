import { Meteor } from 'meteor/meteor'
import { check, Match } from 'meteor/check'
import { _ } from 'meteor/underscore'
import { Roles } from 'meteor/alanning:roles'
import Chats from '../chats'

Meteor.methods({
  addChatMessage(msg, toId) {
    check(msg, String)
    check(toId, String)
    const fromId = this.userId
    return Chats.insert({msg, toId, fromId})
  }

})

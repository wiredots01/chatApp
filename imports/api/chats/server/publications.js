/* eslint prefer-arrow-callback: 0 */
import { Meteor } from 'meteor/meteor'
import { check, Match } from 'meteor/check'
import { _ } from 'meteor/underscore'
import { Roles } from 'meteor/alanning:roles'

import Chats from '../chats'


Meteor.publishComposite('singleChat', function singleChat(toId) {
  check(toId, String)
  const fromId = this.userId
  return {
    find() {
      return Chats.find({$or: [{fromId, toId}, {toId: fromId, fromId: toId}]})
    },
    children: [
      {
        find(chat) {
          return Meteor.users.find({ _id: chat.owner }, {
            fields: Meteor.users.publicFields
          })
        }
      }
    ]
  }
})

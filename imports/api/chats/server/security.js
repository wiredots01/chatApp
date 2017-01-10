import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'
import { _ } from 'meteor/underscore'

import Chats from '../chats'

Chats.allow({
  insert(userId, doc) {
    return doc.owner === userId || Roles.userIsInRole(userId, ['admin'])
  },
  update(userId, doc, fields, modifier) {
    return doc.owner === userId || Roles.userIsInRole(userId, ['admin'])
  },
  remove(userId, doc) {
    return doc.owner === userId || Roles.userIsInRole(userId, ['admin'])
  }
})

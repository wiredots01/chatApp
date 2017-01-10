import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'
import { _ } from 'meteor/underscore'

Meteor.users.allow({
  insert(userId, doc) {
    return Roles.userIsInRole(userId, ['admin'])
  },
  update(userId, doc, fields, modifier) {
    return (doc._id === userId && _.without(fields, 'username', 'profile', 'analytics', 'avatar', 'hashEmail', 'updatedAt').length === 0) || Roles.userIsInRole(userId, ['admin'])
  },
  remove(userId, doc) {
    return Roles.userIsInRole(userId, ['admin'])
  }
})

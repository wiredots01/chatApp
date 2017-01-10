/* eslint prefer-arrow-callback: 0 */
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { _ } from 'meteor/underscore'
import { Roles } from 'meteor/alanning:roles'

Meteor.publishComposite('currentUser', function currentUser() {
  return {
    find() {
      return Meteor.users.find({
        _id: this.userId
      }, {
        fields: {
          profile: 1,
          avatar: 1,
          hashEmail: 1,
          settings: 1,
          roles: 1,
          createdAt: 1
        }
      })
    },
    children: [

    ]
  }
})

Meteor.publishComposite('userView', function userViewPub(userId) {
  check(userId, String)
  return {
    find() {
      return Meteor.users.find({ _id: userId }, {
        fields: {
          profile: 1,
          avatar: 1,
          hashEmail: 1,
          settings: 1,
          roles: 1,
          createdAt: 1
        }
      })
    }
  }
})

Meteor.publish('usersList', function usersList(selector = {}, options = {}) {
  check(selector, Object)
  check(options, Object)

  _.extend(selector, {
    emails: { $exists: true }
  })

  _.defaults(options, {
    sort: {
      createdAt: -1
    }
  })

  return Meteor.users.find(selector, options)
})





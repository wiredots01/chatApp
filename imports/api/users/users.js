import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'
import _ from 'underscore'

import { User } from './schema'

Meteor.users.attachSchema(User)

Meteor.users.helpers({
  name() {
    if (this.profile && this.profile.name) {
      return this.profile.name
    }
    return ''
  },
  displayName() {
    if (this.profile && this.profile.name) {
      return this.profile.name
    } else if (this.username) {
      return this.username
    } else if (this.emails && this.emails.length) {
      return this.emails[0].address
    }
    return ''
  },
  emailAddress() {
    if (this.emails && this.emails.length) {
      return this.emails[0].address
    } else if (this.services && this.services.facebook) {
      return this.services.facebook.email
    }
    return ''
  },
  getConCode(){
    return Meteor.userId() + this._id
  }
})

Meteor.users.publicFields = {
  username: 1,
  profile: 1,
  emails: 1
}


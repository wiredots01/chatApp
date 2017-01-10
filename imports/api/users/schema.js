import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import s from 'underscore.string'
import _ from 'underscore'

import { Timestampable } from '../common/schemas'

const UserProfile = new SimpleSchema({
  phone: {
    type: String,
    optional: true
  },
  name: {
    type: String,
    optional: true,
    autoValue() {
      const firstName = this.siblingField('firstName')
      const lastName = this.siblingField('lastName')
      if (!this.value && firstName.value && lastName.value) {
        return `${firstName.value} ${lastName.value}`
      }
    }
  },
  firstName: {
    type: String,
    optional: true,
    autoValue() {
      const name = this.siblingField('name')
      if (!this.value && name.value) {
        return s.words(name.value)[0]
      }
    }
  },
  lastName: {
    type: String,
    optional: true,
    autoValue() {
      const name = this.siblingField('name')
      if (!this.value && name.value) {
        return s.words(name.value).slice(1).join(' ')
      }
    }
  },
  dob: {
    type: Date,
    optional: true
  },

  address: {
    type: Object,
    optional: true
  },
  'address.city': {
    type: String,
    optional: true
  },
  'address.country': {
    type: String,
    optional: true
  },
  'address.line1': {
    type: String,
    optional: true
  },
  'address.line2': {
    type: String,
    optional: true
  },
  'address.state': {
    type: String,
    optional: true
  },
  'address.zip': {
    type: String,
    optional: true
  },
  'address.ip': {
    type: String,
    optional: true
  }

})


const User = new SimpleSchema([
  Timestampable,
  {
    profile: {
      type: UserProfile,
      optional: true
    },
    username: {
      type: String,
      optional: true,
      autoValue() {
        if (this.value && this.isSet) {
          return s.slugify(this.value)
        }
      }
    },
    emails: {
      type: [Object],
      optional: true
    },
    'emails.$.address': {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    },
    'emails.$.verified': {
      type: Boolean,
      optional: true,
      defaultValue: false
    },
    services: {
      type: Object,
      optional: true,
      blackbox: true
    },
    roles: {
      type: [String],
      optional: true
    }

  }
])

export {
  User
}

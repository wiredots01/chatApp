import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import _ from 'underscore'
import s from 'underscore.string'
import moment from 'moment'

/*
* Behavior Timestampable
*/
const Timestampable = new SimpleSchema({
  createdAt: {
    type: Date,
    autoValue() {
      if (this.isInsert) {
        return new Date()
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        }
      } else {
        this.unset()
      }
    }
  },
  updatedAt: {
    type: Date,
    optional: true,
    autoValue() {
      if (this.isUpdate) {
        return new Date()
      }
    }
  }
})


/*
* Behavior Ownerable
*/
const Owner = new SimpleSchema({
  owner: {
    type: String,
    autoValue() {
      if (this.isInsert && this.userId) {
        return this.userId
      } else if (Meteor.isClient && !Meteor.isTest) {
        this.unset()
      }
    }
  }
})



export {
  Timestampable,
  Owner
}

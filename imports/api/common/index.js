import {
  Timestampable,
  Owner,
} from './schemas'

if (Meteor.isClient) {
  import { AppSubs, Subs } from './subs'
}

export {
  Timestampable,
  Owner,
  AppSubs,
  Subs
}

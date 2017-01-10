import { SimpleSchema } from 'meteor/aldeed:simple-schema'

import { Timestampable, Owner } from '../common/schemas'

const Chat = new SimpleSchema([
  Owner, Timestampable,
  {
    msg: {
      type: String
    },
    fromId: {
      type: String
    },
    toId: {
      type: String
    }
  }
])

export {
  Chat
}

import { Meteor } from 'meteor/meteor'
import moment from 'moment'
import { FlowRouter } from 'meteor/kadira:flow-router'

import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import Users from '/imports/api/users/users'


class UsersList extends React.Component {
  render() {
    const { users } = this.props
    return (
      <div>
        <div className="user-list">
          { users && users.map((user) => (
            <div className="user-box" key={user._id}>
              <span></span>
              <a href={FlowRouter.path('singleChat', { toId: user._id })}>{user.email}</a>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

UsersList.propTypes = {
  users: React.PropTypes.array
}

UsersList.contextTypes = {
  currentUser: React.PropTypes.object
}

export default createContainer(() => {
  Meteor.subscribe('usersList')
  const users = Meteor.users.find({ '_id' : { $not : Meteor.userId() }})
  // const users = Meteor.users.find()
    .map((user) => ({
      _id: user._id,
      name: user.name(),
      email: user.emailAddress(),
      createdAt: moment(user.createdAt).format('MM/DD/YYYY'),
      conKey: user.getConCode()
    }))

  return {
    users: users
  }
}, UsersList)

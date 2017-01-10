/* global SessionStore */
/* eslint-disable no-underscore-dangle */
import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Roles } from 'meteor/alanning:roles'

import { AppSubs } from '/imports/api/common'

FlowRouter.routeRole = (routeName) => {
  const route = routeName ? FlowRouter._routesMap[routeName] : FlowRouter.current().route
  if (route) {
    return route.options.role || (route.group && route.group.options.role) || 'free'
  }
  return 'free'
}

const dataReady = () => (
  !Meteor.loggingIn() && AppSubs.ready() && Roles.subscription.ready()
)

const ensureUserLoggedIn = () => {
  if (!dataReady()) {
    Meteor.setTimeout(ensureUserLoggedIn, 100)
  }
  else {
    if (!Meteor.userId()) {
      FlowRouter.go('login')
    }
  }

}

const nonAuthenticated = () => {
  if (!dataReady()) {
    Meteor.setTimeout(nonAuthenticated, 100)
  } else if (Meteor.userId()) {
    FlowRouter.go('usersList')
  }
}

export {
  ensureUserLoggedIn,
  nonAuthenticated
}

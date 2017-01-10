import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'

import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { AppSubs } from '/imports/api/common'

import LayoutContainer from '../containers/LayoutContainer'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'


class UserLayout extends LayoutContainer {
  renderLayout() {
    const { content } = this.props
    return (
      <div className="main-wrapper">
        <Header />
        { content }
        <Footer />
      </div>
    )
  }
}

export default createContainer(() => {
  const appReady = !Meteor.loggingIn() && AppSubs.ready()

  return {
    currentUser: Meteor.user(),
    appReady
  }
}, UserLayout)

import React from 'react'
import { Meteor } from 'meteor/meteor'
import { AccountsTemplates } from 'meteor/useraccounts:core'
import { FlowRouter } from 'meteor/kadira:flow-router'

const Header = (props, context) => (
  <div className="header-wrapper">
    <div className="header-content"><h1><a href={FlowRouter.path('usersList')}>Chat app</a></h1></div>
    { Meteor.userId() ?
      (<div className="login-btn"><a href="#" className="login" onClick={() => AccountsTemplates.logout()}>Log out</a></div>) :
      (
        ''
      )
    }
  </div>
)

export default Header


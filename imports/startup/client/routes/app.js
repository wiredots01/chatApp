import React from 'react'
import { mount } from 'react-mounter'

import { FlowRouter } from 'meteor/kadira:flow-router'

import { PageLayout, UserLayout } from '/imports/ui/layouts/'

import HomePage from '/imports/ui/pages/HomePage.jsx'
import LoginPage from '/imports/ui/pages/LoginPage.jsx'
import UsersList from '/imports/ui/components/chat/UsersList.jsx'
import ChatList from '/imports/ui/components/chat/ChatList.jsx'

import NotFoundPage from '/imports/ui/pages/NotFoundPage.jsx'

import ChatContainer from '/imports/ui/containers/chat/ChatView.jsx'

import { nonAuthenticated, ensureUserLoggedIn } from './hooks'

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(PageLayout, {
      content: <HomePage />
    })
  }
})

FlowRouter.route('/login', {
  name: 'login',
  action() {
    mount(PageLayout, {
      content: <LoginPage />
    })
  },
  triggersEnter: [nonAuthenticated]
})

FlowRouter.route('/chat/:toId', {
  name: 'singleChat',
  action(params) {
    mount(UserLayout, {
      content: <ChatContainer component={ChatList} {...params} />
    })
  },
  triggersEnter: [ensureUserLoggedIn]
})

FlowRouter.route('/users', {
  name: 'usersList',
  action() {
    mount(UserLayout, {
      content: <UsersList />
    })
  },
  triggersEnter: [ensureUserLoggedIn]
})

FlowRouter.notfound = {
  action() {
    mount(NotFoundPage)
  }
}


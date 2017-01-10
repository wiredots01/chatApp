import { SubsManager } from 'meteor/meteorhacks:subs-manager'

const AppSubs = new SubsManager({
  cacheLimit: 10,
  expireIn: 60
})

AppSubs.subscribe('currentUser')

const Subs = new SubsManager({
  cacheLimit: 10,
  expireIn: 60
})

export {
  AppSubs,
  Subs
}

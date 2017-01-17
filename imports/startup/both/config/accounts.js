import { Meteor } from 'meteor/meteor'
import { AccountsTemplates } from 'meteor/useraccounts:core'
import { FlowRouter } from 'meteor/kadira:flow-router'

if (Meteor.isClient) {
  // import { eventSignIn, eventSignUp, eventSignOut } from '/imports/startup/client/config/analytics'
}

AccountsTemplates.configure({
  confirmPassword: false,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  overrideLoginErrors: true,
  sendVerificationEmail: false,
  lowercaseUsername: false,
  focusFirstInput: true,
  showAddRemoveServices: false,
  showForgotPasswordLink: true,
  showLabels: true,
  showPlaceholders: true,
  showResendVerificationEmailLink: false,
  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: true,
  privacyUrl: '/privacy-policy',
  termsUrl: '/terms-of-use',
  homeRoutePath: '/',
  redirectTimeout: 500,
  texts: {
    socialSignUp: 'Register',
    button: {
      signUp: 'Create Account',
      signIn: 'Sign in securely'
    },
    title: {
      signIn: 'Account sign in',
      signUp: 'Create Account',
      forgotPwd: 'Reset Password'
    },
    inputIcons: {
      isValidating: 'fa fa-spinner fa-spin',
      hasSuccess: 'fa fa-check',
      hasError: 'fa fa-times'
    }
  },
  onLogoutHook() {
    Meteor.isClient
    return FlowRouter.go('login')
  },
  onSubmitHook(err, state) {
    if (!err) {
      if (state === 'signIn') {
        Meteor.isClient
        FlowRouter.go('usersList')
      } else if (state === 'signUp') {
        Meteor.isClient
        FlowRouter.go('usersList')
      }
    }
  }
})

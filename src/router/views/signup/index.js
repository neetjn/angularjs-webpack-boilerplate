import controller from '@/router/views/signup/controller.js'

export default {
  name: 'signup',
  url: '/signup',
  controllerAs: 'signupCtrl',
  controller,
  template: require('angularjs-template-loader!@/router/views/signup/view.html')
}

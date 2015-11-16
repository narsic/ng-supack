'use strict';

require('./welcome.scss');

var name = module.exports = 'app.welcome';

angular
  .module(name, [])
  .config(configuration)
  .controller('Welcome', require('./welcome.controller'))
;

function configuration($stateProvider) {
  $stateProvider
    .state('Welcome', {
      url: '/welcome',
      template: require('./welcome.html'),
      controller: 'Welcome as vm',
      title: 'ng-Super Welcome'
    });

}

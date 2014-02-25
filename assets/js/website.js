var website = angular.module('website', [
  'ngRoute'
]);
 
website.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        })
        .when('/services', {
            templateUrl: 'partials/services.html',
            controller: 'ServicesCtrl'
        })
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'AboutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  }]);
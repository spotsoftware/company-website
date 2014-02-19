'use strict';

angular.module('website', [])
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../../it/partials/main.html',
            controller: 'MainCtrl'
        })
        .when('/services', {
            templateUrl: '../../it/partials/services.html',
            controller: 'ServicesCtrl'
        })
        .when('/portfolio', {
            templateUrl: '../../it/partials/portfolio.html',
            controller: 'PortfolioCtrl'
        })
        .when('/about', {
            templateUrl: '../../it/partials/about.html',
            controller: 'AboutCtrl'
        })
        .when('#contact', {
            //need to be fixed
        })
        .otherwise({
            redirectTo: '/'
        });
    
    $locationProvider.html5Mode(true);
});
'use strict';

angular.module('website')
    .controller('MainCtrl', function ($scope, $location) {
         
        $scope.initializeScrollAnimation = function () {
            new AnimOnScroll(document.getElementById( 'grid' ), {
                minDuration : 0.4,
                maxDuration : 0.7,
                viewportFactor : 0.2
            });
        };
        
        $scope.initializeScrollAnimation();
    });
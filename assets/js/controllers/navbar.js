'use strict'

angular.module('website')
    .controller('NavbarCtrl', function ($scope, $location, $anchorScroll) {
            
        $scope.items = [{
            'title': 'Home',
            'link': '#/main'
        }, {
            'title': 'Soluzioni',
            'link': '#/services'
        }, {
            'title': 'Chi Siamo',
            'link': '#/about'
        }];
        
        $scope.anchors = [{
            'title': 'Contatti',
            'hash': 'contact'
        }];
        
        $scope.anchorScroll = function (hash){
          // set the location.hash to the id of
          // the element you wish to scroll to.
          $location.hash(hash);

          // call $anchorScroll()
          $anchorScroll();
        };
        
        $scope.isShrinked = function () {
            return $location.path() !== '/';
        };
        
        $scope.isActive = function (route) {
            return route === $location.path();
        };        
        
        $scope.init = function () {
            var cbpAnimatedHeader = (function () {

                var docElem = document.documentElement,
                    header = document.querySelector('.cbp-af-header'),
                    didScroll = false,
                    changeHeaderOn = 50;

                function initialize() {
                    window.addEventListener('scroll', function (event) {
                        if (!didScroll) {
                            didScroll = true;
                            scrollPage();
                        }
                    }, false);
                };

                function scrollPage() {
                    if($location.path() === '/'){
                        var sy = scrollY();
                        if (sy >= changeHeaderOn) {
                            classie.add(header, 'cbp-af-header-shrink');
                        } else {
                            classie.remove(header, 'cbp-af-header-shrink');
                        }
                    }
                    didScroll = false;
                };

                function scrollY() {
                    return window.pageYOffset || docElem.scrollTop;
                };

                initialize();

            })();
        };
        
        $scope.init();
    });
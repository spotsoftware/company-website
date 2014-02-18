'use strict'

angular.module('website')
    .controller('NavbarCtrl', function ($scope, $location) {
            
        $scope.items = [{
            'title': 'Home',
            'link': '/'
        }, {
            'title': 'Services',
            'link': '/'
        }, {
            'title': 'Portfolio',
            'link': '/'
        }, {
            'title': 'About',
            'link': '/'
        }, {
            'title': 'Contact',
            'link': '/'
        }];
        
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
                    var sy = scrollY();
                    if (sy >= changeHeaderOn) {
                        classie.add(header, 'cbp-af-header-shrink');
                    } else {
                        classie.remove(header, 'cbp-af-header-shrink');
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
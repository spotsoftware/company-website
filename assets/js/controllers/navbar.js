'use strict'

angular.module('website')
    .controller('NavbarCtrl', function ($scope, $location) {
            
        $scope.items = [{
            'title': 'Home',
            'link': '/'
        }, {
            'title': 'Services',
            'link': '/services'
        }, {
            'title': 'Portfolio',
            'link': '/portfolio'
        }, {
            'title': 'About',
            'link': '/about'
        }, {
            'title': 'Contact',
            'link': '#contact'
        }];
        
        $scope.isActive = function (route) {
            return route === $location.path();
        };
        
//        $scope.fixHashedUrls = function () {
//            setTimeout(function () {
//                $('.cbp-af-header').find('a').each(function (index){
//                    var hasHashedUrl = this.href.indexOf('#') > -1;
//                    if(hasHashedUrl) {
//                        this.setAttribute('target', '_self');
//                    }
//                });
//            }, 200);
//        };
        
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
//        $scope.fixHashedUrls();
    });
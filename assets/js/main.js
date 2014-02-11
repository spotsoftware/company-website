;
(function () {

    // Menu settings
    $('#menuToggle, .menu-close').on('click', function () {
        $('#menuToggle').toggleClass('active');
        $('body').toggleClass('body-push-toleft');
        $('#theMenu').toggleClass('menu-open');
    });


    //Header Animated
    var cbpAnimatedHeader = (function () {

        var docElem = document.documentElement,
            header = document.querySelector('.cbp-af-header'),
            didScroll = false,
            changeHeaderOn = 300;

        function init() {
            window.addEventListener('scroll', function (event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 250);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                classie.add(header, 'cbp-af-header-shrink');
            } else {
                classie.remove(header, 'cbp-af-header-shrink');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();

    })();


})(jQuery)
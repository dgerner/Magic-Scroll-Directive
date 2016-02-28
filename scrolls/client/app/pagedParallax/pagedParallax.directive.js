'use strict';

angular.module('scrollsApp')
    .directive('pagedParallax', function() {
        return {
            templateUrl: 'app/pagedParallax/pagedParallax.html',
            restrict: 'EA',
            transclude: true,
            link: function(scope, element, attrs) {
                $(function() { // wait for document ready
                    // init
                    var controller = new ScrollMagic.Controller({
                        globalSceneOptions: {
                            triggerHook: 'onLeave'
                        }
                    });

                    // get all slides
                    var slides = document.querySelectorAll("section.panel");

                    // create scene for every slide
                    for (var i = 0; i < slides.length; i++) {
                        new ScrollMagic.Scene({
                                triggerElement: slides[i]
                            })
                            .setPin(slides[i])
                            //.addIndicators() // add indicators (requires plugin)
                            .addTo(controller);
                    }
                });
            }
        };
    });

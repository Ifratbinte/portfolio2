(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        //Testimonial Carousal
        $(".testimonial-list").owlCarousel({
            items: 1,
            autoplay: true,
            margin: 30,
            loop: true,
            dots: true,
            nav: false,
        });

        // Display the progress bar calling progressbar.js
        $('.progressbar1').progressBar({
            shadow : false,
            percentage : true,
            animation : true,
        });
        
        
        //Service Facts Counter
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

        /*test
        $(function(){
            $(window).scroll(function(){
                var aTop = $('.count').height();
                if($(this).scrollTop()>=aTop){
                    $('.count').each(function () {
                        $(this).prop('Counter',0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 4000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    });  
                }
            });
        }); */

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	
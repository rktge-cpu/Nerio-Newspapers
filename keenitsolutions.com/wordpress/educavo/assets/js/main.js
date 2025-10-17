(function($) {
    'use strict';

     // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 150) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }
    });

    // Counter Up
    var counter = $('.rs-count');
    if(counter.length) {  
        $('.rs-count').counterUp({
            delay: 20,
            time: 1500
        });
    }

    // Rellax Parallax Int
    var rellax = new Rellax('.rellax');

   $(function(){ 
        var navMain = $(".navbar-collapse"); // avoid dependency on #id
        // "a:not([data-toggle])" - to avoid issues caused
        // when you have dropdown inside navbar
        navMain.on("click", "a:not([data-toggle])", null, function () {
            navMain.collapse('hide');
        });
    });


   // onepage nav
   $(".navbar li").on("click", function () {
       if ($(".showhide").is(":visible")) {
           $(".showhide").trigger("click");
       }
   });
	
   if ($.fn.onePageNav) {
       $(".navbar").onePageNav({
           currentClass: "active"
       });
   }
  

  /*-------------------------------------
   Preloder Js here
   ---------------------------------------*/
  $(window).on('load', function() {
      $("#loader").delay(1000).fadeOut(500);
  })
	
	
  // wow init
  new WOW().init();

    // scrollTop init
        var win=$(window);
        var totop = $('#scrollUp');    
        win.on('scroll', function() {
            if (win.scrollTop() > 150) {
                totop.fadeIn();
            } else {
                totop.fadeOut();
            }
        });
        totop.on('click', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 500)
        });

	$(window).scroll(function(){
        if ($(window).scrollTop() >= 200) {
            $('.menu-area').addClass('fixed-header');
        }
        else {
            $('.menu-area').removeClass('fixed-header');
        }
    });


})(jQuery);

 
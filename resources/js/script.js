$(document).ready(function() {  //ensures that code runs after document is loaded

    /* For sticky navigation */
    $('.js--section-portfolio').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        //offset: '650px;'
        offset: '90%'
    });

    /* Navigation scroll */
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 80 //offset by size of sticky nav: 80px
            }, 1000);           //ADDED
                return false;   //ADDED
            // }, 1000, function() {
            //   // Callback after animation
            //   // Must change focus!
            //   var $target = $(target);
            //   $target.focus();
            //   if ($target.is(":focus")) { // Checking if the target was focused
            //     return false;
            //   } else {
            //     $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            //     $target.focus(); // Set focus again
            //   };
            // });
          }
        }
      });

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });

    // $('.js--wp-4').waypoint(function(direction) {
    //     $('.js--wp-4').addClass('animated fadeIn');
    // }, {
    //     offset: '75%'
    // });
    //
    // $('.js--wp-5').waypoint(function(direction) {
    //     $('.js--wp-5').addClass('animated fadeIn');
    // }, {
    //     offset: '75%'
    // });

    /* Mobile Nav */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);

        if (icon.hasClass('fa fa-bars')) {
            icon.removeClass('fa fa-bars');
            icon.addClass('fa fa-times');
        } else {
            icon.removeClass('fa fa-times');
            icon.addClass('fa fa-bars');
        }
    });

    /* Bring back navigation after viewed in mobile view */
    $(window).resize(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        if ($(window).width() > 767){
            nav.css("display", "block");
            icon.css("display", "none");
            if (icon.hasClass('fa fa-times')) {
                icon.removeClass('fa fa-times');
                icon.addClass('fa fa-bars');
            }
            // console.log($(window).width());
            // console.log('greater than 767');
        } else {
            nav.css("display", "none");
            icon.css("display", "block");
            if (icon.hasClass('fa fa-times')) {
                icon.removeClass('fa fa-times');
                icon.addClass('fa fa-bars');
            }
            // console.log($(window).width());
            // console.log('less than 767');
        }
    });
});

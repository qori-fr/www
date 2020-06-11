(function ($) {
    'use strict';


    // Preloader js    
    $(window).on('load', function () {
        $('.preloader').fadeOut(100);
    });


    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Menu dropdown
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(max-width: 991px)").matches) {
            $dropdown.off("mouseenter mouseleave");
        } else {
            $dropdown.hover(
                function() {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function() {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        }
    });

    // Menu dropdown click
    $('.navbar-collapse').find('.dropdown').each(function() { 
        $(this).children('a').each(function() {                            
          var url = $(this).attr('href');
          if(url != '#') {
            $(this).attr('data-url',url);
            $(this).attr('href','#');
          }
        });
        $(this).children('a').click(function(e) {                        
          e.preventDefault();                            
        });
      
        if($(this).closest('.navbar-toggle').css('display') !== 'none') { // only on collapsed nav
          $(this).on({                             
            "click" : function(e) {                                  
              if(e.target == $(this).children('a').first().get(0)) {                 
                if($(this).hasClass('open')) {  
                  var url = $(this).children('a').first().attr("data-url");
                  document.location.href = url
                } else {
                  $(this).addClass('open'); 
                }       
                e.stopImmediatePropagation();
                e.preventDefault();
                return false;                                
              }
            },
            "hide.bs.dropdown" : function(e) {
              e.preventDefault();
              return false;
            }
          });
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });

    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });


    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Shuffle js filter and masonry
    var containerEl = document.querySelector('.shuffle-wrapper');
    if (containerEl) {
        var Shuffle = window.Shuffle;
        var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
            itemSelector: '.shuffle-item',
            buffer: 1
        });

        jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
            var input = evt.currentTarget;
            if (input.checked) {
                myShuffle.filter(input.value);
            }
        });
    }



})(jQuery);

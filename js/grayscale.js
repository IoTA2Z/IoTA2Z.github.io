(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

// Google Maps Scripts
// var map = null;
// // When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);
// google.maps.event.addDomListener(window, 'resize', function() {
//   map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
// });

// function init() {
//   // Basic options for a simple Google Map
//   // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//   var mapOptions = {
//     // How zoomed in you want the map to start at (always required)
//     zoom: 15,

//     // The latitude and longitude to center the map (always required)
//     center: new google.maps.LatLng(40.6700, -73.9400), // New York

//     // Disables the default Google Maps UI components
//     disableDefaultUI: true,
//     scrollwheel: false,
//     draggable: false,

//     // How you would like to style the map.
//     // This is where you would paste any style found on Snazzy Maps.
//     styles: [{
//       "featureType": "water",
//       "elementType": "geometry",
//       "stylers": [{
//         "color": "#000000"
//       }, {
//         "lightness": 17
//       }]
//     }, {
//       "featureType": "landscape",
//       "elementType": "geometry",
//       "stylers": [{
//         "color": "#000000"
//       }, {
//         "lightness": 20
//       }]
//     }, {
//       "featureType": "road.highway",
//       "elementType": "geometry.fill",
//       "stylers": [{
//         "color": "#000000"
//       }, {
//         "lightness": 17
//       }]
//     }, {
//       "featureType": "road.highway",
//       "elementType": "geometry.stroke",
//       "stylers": [{
//         "color": "#000000"
//       }, {
//         "lightness": 29
//       }, {
//         "weight": 0.2
//       }]
//     }, {
//       "featureType": "road.arterial",
//       "elementType": "geometry",
//       "stylers": [{
//         "color": "#000000"
//       }, {
//         "lightness": 18
//       }]
//     }, {
//       "featureType": "road.local",
//       "elementType": "geometry",
//       "stylers": [{
//         "color": "#000000"
//       }, {
//         "lightness": 16
//       }]
//     }, {
//       "featureType": "poi",
//       "elementType": "geometry",
//       "stylers": [{
//         "color": "#000000"
//       }, {
//         "lightness": 21
//       }]
//     }, {
//       "elementType": "labels.text.stroke",
//       "stylers": [{
//         "visibility": "on"
//       }, {
//         "color": "#000000"
//       }, {
//         "lightness": 16
//       }]
//     }, {
//       "elementType": "labels.text.fill",
//       "stylers": [{
//         "saturation": 36
//       }, {
//         "color": "#000000"
//       }, {
//         "lightness": 40
//       }]
//     }, {
//       "elementType": "labels.icon",
//       "stylers": [{
//         "visibility": "off"
//       }]
//     }, {
//       "featureType": "transit",
//       "elementType": "geometry",
//       "stylers": [{
//         "color": "#000000"
//       }, {
//         "lightness": 19
//       }]
//     }, {
//       "featureType": "administrative",
//       "elementType": "geometry.fill",
//       "stylers": [{
//         "color": "#000000"
//       }, {
//         "lightness": 20
//       }]
//     }, {
//       "featureType": "administrative",
//       "elementType": "geometry.stroke",
//       "stylers": [{
//         "color": "#000000"
//       }, {
//         "lightness": 17
//       }, {
//         "weight": 1.2
//       }]
//     }]
//   };

//   // Get the HTML DOM element that will contain your map
//   // We are using a div with id="map" seen below in the <body>
//   var mapElement = document.getElementById('map');

//   // Create the Google Map using out element and options defined above
//   map = new google.maps.Map(mapElement, mapOptions);

//   // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
//   var image = 'img/map-marker.svg';
//   var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
//   var beachMarker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     icon: image
//   });
// }


//Erik's Custom JS
jQuery(document).ready(function($){
  var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 100 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      //var css = document.createElement("style");
      //css.type = "text/css";
      //css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      //document.body.appendChild(css);
  };

  //New Fonts
  var MTUserId='00e6001d-d393-4576-bc63-060728ff70bb';
  var MTFontIds = new Array();

  MTFontIds.push("1491474"); // Avenir® Next W00 Cyrillic Regular 
  (function() {
      var mtTracking = document.createElement('script');
      mtTracking.type='text/javascript';
      mtTracking.async='true';
      mtTracking.src='mtiFontTrackingCode.js';

      (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(mtTracking);
  })();
});


//Home Slider
jQuery(document).ready(function($) {
  
  var $slider = $(".slider"),
      $slideBGs = $(".slide__bg"),
      diff = 0,
      curSlide = 0,
      numOfSlides = $(".slide").length-1,
      animating = false,
      animTime = 1000,
      autoSlideTimeout,
      autoSlideDelay = 6000,
      $pagination = $(".slider-pagi");
  
  function createBullets() {
    for (var i = 0; i < numOfSlides+1; i++) {
      var $li = $("<li class='slider-pagi__elem'></li>");
      $li.addClass("slider-pagi__elem-"+i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  };
  
  createBullets();
  
  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
  };
  
  function autoSlide() {
    autoSlideTimeout = setTimeout(function() {
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  };
  
  autoSlide();
  
  function changeSlides(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-"+curSlide).addClass("active");
      setTimeout(function() {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);
    }
    window.clearTimeout(autoSlideTimeout);
    $(".slider-pagi__elem").removeClass("active");
    $(".slider-pagi__elem-"+curSlide).addClass("active");
    $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
    $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
    diff = 0;
    autoSlide();
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numOfSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function(e) {
    if (animating) return;
    window.clearTimeout(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
        winW = $(window).width();
    diff = 0;
    
    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
      $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
      $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
    });
  });
  
  $(document).on("mouseup touchend", function(e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlides(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-control", function() {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-pagi__elem", function() {
    curSlide = $(this).data("page");
    changeSlides();
  });
  
});

//Slide left to right, right to left
jQuery(document).ready(function($){
  var $animation_elements = $('.animate');
  var $animation_elements_hidden = $('.animate_hidden');
  var $animation_elements_fixed_menu = $('.case_inner');
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
   
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
   
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } //else {
        //$element.removeClass('in-view');
      //}
    });

    $.each($animation_elements_hidden, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
   
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });

    $.each($animation_elements_fixed_menu, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      console.log('element ->' + element_top_position);
      console.log('current_scroll->' + parseInt($(window).scrollTop() + $('#mainNav').outerHeight()));
      if( parseInt($(window).scrollTop() + $('#mainNav').outerHeight()) >=element_top_position){
        $element.find('div.fixed_menu').addClass('in-view');
      } else {
        $element.find('div.fixed_menu').removeClass('in-view');
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');
});


jQuery(document).ready(function($) {     
    $('#map-animation .sf').hover(function(){     
        $('#location_info .califonia').addClass('active'); 
        $('#location_info .oregon').removeClass('active'); 
        $('#location_info .newyork').removeClass('active');  
        $('#location_info .london').removeClass('active'); 
        $('#location_info .warsaw').removeClass('active');   
    });

    $('#map-animation .portland').hover(function(){     
        $('#location_info .oregon').addClass('active'); 
        $('#location_info .califonia').removeClass('active'); 
        $('#location_info .newyork').removeClass('active');  
        $('#location_info .london').removeClass('active'); 
        $('#location_info .warsaw').removeClass('active');    
    });

    $('#map-animation .ny').hover(function(){     
        $('#location_info .newyork').addClass('active'); 
        $('#location_info .califonia').removeClass('active');
        $('#location_info .oregon').removeClass('active');  
        $('#location_info .london').removeClass('active'); 
        $('#location_info .warsaw').removeClass('active');    
    });

    $('#map-animation .london').hover(function(){     
        $('#location_info .london').addClass('active'); 
        $('#location_info .califonia').removeClass('active');
        $('#location_info .oregon').removeClass('active'); 
        $('#location_info .newyork').removeClass('active'); 
        $('#location_info .warsaw').removeClass('active');    
    });

    $('#map-animation .wroclaw').hover(function(){     
        $('#location_info .warsaw').addClass('active'); 
        $('#location_info .califonia').removeClass('active');
        $('#location_info .oregon').removeClass('active'); 
        $('#location_info .newyork').removeClass('active');  
        $('#location_info .london').removeClass('active');     
    });
});  
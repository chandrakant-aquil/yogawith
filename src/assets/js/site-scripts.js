// equal height
!function n(t,r,e){function i(u,f){if(!r[u]){if(!t[u]){var c="function"==typeof require&&require;if(!f&&c)return c(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+u+"'")}var a=r[u]={exports:{}};t[u][0].call(a.exports,function(n){var r=t[u][1][n];return i(r||n)},a,a.exports,n,t,r,e)}return r[u].exports}for(var o="function"==typeof require&&require,u=0;u<e.length;u++)i(e[u]);return i}({1:[function(n,t,r){!function(n){function t(){var t,r=n("[data-eq]").map(function(){return n(this).data("eq")}).get();(t={},r.forEach(function(n){t[n+"::"+typeof n]=n}),Object.keys(t).map(function(n){return t[n]})).forEach(function(t){var r=0;n('[data-eq="'+t+'"]').css("min-height","").each(function(){n(this).outerHeight()>r&&(r=n(this).outerHeight())}).css("min-height",r+"px")})}n(window).on("load",function(){t()}),n(window).resize(function(){t()})}(jQuery)},{}]},{},[1]);

//Loader
$(window).on('load', function() {
//$('#status').fadeOut();
$('#preloader').delay(150).fadeOut('fast'); 
$('body').delay(50).css({'overflow':'visible'});
})

// Scroll to Top
$(".totop").click(function() {
$("html, body").animate({ scrollTop: 0 }, "slow");
return false;
});
$(window).scroll(function() {
if ($(this).scrollTop()) {
  $('.totop:hidden').stop(true, true).fadeIn();
} else {
  $('.totop').stop(true, true).fadeOut();
}
});


// Fixed Header
$(window).scroll(function(){
if ($(window).scrollTop() >= 1) {
    $('.header').addClass('fixed-header');    
}
else {
    $('.header').removeClass('fixed-header');
}
});
		

//Lazy Loading
 if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.src;
    });
  } else {
    // Dynamically import the LazySizes library
    const script = document.createElement('script');
    script.src =
      'js/lazysizes.min.js';
    document.body.appendChild(script);
  }


// Youtube Popup
$('.popup-youtube').magnificPopup({
    type: 'iframe'
  });

// Video Testimonial Slider
  $(".video-testimonial-slider").slick({
   slidesToShow: 3,
   infinite:false,
   slidesToScroll: 1,
   autoplay: false,
   autoplaySpeed: 2000,
   responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows:false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows:false
        }
      }
    ]
  });

  // Yoga Text Slider
  $(".yoga-text-slider").slick({
   slidesToShow: 1,
   infinite:true,
   slidesToScroll: 1,
   autoplay: false,
   autoplaySpeed: 5000,
   dots:true,
   arrows:true,
     // dots: false, Boolean
    // arrows: false, Boolean
  });

    // Yoga Text Slider
  $(".testimonial-slider").slick({
   slidesToShow: 1,
   infinite:true,
   slidesToScroll: 3,
   autoplay: false,
   autoplaySpeed: 5000,
   dots:true,
   arrows:true,
   centerMode: true,
   focusOnSelect: true,
  
  });
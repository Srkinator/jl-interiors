(function($) {
  var	$window = $(window),
  $body = $('body')

  $window.on('load', function() {
    setTimeout(function() {
      const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }, 100);
  });
})(jQuery);

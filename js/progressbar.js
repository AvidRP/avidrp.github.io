$(function() {
  smoothScroll(1000);
});

function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

    var target = $($(this).attr('href'));

    if(target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration)
    }
  })
}

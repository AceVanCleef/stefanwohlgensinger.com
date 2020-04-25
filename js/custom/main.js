
/** Initializes materilize carousel */
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    options = {fullWidth: true};
    var carouselInstance = M.Carousel.init(elems, options);
  });
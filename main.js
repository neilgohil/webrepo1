$("#auto-slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#auto-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#auto-slideshow');
},  3000);

$('.button').on('click', function(event){
      event.preventDefault();
      $('html, body').stop().animate({scrollTop: $('.works').offset().top-57}, 900);
});

$('.toggle').click(function(evento) {
    evento.preventDefault();
    $('.toggle').toggleClass('toggle--vert');
    $('.menu').toggleClass('menu--show');
});

$('.menu--item--sobremi').on('click', function(event){
      event.preventDefault();
      $('html, body').stop().animate({scrollTop: $('.header--sobremi').offset().top-57}, 900);
});
$('.menu--item--proyectos').on('click', function(event){
      event.preventDefault();
      $('html, body').stop().animate({scrollTop: $('.works').offset().top-57}, 900);
});
$('.menu--item--contacto').on('click', function(event){
      event.preventDefault();
      $('html, body').stop().animate({scrollTop: $('.contact').offset().top-57}, 900);
});

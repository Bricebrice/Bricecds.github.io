var altoBarra = $("header.topnav").height();


$('.button').on('click', function(event){
      event.preventDefault();
      $('html, body').stop().animate({scrollTop: $('#aboutme').offset().top-altoBarra}, 900);
});

$('.down').on('click', function(event){
      event.preventDefault();
      $('html, body').stop().animate({scrollTop: $('.works').offset().top-altoBarra}, 900);
});

function conmutarMenu(esperar){
    var milisegundos = (esperar) ? 700 : 0;
    setTimeout(function(){
        $('.toggle').toggleClass('toggle--vert');
        $('.menu').toggleClass('menu--show');
    },milisegundos);
}
$('.toggle').click(function(evento) {
    event.preventDefault();
    conmutarMenu(false);
});

$('.menu--item--sobremi').on('click', function(event){
      /*event.preventDefault();*/
      $('html, body').stop().animate({scrollTop: $('#aboutme').offset().top-altoBarra}, 900);
      conmutarMenu(true);
});
$('.menu--item--proyectos').on('click', function(event){
      /*event.preventDefault();*/
      $('html, body').stop().animate({scrollTop: $('#projects').offset().top}, 900);
      conmutarMenu(true);
});
$('.menu--item--contacto').on('click', function(event){
      /*event.preventDefault();*/
      $('html, body').stop().animate({scrollTop: $('#contact').offset().top}, 900);
      conmutarMenu(true);
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1300 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})

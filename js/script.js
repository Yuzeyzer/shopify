$(document).ready(function(){
    $(".hero__slider").owlCarousel({
        items:1,
        autoplay:true,
        loop:true
    });
    $('.mobile__btn').on('click', function(){
        $(this).toggleClass('mobile__btn_active');
        $('.menu').toggleClass('nav-list-active')
    });
    $('.nav__list_item').on('click', function(){
        $('.nav-list').removeClass('nav-list-active');
        $('.mobile__btn').removeClass('mobile__btn_active');
    });
  });
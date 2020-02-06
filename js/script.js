$(document).ready(function(){
    $(".hero__slider").owlCarousel({
        items:1,
        autoplay:true,
        loop:true
    });
    $(".exp__slider").owlCarousel({
        items:1,
        autoplay:true,
        loop:true
    });
    $(".team__slider").owlCarousel({
        items:6,
        autoplay:true,
        loop:true,
        responsive: {
            1920: {
                items:6
            },
            1366: {
                items:4
            },
            1024: {
                items:3
            },
            768: {
                items:2
            },
            0: {
                items:1
            }
        }
    });
    $('.mobile__btn').on('click', function(){
        $(this).toggleClass('mobile__btn_active');
        $('.menu').toggleClass('nav-list-active')
    });
    $('.nav__list_item').on('click', function(){
        $('.menu').removeClass('nav-list-active');
        $('.mobile__btn').removeClass('mobile__btn_active');
    });
    new WOW().init()
  });

//   императивный способ
//   let fact = (n) => {
//     let count = 1,
//         result =1;
//         while (count <= n) {
//             result = result * count;
//             count ++;
//         }
//         console.log(result)
//   }
//   fact(5);
// let fact = () => {
//     if (num === 1) {
//         return num * fact(num -1)
//     }
// }
// console.log(fact(6))
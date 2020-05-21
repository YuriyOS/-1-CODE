//= ../../node_modules/owl.carousel2/dist/owl.carousel.js

$(function(){
    $('.header__menu-btn').on('click', function(){
        $('.navigation').slideToggle();
    });

    $('.logo-box-mob__slider').owlCarousel({

        center: true,
        loop: true,

        responsive:{
            0:{                
                items:3
            },
            768:{
                items:4
            }
            
        }

    });

    $('.reviews__slider').owlCarousel({
        items: 1,
        center: true,
        loop: true,
        nav: true,                  
        navClass: ['reviws-prev', 'reviws-next'],
        navText: '',
        navContainerClass: 'reviews__nav-wrap'
    });


});

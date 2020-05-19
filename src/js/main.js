//= ../../node_modules/owl.carousel2/dist/owl.carousel.js

$(function(){
    $('.header__menu-btn').on('click', function(){
        $('.navigation').slideToggle();
    });

    $('.owl-carousel').owlCarousel({

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

        center: true,
        // loop: true,

        responsive:{
            0:{                
                items:2
            },
            768:{
                items:4
            }
            
        }

    });


});

//= ../../node_modules/owl.carousel2/dist/owl.carousel.js

$(function(){
    $('.header__menu-btn').on('click', function(){
        $('.navigation').slideToggle();
        $('.hamburger').toggleClass('hamburger_active');
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

    function createModal(sTitle = 'Заповніть форму'){
        $('body').prepend('' +
        '<div class="modal">\n' +
        '    <div class="modal__content">\n' +
        '        <div class="btn-close"></div>\n' +
        '        <h2 class="heading-style-1">'+ sTitle + '</h2>\n' +
        '        <form class="form modal__form">        \n' +
        '            <!-- Hidden Required Fields -->\n' +
        '            <input type="hidden" name="project_name" value="Site Name">\n' +
        '            <input type="hidden" name="admin_email" value="admin@mail.com">\n' +
        '            <input type="hidden" name="form_subject" value="Form Subject">\n' +
        '            <!-- END Hidden Required Fields -->\n' +
        '            <input class="input modal__input main-text" type="text" name="Name" placeholder="Ваше ім\'я..." required><br>\n' +
        '            <input class="input modal__input main-text" type="text" name="E-mail" placeholder="Ваше E-mail..." required><br>\n' +
        '            <input class="input modal__input main-text" type="text" name="Phone" placeholder="Ваш телефон..."><br>\n' +
        '            <button class="form__btn style-btn reset-btn">ЗАМОВИТИ</button>\n' +
        '        </form>\n' +
        '        <p class="main-text main-text_white">Ми НЕ передаємо Ваші дані 3-м особам.</p>\n' +
        '    </div>\n' +
        '</div>'
    );
    }

    $('.btn-form').on('click', function(e){

        createModal($(e.target).data('formTitle'));

        $('.modal').fadeIn();
        $('body').addClass('body_fixed');        
        $('body').prepend('<div class="overlay"></div>');
        $('.overlay').on('click', function(){
            $('.modal').fadeOut();
            $('.overlay').remove();    
            $('.modal').remove();
            $('body').removeClass('body_fixed');        

        });

        $('.btn-close').on('click', function(){
            $('.modal').fadeOut();
            $('.overlay').remove();
            $('.modal').remove();
            $('body').removeClass('body_fixed');        
        });
    })

    
});
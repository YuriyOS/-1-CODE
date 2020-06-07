//= ../../node_modules/owl.carousel2/dist/owl.carousel.js

$(function () {

  $('.js-menu-btn_open').on('click', function(){
    $('.navigation').addClass('navigation_visible');
    $('.navigation__overlay').addClass('navigation__overlay_visible');
    $('body').addClass('body_fixed');
  });

  $('.js-menu-btn_hide, .js-navigation__overlay').on('click', function(){
    $('.navigation').removeClass('navigation_visible');
    $('.navigation__overlay').removeClass('navigation__overlay_visible');
    $('body').removeClass('body_fixed');
  });

  let headerHeight = $('.header__top-block').height();
  
  if($(window).width() < 1620) {
    $('main').css('margin-top', $('.header').height() + 'px');

    $(window).on('scroll', function(){
      if($(window).scrollTop() > headerHeight) {
        $('.header').addClass('header_shadow');
      } else {
        $('.header').removeClass('header_shadow');
      }
    })

  } else {

    $(window).on('scroll', function(){
      if($(window).scrollTop() > headerHeight) {
        $('.navigation').addClass('navigation_fixed');
      } else {
        $('.navigation').removeClass('navigation_fixed');
      }
    })
  }

  $('.logo-box-mob__slider').owlCarousel({
    items: 3,
    center: true,
    loop: true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true
  });

  $('.reviews__slider').owlCarousel({
    items: 1,
    center: true,
    loop: true,
    nav: true,
    navClass: ['reviws-prev', 'reviws-next'],
    navText: '',
    navContainerClass: 'reviews__nav-wrap',
  });

  function createModal(sTitle = 'Заповніть форму') {
    $('body').prepend(
      '' +
        '<div class="modal">\n' +
        '    <div class="modal__dialog">\n' +
        '        <div class="btn-close"></div>\n' +
        '        <h2 class="heading-style-1">' +
        sTitle +
        '</h2>\n' +
        '        <form class="form modal__form">        \n' +        
        '            <input class="input modal__input main-text" type="text" name="Name" placeholder="Ваше ім\'я..." required><br>\n' +
        '            <input class="input modal__input main-text" type="text" name="E-mail" placeholder="Ваше E-mail..." required><br>\n' +
        '            <input class="input modal__input main-text" type="text" name="Phone" placeholder="Ваш телефон..."><br>\n' +
        '            <button class="form__btn style-btn reset-btn">ЗАМОВИТИ</button>\n' +
        '        </form>\n' +
        '        <p class="main-text main-text_white">Ми НЕ передаємо Ваші дані 3-м особам.</p>\n' +
        '    </div>\n' +
        '</div>',
    );
  }

  $('.btn-form').on('click', function (e) {
    createModal($(e.target).data('formTitle'));

    $('.modal').fadeIn();
    $('body').addClass('body_fixed');
    $('.modal').on('click', function (e) {
      if (
        !$(e.target).closest('.modal__dialog').length &&
        !$(e.target).is('.modal__dialog')
      ) {
        $('.modal').fadeOut();
        $('.overlay').remove();
        $('.modal').remove();
        $('body').removeClass('body_fixed');
      }
    });

    $('.btn-close').on('click', function () {
      $('.modal').fadeOut();
      $('.overlay').remove();
      $('.modal').remove();
      $('body').removeClass('body_fixed');
    });
  });

});

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2500,
    },
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
    // effect: 'fade',
    speed: 500,
    spaceBetween: 100,
    grabCursor: false,
    fadeEffect: {
        crossFade: true
      },
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
      draggable: true,

    },

      // scrollbar: {
      //   el: '.swiper-scrollbar',
      //   draggable: true,
      // },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

  })
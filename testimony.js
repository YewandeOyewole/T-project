const testimonyswiper = new Swiper('.testimony-swiper', {
  speed: 1000,
  spaceBetween: 50,
  direction: 'horizontal',
  loop: true,
  autoplay: {
      delay: 3000,
  },
  centeredSlides: true,
  effect: 'coverflow',
  coverflowEffect: {
      rotate: 0,
      slideShadows: false,
  },
  scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
  },
  navigation: {
      nextEl: null,
      prevEl: null,
  },
  pagination: {
      el: null,
  },
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 3000,
      },

    effect: 'flip',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // cowndown control
     

       const countdown = () => {
        const countDate = new Date("Febuary 1,2024 00:00:00").getTime()
        const now = new Date().getTime();
        const gap = countDate - now;
        // console.log(countDate);

        const second = 1000;
        const minutes = second * 60;
        const hour = minutes * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) /hour);
        const textMinutes = Math.floor((gap % day) / minutes);
        const textSecond = Math.floor((gap % day) / second);
        // console.log(textDay)
           document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour;
        document.querySelector(".minutes").innerText = textMinutes;
        document.querySelector(".second").innerText = textSecond;
  };

  countdown();
  
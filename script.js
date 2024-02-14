
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 3000,
      },

    effect: 'flip',
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


const navbar = document.getElementById('nav')

const ChangeBackground = () => {
  if (window.scrollY >= 80) {
    navbar.classList.add('header')
  } else {
      navbar.classList.remove('header')
  }
};
document.addEventListener('scroll', ChangeBackground)

  

// -------------------------- Typewriter Effect ---------------------------

var i = 0;
var txt = 'Odumaretech Final Project.'; 
var speed = 1; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


typeWriter()


document.addEventListener('DOMContentLoaded', function() {
  // Set the date we're counting down to (replace with your desired date)
  const countDate = new Date("Feb 4, 2024 00:00:00").getTime();

  // Update the countdown every 1 second
  const countdownInterval = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();
    const gap = countDate - now;
    // console.log(countDate);

    const textDay = Math.floor(gap / (1000 * 60 * 60 * 24));
    const textHour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const textMinutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const textSecond = Math.floor((gap % (1000 * 60)) / 1000);
    // console.log(textDay)
       document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minutes").innerText = textMinutes;
    document.querySelector(".second").innerText = textSecond;

    // Check if the countdown is over
    if (gap < 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown').innerHTML = "EXPIRED";
    }
  }, 1000);
});

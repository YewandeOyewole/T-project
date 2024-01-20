
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
  const countdownDate = new Date("Feb 4, 2024 00:00:00").getTime();

  // Update the countdown every 1 second
  const countdownInterval = setInterval(function() {
    // Get the current date and time
    const currentDate = new Date().getTime();

    // Calculate the time remaining
    const timeRemaining = countdownDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('days').innerHTML = days + 'Days';
    document.getElementById('hours').innerHTML = hours + 'Hours';
    document.getElementById('minutes').innerHTML = minutes + 'Mins';
    document.getElementById('seconds').innerHTML = seconds + 'Sec';

    // Check if the countdown is over
    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown').innerHTML = "EXPIRED";
    }
  }, 1000);
});

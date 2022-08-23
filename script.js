let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

console.log(days, minutes, hours, seconds);


var countDownDate = new Date("dec 2, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var daysContent = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hoursContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var secondsContent = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an elements
  days.innerHTML = daysContent;
  hours.innerHTML = hoursContent;
  minutes.innerHTML = minutesContent;
  seconds.innerHTML = secondsContent;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
const months = [
   'January',
   'February',
   'March',
   'April',
   'May',
   'June',
   'July',
   'August',
   'September',
   'October',
   'November',
   'December',
 ];
 const weekdays = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday',
 ];

const mainSection = document.querySelector(".section-center");
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h3");


let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2021,11,9,14,38,0);

// change year month hours minutes and seconds from here
const futureDate = new Date(tempYear, tempMonth, tempDay + 500, 22, 28, 0); //add local time for hours and minutes

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;

// future time in ms
const futureTime = futureDate.getTime();


function getRemainingTime(){
   const today = new Date().getTime();
   const t = futureTime - today;
   //1s = 1000ms
   //1m = 60s
   //1hr = 60min
   //1d = 24hr

   //values in ms
   const oneDay = 24 * 60 * 60 * 1000;
   const oneHour = 60 * 60 * 1000;
   const oneMinuet = 60 * 1000;

   // calculate all values
   let days = t / oneDay;
   days = Math.floor(days);
   let hours = Math.floor((t % oneDay) / oneHour);
   let minutes = Math.floor((t % oneHour) / oneMinuet);
   let seconds = Math.floor((t % oneMinuet) / 1000);

   // set values array
   const values = [days, hours, minutes, seconds];

   function format(item){
      if(item < 10){
         return (item = `0${item}`);
      }
      return item;
   }

   items.forEach(function(item,index){
      item.innerHTML = format(values[index]);
   });

   if(t < 0){
      clearInterval(cutdown);
      mainSection.style.display = 'none';
      // mainSection.style.opacity = '0';
      // deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired.</h4>`;
      // mainSection.style.clipPath = 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)';
   }  
}

// cutdown
let cutdown = setInterval(getRemainingTime, 1000);

getRemainingTime();

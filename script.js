const hourHand = document.getElementById("hourHand");
const minuteHand = document.getElementById("minuteHand");
const calcBtn = document.getElementById("calcBtn");
const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const angleBetweenText = document.getElementById("angleBetween");
let angleMin = 0;
let angleHour = 0;

const calcAngle = () => {
  //reset clock
  if (hourInput.value > 12) hourInput.value = 1;
  if (minuteInput.value > 59) minuteInput.value = 0;

  const hour = parseInt(hourInput.value);
  const minute = parseInt(minuteInput.value);

  //calc angle for minute hand and hour hand
  angleMin = minute * 6;
  angleHour = (hour + minute / 60) * 30;

  //rotate the clock hands
  minuteHand.style.transform = `rotate(${angleMin}deg)`;
  hourHand.style.transform = `rotate(${angleHour}deg)`;

  //calculate the small angle between the two hands
  let angleBetween = Math.abs(angleMin - angleHour);
  if (angleBetween > 180) angleBetween = 360 - angleBetween;

  //display the angle between the hands on the screen
  angleBetweenText.textContent = `the measure of the smaller angle formed by the hands of the clock is: ${angleBetween}`;
};

calcBtn.addEventListener("click", calcAngle);
hourInput.addEventListener("change", calcAngle);
minuteInput.addEventListener("change", calcAngle);

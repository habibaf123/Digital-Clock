function updateClock() {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  let ampm = h >= 12 ? "PM" : "AM";

  h = h % 12;
  h = h ? h : 12;

  h = (h < 10 ? "0" : "") + h;
  m = (m < 10 ? "0" : "") + m;
  s = (s < 10 ? "0" : "") + s;

  document.getElementById("clock").innerText =
    h + ":" + m + ":" + s + " " + ampm;
}

setInterval(updateClock, 1000);
updateClock();

function setGreeting() {
  let h = new Date().getHours();
  let text = "";

  if (h < 12) text = "Good Morning ☀️";
  else if (h < 18) text = "Good Afternoon 🌤️";
  else text = "Good Evening 🌙";

  document.getElementById("greet").innerText = text;
}

setGreeting();

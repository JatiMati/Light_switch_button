let swi = document.querySelector(".switch");
let bod = document.body;
let flag = false;
let text = document.querySelector("h1");
let shadow = document.querySelector(".shadow");
let dark = document.querySelector(".darkFilter");

swi.addEventListener("click", () => {
  flag = !flag;
  swi.classList.toggle("on");
  swi.classList.toggle("off");
  shadow.classList.toggle("shadowOff");
  shadow.classList.toggle("shadowOn");
  bod.style.backgroundColor = flag ? "rgb(240,240,240)" : "rgb(100,100,100)";
  text.style.color = flag ? "green" : "red";
  dark.style.display = flag ? "none" : "block";
  text.innerHTML = flag ? "on" : "off";
});

const timers = document.querySelectorAll("button");
let counter = 0;
timers[0].addEventListener("click", () => {
  window.alert(`click${counter++}`);
});
timers[1].addEventListener("click", () => {
  window.alert(`click${counter++}`);
});

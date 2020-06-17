const delayedFunction = () => {
  window.alert("this message is delayed by 3 seconds");
};
document.querySelector("button").addEventListener("click", () => {
  setTimeout(delayedFunction, 3000);
});

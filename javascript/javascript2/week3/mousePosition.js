let mousePosition = [];
const averageMouseposition = (event) => {};
document.addEventListener("mousemove", (event) => {
  mousePosition.push([event.screenX, event.screenY]);
});

const reducer = (accumulator, currentValue) => accumulator + currentValue;
setInterval(() => {
  const averageMousePosition =
    "Xposition: " +
    Math.trunc(
      mousePosition.map((position) => position[0]).reduce(reducer, 0) /
        mousePosition.length
    ) +
    "Yposition:" +
    Math.trunc(
      mousePosition.map((position) => position[1]).reduce(reducer, 0) /
        mousePosition.length
    );
  window.alert(averageMousePosition);
  mousePosition = [];
}, 5000);

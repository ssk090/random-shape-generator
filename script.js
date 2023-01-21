function hexColorCode() {
  return (hexColor = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`);
}

function shapeGenerator(x1, y1) {
  let x = x1 + "px";
  let y = y1 + "px";

  const hexColor = hexColorCode();

  let element = document.createElement("div");
  element.setAttribute("class", "open");
  element.style.left = x;
  element.style.top = y;
  element.style.backgroundColor = hexColor;
  element.style.transform =
    "translate(-50%, -50%) scale(" + Math.floor(Math.random() * 5 + 0.3) + ")";
  element.style.borderRadius = Math.floor(Math.random() * 100) + 10 + "%";

  document.body.appendChild(element);

  console.log(Math.floor(Math.random() * 5) + 1);
}

document.addEventListener("click", function (event) {
  shapeGenerator(event.clientX, event.clientY);
});

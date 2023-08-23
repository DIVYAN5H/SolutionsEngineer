/*=============== Custom Cursor ===============*/
var cursorDot = document.querySelector("[data-cursor-dot]");
var cursorOutline = document.querySelector("[data-cursor-outline]");

document.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 300, fill: "forwards" }
  );
});

/*=============== Navbar SAHIL SHAKE ===============*/
document.querySelector(".nav-left").addEventListener("mouseover", function () {
  document.querySelectorAll(".nav-left-x").forEach(function (span) {
    var rotation = Math.random() * 30 - 15; // Generate a random rotation between -10deg and 10deg
    span.style.transform = "rotate(" + rotation + "deg)";
  });
});

document.querySelector(".nav-left").addEventListener("mouseout", function () {
  document.querySelectorAll(".nav-left-x").forEach(function (span) {
    span.style.transform = "rotate(0)";
  });
});

/*=============== Button Animation ===============*/

const button = document.querySelector(".button");

button.onmousemove = function (e) {
  const x = e.pageX - button.offsetLeft;
  const y = e.pageY - button.offsetTop;

  button.style.setProperty("--x", x + "px");
  button.style.setProperty("--y", y + "px");
};

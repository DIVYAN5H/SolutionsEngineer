//=============Nav bar animations
function urlChanged() {
  var currentUrl = window.location.hash.slice(1);
  const childElements = document.querySelectorAll(".content-section");
  const navLinks = document.querySelectorAll(".navbar a");
  const sideText = document.querySelector(".sideText");

  navLinks.forEach((navLink) => {
    const navName = navLink.getAttribute("href").substring(1);
    if (navName === currentUrl) {
      childElements.forEach((element) => {
        if (element.id == navName) {
          gsap.to(element, {
            y: 0,
            x: 0,
            scale: 1,
            opacity: 1,
            display: "block",
            ease: "power2",
          });
        } else {
          gsap.to(element, {
            y: 0,
            x: 0,
            scale: 1.5,
            opacity: 0,
            display: "none",
            ease: "power2",
          });
        }

        sideTextTimeline = gsap.timeline();
        sideTextTimeline.to(sideText, {
          left: "-10%",
          top: "0%",
          duration: 0.5,
        });
        setTimeout(() => {
          sideText.innerText = navName;
        }, 500);
        sideTextTimeline.to(sideText, { left: "0%", top: "0%", duration: 0.5 });

        navLink.classList.remove("animate");
        if (navName != "Home") {
          gsap.to(navLink, { opacity: 0.35 });
        }
      });
    } else if (navName != "Home") {
      navLink.classList.add("animate");
      gsap.to(navLink, { opacity: 1 });
    }
  });
}
//======= on load functions========//
// Call the function on page load
urlChanged();

// Attach the function to the "hashchange" and "load" events
window.addEventListener("hashchange", urlChanged);
window.addEventListener("load", urlChanged);

/*=============== Loader animation ===============*/
// uncomment it when done
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// const lettersArray = Array.from({ length: 26 }, (_, index) =>
//   String.fromCharCode(97 + index)
// );

// var loader = document.querySelector("#loader");
// var loaderText = document.querySelector(".loader-text");

// var firstText = "Solutions Engineer".split("").slice(1);
// var secondText = "Sahil".slice(1);

// var randomArray = [];
// for (var i = 0; i < firstText.length; i++) {
//   var max = 25;
//   var min = 5;
//   var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//   randomArray.push(randomNumber);
//   min = randomNumber + 1;
// }

// randomArray.sort(function (a, b) {
//   return a - b;
// });

// for (let i = 0; i < firstText.length; i++) {
//   var char = firstText[i];

//   var aToz = shuffleArray(lettersArray);
//   var span = document.createElement("span");
//   span.className += "loader-text-spans flex";

//   extraTimes = randomArray[i];
//   if (char == " ") {
//     extraTimes++;
//   }

//   for (let j = 0; j < extraTimes; j++) {
//     const extra = aToz[j];
//     var childSpan = document.createElement("span");
//     childSpan.innerText = extra;
//     childSpan.className += "loader-text-span";
//     span.appendChild(childSpan);
//   }
//   var childSpan = document.createElement("span");
//   childSpan.innerText = char;
//   childSpan.className += "loader-text-span";
//   span.appendChild(childSpan);

//   loaderText.appendChild(span);
// }

// var loaderTimeline = gsap.timeline()
// loaderTimeline.from(loaderText.querySelectorAll(".loader-text-spans"), {
//   y: "100%",
//   duration: 1,
//   stagger: 0.2,
//   ease: "power2",
// });
// loaderTimeline.to(document.querySelector('.loader'), {
//   y: "-100%",
//   duration: 0.5,
//   delay: 1,
//   ease: "power2",
// })
// loaderTimeline.to(document.querySelector('.loader-back-a'), {
//   y: "-100%",
//   duration: 0.5,
//   delay: -0.4,
//   ease: "power2",
// })
// loaderTimeline.to(document.querySelector('.loader-back-b'), {
//   y: "-100%",
//   duration: 0.2,
//   delay: -0.1,
//   ease: "power2",
// })
/*=============== Custom Cursor ===============*/
function addCursorText(text) {
  var div = document.querySelector(".cursor-text-spans");

  text = text.split("");
  div.innerHTML = "";

  text.forEach((t, index) => {
    const span = document.createElement("span");
    span.innerText = t;

    const rotation = (360 / text.length) * index;
    span.style.transform = `rotate(${rotation}deg)`;

    div.appendChild(span);
  });
}

function removeCursorText() {
  var div = document.querySelector(".cursor-text-spans");

  div.innerHTML = "";
}

var cursorDot = document.querySelector("[data-cursor-dot]");
var cursorOutline = document.querySelector("[data-cursor-outline]");
var cursorText = document.querySelector("[data-cursor-text]");

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

  cursorText.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 100, fill: "forwards" }
  );
});

/*=============== Navbar SAHIL SHAKE ===============*/
var isSoundPlaying = false;

document
  .querySelector(".shake-container")
  .addEventListener("mouseover", function () {
    document.querySelectorAll(".shake-span").forEach(function (span) {
      var rotation = Math.random() * 30 - 15; // Generate a random rotation between -10deg and 10deg
      span.style.transform = "rotate(" + rotation + "deg)";
    });

    var sound = new Audio("./assets/sound/tick.mp3");

    if (!isSoundPlaying) {
      sound.volume = 0.1;

      sound.play().then(function () {
        isSoundPlaying = true;
        sound.onended = function () {
          isSoundPlaying = false;
        };
      });
    }
  });

document
  .querySelector(".shake-container")
  .addEventListener("mouseleave", function () {
    document.querySelectorAll(".shake-span").forEach(function (span) {
      span.style.transform = "rotate(0)";
    });
  });

/*=============== Button Animation ===============*/
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.onmousemove = function (e) {
    const boundingRect = button.getBoundingClientRect();
    const x = e.clientX - boundingRect.left;
    const y = e.clientY - boundingRect.top;

    button.style.setProperty("--x", x + "px");
    button.style.setProperty("--y", y + "px");

    button.addEventListener("mouseenter", addCursorText(" send-message "));
  };
  button.addEventListener("mouseleave", () => removeCursorText());
});

/*===================== GSAP =================*/
// const butn = document.querySelector(".button");

// gsap.to(butn, { x: 200,
// repeat: -1,
//   yoyo: true })
/*===================== Conntact info copy =================*/
const details = document.querySelectorAll(".contact-detail");

details.forEach((detailDiv) => {
  detailDiv.addEventListener("click", () => {
    const textToCopy = detailDiv.querySelector("p").textContent;
    const tempTextArea = document.createElement("textarea");

    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    addCursorText("copied - copied - ");
  });
  detailDiv.onmousemove = function (e) {
    detailDiv.addEventListener("mouseenter", addCursorText("click to copy - "));
  };
  detailDiv.addEventListener("mouseleave", () => removeCursorText());
});

/*===================== Conntact form =================*/
var alreadySavingData = false;
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (!alreadySavingData) {
      alreadySavingData = true;

      const formData = new FormData(event.target);

      const apiUrl =
        "https://script.google.com/macros/s/AKfycbx_w-ateKKgzqiwa8HGJtgA6GjGr2OGIMn_A1pgnVR-qJPV9xuFF3RvB4_eNlhrZ2ST/exec";

      fetch(apiUrl, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          oldHtml = document.querySelector("#contactButton").innerHTML;

          document.querySelector("#contactButton").innerHTML =
            `<span>` +
            data.result +
            `</span>`;
          setTimeout(() => {
            document.querySelector("#contactButton").innerHTML = oldHtml;
            alreadySavingData = false;
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

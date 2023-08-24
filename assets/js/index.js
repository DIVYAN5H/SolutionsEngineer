//=============Nav bar animations
function urlChanged() {
  var currentUrl = window.location.hash.slice(1);
  const childElements = document.querySelectorAll(".content-section");
  console.log(childElements)
  const navLinks = document.querySelectorAll(".nav-right-link");

  navLinks.forEach((navLink) => {
    const navName = navLink.getAttribute("href").substring(1);
    if (navName === currentUrl) {

      childElements.forEach(element => {
        const elementId = element.id;

        if (elementId == navName){
          element.classList.remove("hidden")
        }
        else{
          element.classList.add("hidden")
        }

      });

      navLink.classList.remove("animate");

      var h = window.innerHeight;
      xDist = { About: 300, More: 230, Experience: 70, Contact: -30 };

      gsap.to(navLink, {
        y: h - 120,
        x: xDist[navName],
        fontWeight: "bold",
        scale: 10,
        transformOrigin: "center",
      });

      //  divToDisplay.classList.remove("hidden");
      navLink.classList.add("backText");
    } else {
      navLink.classList.remove("backText");

      // divToDisplay.classList.add("hidden")
      navLink.classList.add("animate"); // Remove animation class from other links
      gsap.to(navLink, {
        y: 0,
        x: 0,
        fontWeight: "normal",
        scale: 1,
        transformOrigin: "center",
      });
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
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const lettersArray = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(97 + index)
);

var loader = document.querySelector("#loader");
var loaderText = document.querySelector(".loader-text");

var firstText = "Solutions Engineer".split("").slice(1);
var secondText = "Sahil".slice(1);

var randomArray = [];
for (var i = 0; i < firstText.length; i++) {
  var max = 25;
  var min = 5;
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  randomArray.push(randomNumber);
  min = randomNumber + 1;
}

randomArray.sort(function (a, b) {
  return a - b;
});

for (let i = 0; i < firstText.length; i++) {
  var char = firstText[i];

  var aToz = shuffleArray(lettersArray);
  var span = document.createElement("span");
  span.className += "loader-text-spans flex";

  extraTimes = randomArray[i];
  if (char == " ") {
    extraTimes++;
  }

  for (let j = 0; j < extraTimes; j++) {
    const extra = aToz[j];
    var childSpan = document.createElement("span");
    childSpan.innerText = extra;
    childSpan.className += "loader-text-span";
    span.appendChild(childSpan);
  }
  var childSpan = document.createElement("span");
  childSpan.innerText = char;
  childSpan.className += "loader-text-span";
  span.appendChild(childSpan);

  loaderText.appendChild(span);
}

var loaderTimeline = gsap.timeline()
loaderTimeline.from(loaderText.querySelectorAll(".loader-text-spans"), {
  y: "100%",
  duration: 1,
  stagger: 0.2,
  ease: "power2",
});
loaderTimeline.to(document.querySelector('.loader'), {
  y: "-100%",
  duration: 0.5,
  delay: 1,
  ease: "power2",
})
loaderTimeline.to(document.querySelector('.loader-back-a'), {
  y: "-100%",
  duration: 0.5,
  delay: -0.4,
  ease: "power2",
})
loaderTimeline.to(document.querySelector('.loader-back-b'), {
  y: "-100%",
  duration: 0.2,
  delay: -0.1,
  ease: "power2",
})
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
  .addEventListener("mouseout", function () {
    document.querySelectorAll(".shake-span").forEach(function (span) {
      span.style.transform = "rotate(0)";
    });
  });

/*=============== Button Animation ===============*/
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.onmousemove = function (e) {
    const x = e.pageX - button.offsetLeft;
    const y = e.pageY - button.offsetTop;

    button.style.setProperty("--x", x + "px");
    button.style.setProperty("--y", y + "px");

    var sound = new Audio("./assets/sound/whoosh.mp3");

    if (!isSoundPlaying) {
      sound.volume = 0.1;

      sound.play().then(function () {
        isSoundPlaying = true;
        sound.onended = function () {
          isSoundPlaying = false;
        };
      });
    }
  };
});

/*===================== GSAP =================*/
// const butn = document.querySelector(".button");

// gsap.to(butn, { x: 200,
// repeat: -1,
//   yoyo: true })

/*===================== Conntact form =================*/
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

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
          `<span>` + data.result + `<box-icon name='tick'></box-icon></span>`;
        setTimeout(() => {
          document.querySelector("#contactButton").innerHTML = oldHtml
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
      });
  });

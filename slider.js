let track = document.querySelector(".slider__track");
let slides = document.querySelectorAll(".slide");
let dotsBox = document.querySelector(".slider__dots");
let current = 0;

track.prepend(slides[slides.length - 1].cloneNode(true));
track.append(slides[0].cloneNode(true));
track.style.transform = "translateX(-100%)";

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("button");
  dot.className = "slider__dot";
  dot.onclick = function () {
    showSlide(i);
  };
  dotsBox.appendChild(dot);
}

function showSlide(number) {
  current = number;
  track.style.transform = "translateX(-" + (current + 1) * 100 + "%)";
  updateDots();
}

function updateDots() {
  let dots = document.querySelectorAll(".slider__dot");

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = "slider__dot";
  }

  dots[current].className = "slider__dot active";
}

document.querySelector(".slider__control--next").onclick = function () {
  showSlide(current + 1);
};

document.querySelector(".slider__control--previous").onclick = function () {
  showSlide(current - 1);
};

track.ontransitionend = function () {
  if (current == slides.length) {
    current = 0;
    track.style.transition = "none";
    track.style.transform = "translateX(-100%)";
    setTimeout(function () {
      track.style.transition = "transform 0.4s";
    }, 0);
  }

  if (current == -1) {
    current = slides.length - 1;
    track.style.transition = "none";
    track.style.transform = "translateX(-" + slides.length * 100 + "%)";
    setTimeout(function () {
      track.style.transition = "transform 0.4s";
    }, 0);
  }

  updateDots();
};
updateDots();

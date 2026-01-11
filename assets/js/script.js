// Dark/Light Theme Switch Function

let body = document.body;
let toggle = document.getElementById("theme-switch");
let toggleText = document.querySelector("#theme-toggle .theme-text");


toggle.addEventListener("change", function () {
  if (toggle.checked === true) {
    body.classList.add("theme-light")
    toggleText.textContent = "Light"
  } else {
    body.classList.remove("theme-light")
    toggleText.textContent = "Dark"
  }
})

// Back To Top Button

let backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Section Nav Interactivity

let sectionLinks = document.querySelectorAll(".section-link");

// Smooth Scroll 

for (let i = 0; i < sectionLinks.length; i++) {
  sectionLinks[i].addEventListener("click", function (event) {
    event.preventDefault();

    let targetSection = document.querySelector(sectionLinks[i].getAttribute("href"))

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  })
}

// Highlight active section on scroll
window.addEventListener("scroll", function () {
  for (let i = 0; i < sectionLinks.length; i++) {
    let targetSection = document.querySelector(sectionLinks[i].getAttribute("href"));
    let box = targetSection.getBoundingClientRect();

    if (box.top <= 150 && box.bottom >= 150) {
      sectionLinks[i].classList.add("active");
    } else {
      sectionLinks[i].classList.remove("active");
    }
  }
});
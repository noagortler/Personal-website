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

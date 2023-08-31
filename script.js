const images = document.querySelectorAll(".slider img");
const progressDotsContainer = document.querySelector(".progress-dots");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentIndex = 0;
let intervalId;

function showImage(index) {
  images.forEach((image, idx) => {
    if (idx === index) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
}

function updateProgressDots(index) {
  progressDotsContainer.innerHTML = "";
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("progress-dot");
    if (i === index) {
      dot.classList.add("active");
    }
    progressDotsContainer.appendChild(dot);
  }
}

function goToSlide(index) {
  currentIndex = index;
  showImage(currentIndex);
  updateProgressDots(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  goToSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  goToSlide(currentIndex);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

function startAutoSlide() {
  intervalId = setInterval(nextSlide, 4000); // Change slide every 3 seconds
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

startAutoSlide();
goToSlide(currentIndex); // Show the first slide initially

// ddebut du script pour les formulaires de login

//exemple 1
const loginLink = document.getElementById("loginLink");
const showSignupLink = document.getElementById("showSignup");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

function showForm(form) {
  form.classList.remove("hidden");
}

function hideForm(form) {
  form.classList.add("hidden");
}

loginLink.addEventListener("click", function (event) {
  event.preventDefault();
  showForm(loginForm);
  hideForm(signupForm);
});

showSignupLink.addEventListener("click", function (event) {
  event.preventDefault();
  showForm(signupForm);
  hideForm(loginForm);
});

hideForm(loginForm);
hideForm(signupForm);

//exemple  2
// const loginLink = document.getElementById("loginLink");
// const showSignupLink = document.getElementById("showSignup");
// const loginForm = document.getElementById("loginForm");
// const signupForm = document.getElementById("signupForm");
// const overlay = document.querySelector(".overlay");

// function showForm(form) {
//   form.classList.remove("hidden");
//   overlay.classList.add("active"); // Activer l'overlay
// }

// function hideForm(form) {
//   form.classList.add("hidden");
//   overlay.classList.remove("active"); // Désactiver l'overlay
// }

// loginLink.addEventListener("click", function (event) {
//   event.preventDefault();
//   showForm(loginForm);
//   hideForm(signupForm);
// });

// showSignupLink.addEventListener("click", function (event) {
//   event.preventDefault();
//   showForm(signupForm);
//   hideForm(loginForm);
// });

// hideForm(loginForm);
// hideForm(signupForm);

//This is the picture Slideshow js
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < 9; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
//end slidshow js

// Menu button js
function redirectToShop() {
    // Replace the URL with the desired destination
    window.location.href = "https://thebigbeansevernapark.square.site/s/shop";
  }

//Contact Us Form Autofill
document.addEventListener("DOMContentLoaded", function () {

  let storedName = localStorage.getItem("name");
  let storedEmail = localStorage.getItem("email");
  let storedSubject = localStorage.getItem("subject");
  let storedMessage = localStorage.getItem("message");

  if (storedName) document.getElementById("name").value = storedName;
  if (storedEmail) document.getElementById("email").value = storedEmail;
  if (storedSubject) document.getElementById("subject").value = storedSubject;
  if (storedMessage) document.getElementById("message").value = storedMessage;
});

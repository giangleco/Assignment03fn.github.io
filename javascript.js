document
  .getElementById("email-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const emailValue = document.getElementById("exampleInputEmail1").value;
    const checkMail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const check = checkMail.test(emailValue);
    if (check) {
      document.querySelector(".form-group").style.display = "none";
      document.querySelector("#personal-info").style.display = "block";
    } else {
      alert("Please enter a valid email address.");
    }
  });

let infocontent = document.querySelectorAll(".info-content");
let ViewMoreBtn = document.querySelectorAll(".viewmore");
let hidden = document.querySelectorAll(".hidden");
let viewless = document.querySelectorAll(".viewless");
//viewmore
for (let i = 0; i < 6; i++) {
  ViewMoreBtn[i].addEventListener("click", function () {
    ViewMoreBtn[i].classList.add("hidden");
    infocontent[i].classList.remove("hidden");
    viewless[i].classList.remove("hidden");
  });
}
//viewless

for (let i = 0; i < 6; i++) {
  viewless[i].addEventListener("click", function () {
    viewless[i].classList.add("hidden");
    ViewMoreBtn[i].classList.remove("hidden");
    infocontent[i].classList.add("hidden");
  });
}

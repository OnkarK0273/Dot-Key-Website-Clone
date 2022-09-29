import { navbar } from "./components/navbar.js";
let navbar_div=document.getElementById("navbar");

navbar_div.innerHTML = navbar();
let btn=document.getElementById("theButton");
btn.addEventListener("click",function(){
  clicked()
  // console.log("hii")
})

function clicked() {
    var text = document.getElementById("popup");
    text.classList.toggle("hide");
    text.classList.toggle("show");
  }

let form = document.querySelector("form");

let signinLS = JSON.parse(localStorage.getItem("signup")) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    name: form.name.value,
    last: form.lastname.value,
    email: form.email.value,
    password: form.password.value,
  };
  let flag = true;
  for (let i in obj) {
    if (obj[i] == "") {
      flag = false;
    }
  }
  if (flag == false) {
   alert("Field Empty");
  } else {
    signinLS.push(obj);
    localStorage.setItem("signup", JSON.stringify(signinLS));
    window.location.href="login.html"
  }
});
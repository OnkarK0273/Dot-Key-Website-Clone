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
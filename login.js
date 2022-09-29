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

let form= document.querySelector("form");
    
let signinLS= JSON.parse(localStorage.getItem("signup")) || [];

form.addEventListener("submit",function(e){
    e.preventDefault();
    if(signinLS.length===0){
        alert("User does not Exist")
        return;
    }

    let obj ={
        email:form.email.value,
        password:form.password.value,
    }
    let flag=false;
    signinLS.forEach(function(el) {
        if(el.email===obj.email && el.password===obj.password){
            flag=true;
            localStorage.setItem("signin",JSON.stringify(el));
            alert("Sign Up Successful");
            window.location.href="./Home/home.html"; 
        }
    });
    if(flag===false){
        alert("User does not Exit");
    }
})
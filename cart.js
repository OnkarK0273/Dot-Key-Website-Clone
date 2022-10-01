import { navbar } from "./components/navbar.js";
let navbar_div=document.getElementById("navbar");

navbar_div.innerHTML = navbar();

let arr = JSON.parse(localStorage.getItem("addtocard")) || []

let container = document.getElementById("container");

let totalPrice = document.getElementById("total-price");


function Display(data) {
    container.innerHTML = null;
    let total = 0;

    data.forEach(function (elem, index) {
        total += Number(elem.price);
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("src", elem.img);

      let title = document.createElement("p");
      title.textContent = elem.name;

      let price = document.createElement("p");
      price.textContent = elem.price;

      let size = document.createElement("p");
      size.textContent = elem.size;


      let removebtn = document.createElement("button");
      removebtn.textContent = "Delete";
      removebtn.setAttribute("id","del")
      removebtn.addEventListener("click", function () {
        DeleteCart(index);
        console.log("hii")
      });

      div.append(img,title, price, size,removebtn);

      container.append(div);
    });
    totalPrice.textContent = total;
    localStorage.setItem("cartprice",JSON.stringify(total));
  }
  Display(arr)

  function DeleteCart(index) {
    let arr = JSON.parse(localStorage.getItem("addtocard")) || []
    let deletedCart = arr.filter(function (el,i) {
      return i != index;
    });
    localStorage.setItem("addtocard", JSON.stringify(deletedCart));
    Display(deletedCart)
  }

  let check=document.getElementById("checkout");

   check.addEventListener("click",function(){
         window.location.href="information-page.html";
   })


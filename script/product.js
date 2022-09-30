



let productData = JSON.parse(localStorage.getItem("productData"))
let count = 0
const append = (data)=>{

    
    let img1 = data.img1
    let img2 = data.img2
    let img3 = data.img3
    
    let product_name = data.product_name
    
    let price_new = data.price_new
    
    let benifets1 = data.benifets1
    let benifets2 = data.benifets2
    let benifets3 = data.benifets3
    let benifets4 = data.benifets4
    let benifets5 = data.benifets5

    let poster1 = data.poster1
    let poster2 = data.poster2
    let poster3 = data.poster3

    let slider1 = data.slider1
    let slider2 = data.slider2
    let slider3 = data.slider3

    
    
    // image section--------------------------------------------------------------------
    let div = document.querySelector(".container")
    // creat 4 divs

    // first 3 div in thier img childs
    let div1 = document.createElement("div")
    div1.className = "mySlides"

    let image1 = document.createElement("img")
    image1.id = 
    image1.src = img1
    image1.style.width = "100%"

    div1.append(image1)

    // fourth div 

    let div4 = document.createElement("div")
    div4.className = "row"

    // fourt div has 3 child divs

    let ch1 = document.createElement("div")
    ch1.className = "column"

        // each div has another img child
        let ch1img = document.createElement("img")
        ch1img.src = img1
        ch1img.className = "demo cursor"
        ch1img.id = "column1"
        ch1img.style.width = "100%"

        ch1img.addEventListener("click",()=>{
         image1.src = img1
         div1.append(image1)
        })

        // append img into ch1
        ch1.append(ch1img)

    let ch2 = document.createElement("div")
    ch2.className = "column"

        // each div has another img child
        let ch2img = document.createElement("img")
        ch2img.src = img2
        ch2img.className = "demo cursor"
        ch2img.id = "column2"
        ch2img.style.width = "100%"

        ch2img.addEventListener("click",()=>{
         image1.src = img2
         div1.append(image1)
        })

        // append img into ch2
        ch2.append(ch2img)

    let ch3 = document.createElement("div")
    ch3.className = "column"

        // each div has another img child
        let ch3img = document.createElement("img")
        ch3img.src = img3
        ch3img.className = "demo cursor"
        ch3img.id = "column3"
        ch3img.style.width = "100%"

        ch3img.addEventListener("click",()=>{
         image1.src = img3
         div1.append(image1)
        })

        // append img into ch3
        ch3.append(ch3img)

    // append ch1.ch2,ch3 into div4

    div4.append(ch1,ch2,ch3)

    // div1,div2,div3,div4 into main div

    div.append(div1,div4)

    // product details section----------------------------------------------------------------------------
  let detailDiv = document.querySelector(".details")

  let pname = document.createElement("h1")
  pname.innerText = product_name
  pname.style.color = "#3C3C3C"

  let revDiv = document.createElement("div")
  revDiv.innerHTML = `<img src="./pic/review.png"  width="40% alt="">`

  let pprice = document.createElement("p")
  pprice.innerText = `Rs:${price_new}.00`
  pprice.style.marginBottom = "0"
  pprice.style.color = '#FF6781'
  pprice.style.fontSize = "25px"

  let tax = document.createElement("small")
  tax.innerText = "Inclusive of All Taxes"

  let size = document.createElement("div")
  size.id = "size"

  let first = document.createElement("div")
  first.id ="first"
  first.innerText = "60ml"

  let second = document.createElement("div")
  second.id = "second"

  let minus = document.createElement("div")
  minus.id = "minus"
  minus.innerText = "-"
  minus.style.cursor = 'pointer'

  let num = document.createElement("div")
  num.id = "num"
  num.innerText = 0

 let plus = document.createElement("div")
 plus.id = "plue"
 plus.innerText = "+"
 plus.style.cursor = 'pointer'

 // num fun---
 plus.addEventListener("click",()=>{
    
    num.innerText = count++
 })
 minus.addEventListener("click",()=>{
    
    num.innerText = count--
 })


 second.append(minus,num,plus)
 size.append(first,second)

 let addcard = document.createElement("button")
 addcard.innerText = "ADD TO CARD"
 addcard.style.width = "100%"
 addcard.style.backgroundColor = "#5C5C5C"
 addcard.style.color = "white"
 addcard.style.border = 'none'
 addcard.style.padding = "15px"
 addcard.style.cursor = 'pointer'

 let ul = document.createElement("ul")

 let li1 = document.createElement("li")
 li1.innerText = benifets1
 let li2 = document.createElement("li")
 li2.innerText = benifets2
 let li3 = document.createElement("li")
 li3.innerText = benifets3
 let li4 = document.createElement("li")
 li4.innerText = benifets4
 let li5 = document.createElement("li")
 li5.innerText = benifets5

 ul.append(li1,li2,li3,li4,li5)
  detailDiv.append(pname,revDiv,pprice,tax,size,addcard,ul)



  // poster 1 

 let poster_1 = document.querySelector("#poster1")

 let postr1img = document.createElement("img")
 postr1img.src = poster1
 postr1img.style.width = "100%"

 poster_1.append(postr1img)

 // sliders
 let slid = document.querySelector("#slider")

 let slidimg = document.createElement("img")
 slidimg.src = slider1
 slidimg.style.width = "100%"
 
 let p1 = document.querySelector("#text>#slide1")
 p1.addEventListener("click",()=>{
    
    slidimg.src = slider1
    slid.append(slidimg)
 })

 let p2 = document.querySelector("#text>#slide2")
 p2.addEventListener("click",()=>{
    
    slidimg.src = slider2
    slid.append(slidimg)
 })

 let p3 = document.querySelector("#text>#slide3")
 p3.addEventListener("click",()=>{
    
    slidimg.src = slider3
    slid.append(slidimg)
 })

 slid.append(slidimg)

 // poster 2
 let po2 = document.querySelector("#poster2")
 let po2image = document.createElement("img")
 po2image.src = poster2
 po2image.style.width = "100%"
 po2.append(po2image)

 // poster 3
 let po3 = document.querySelector("#poster3")
 let po3image = document.createElement("img")
 po3image.src = poster3
 po3image.style.width = "100%"
 po3.append(po3image)


}

append(productData)

// button working

import { navbar } from '../components/navbar.js';
let nav = document.getElementById("navbar")
nav.innerHTML = navbar()



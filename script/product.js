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
    image1.id = "slide1"
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
    p1.style.borderBottom = "1px solid black"
    slidimg.src = slider1
    slid.append(slidimg)
 })

 let p2 = document.querySelector("#text>#slide2")
 p2.addEventListener("click",()=>{
    p2.style.borderBottom = "1px solid black"
    slidimg.src = slider2
    slid.append(slidimg)
 })

 let p3 = document.querySelector("#text>#slide3")
 p3.addEventListener("click",()=>{
    p3.style.borderBottom = "1px solid black"
    slidimg.src = slider3
    slid.append(slidimg)
 })

 slid.append(slidimg)


}

append(productData)

// button working








/*
benifets1
: 
"72 Hr Probiotics Gel Moisturizer with Hyaluronic and Rice water "
benifets2
: 
"Strengthens skin’s barrier to retain moisture"
benifets3
: 
"Balances skin's microbiome and improves overall skin texture"
benifets4
: 
"Oil-free, lightweight, quick-absorbing gel moisturizer"
benifets5
: 
"Skin appears plump, hydrated and dewy"
img1
: 
"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/image_6483441_4_900x.jpg?v=1663398401"
img2
: 
"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3-Probiotics-Gel_360x.jpg?v=1663392956"
img3
: 
"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/6-Probiotics-Gel_360x.jpg?v=1663392956"
poster1
: 
"https://i.ibb.co/Zg6gmmq/poster1-4.png"
poster2
: 
"https://i.ibb.co/88yFRDj/poster2-4.png"
poster3
: 
"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/image_369.png?v=1660645343"
price_new
: 
"395"
product_name
: 
"72 HR Hydrating Probiotic Gel Moisturizer With Hyaluronic & Japanese Rice Water| For Healthy, Hydrated Skin| Normal to Oily Skin"
slider1
: 
"https://i.ibb.co/RHF5RqP/slider1-4.png"
slider2
: 
"https://i.ibb.co/vwBdHMB/slider2-4.png"
slider3
: 
"https://i.ibb.co/vd2Vr1h/slider3-4.png"
*/
import {total} from './components/append_data.js';
let product_data = document.getElementById('product-data')
product_data.innerHTML = total();

let LS_address = JSON.parse(localStorage.getItem('full-address'))

const addressData = (LS_address) => {
    let proper_address = document.getElementById('proper_address')

    proper_address.innerText = LS_address.address + ",  " + LS_address.apartment + ",  " + LS_address.city + ",  " + LS_address.state + ",  " + LS_address.country;
}
addressData(LS_address)

let btn = document.getElementById('continue_shopping')
btn.addEventListener('click', () => {
    getData()
})
function getData() {
    window.location.href='payment.html'
}


let signinLS= JSON.parse(localStorage.getItem("signup"))
// console.log(signinLS)


function append_email(signinLS) {
    let email_id = document.getElementById('login_email')
    signinLS.forEach(el => {
        email_id.innerText = (el.email);
    });
}
append_email(signinLS)


let cartData = JSON.parse(localStorage.getItem('addtocard'))
console.log("🚀 ~ cartData", cartData)
let total_amount = document.getElementById('total_cash')
let rupee = document.getElementById('rupee')
let sum = 0;
function cartDataAppend(cartData) {
    let product_data = document.getElementById('append_cart_data')
    cartData.forEach(function(el){
        sum += Number(el.price);
        let div = document.createElement('div')
        div.id = 'cart-div';
        let img = document.createElement('img')
        img.src = el.img;
        let name = document.createElement('p')
        name.id = 'cart-text'
        name.innerText = el.name;
        let price = document.createElement('p')
        price.id = 'prize'
        price.innerText = el.price;

        div.append(img, name, price)
        product_data.append(div)
    })
   rupee.innerText = '₹' + sum+".00";
    total_amount.innerText = 'INR '+ '₹' + sum+'.00';
}
cartDataAppend(cartData)


let apply = document.getElementById('apply')
apply.addEventListener('click', function(el){
    discount()
})

function discount() {
    let code = document.getElementById('discount-code').value;
    
        if (code==4455) {
          sum = sum-250;
        alert('Congrats! You Have Decrease the Total Amount to ₹250')
            
        }
        rupee.innerText = '₹' + sum+".00";
            total_amount.innerText = 'INR '+ '₹' + sum+'.00';
}
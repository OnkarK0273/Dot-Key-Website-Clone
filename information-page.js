import {total} from './components/append_data.js';
let product_data = document.getElementById('product-data')
product_data.innerHTML = total();

let signinLS= JSON.parse(localStorage.getItem("signup"))
// console.log(signinLS)


function append_email(signinLS) {
    let email_name = document.getElementById('email_name')
    let email_id = document.getElementById('email_id')
    signinLS.forEach(el => {
        email_name.innerText = el.name;
        email_name.style.textTransform='Uppercase'
        email_id.innerText = (el.email);
    });
}
append_email(signinLS)

function constructor(co,a,ap,c,s,p,n) {
    this.country = co;
    this.address = a;
    this.apartment = ap;
    this.city = c;
    this.state = s;
    this.pin_code = p;
    this.number = n;
}
let btn = document.getElementById('continue_shopping')
btn.addEventListener('click', () => {
    getData()
})

const getData = () => {
    let country = document.getElementById('country').value;
    let address = document.getElementById('address').value;
    let apartment = document.getElementById('apartment').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let pin = document.getElementById('pin_code').value;
    let number = document.getElementById('number').value;

    let c1 = new constructor(country,address,apartment,city,state,pin,number)
    
console.log(c1)
    if (address=='' || apartment=='' || city=='' || pin=='' || number=='') {
        alert('Fill the address')
    }
    else {
        window.location.href='shipping_page.html'
    }
    localStorage.setItem('full-address',JSON.stringify(c1))

}


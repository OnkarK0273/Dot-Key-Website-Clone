import {total} from './components/append_data.js';
let product_data = document.getElementById('product-data')
product_data.innerHTML = total();


let LS_address = JSON.parse(localStorage.getItem('full-address'))

const addressData = (LS_address) => {
    let proper_address = document.getElementById('proper_address')

    proper_address.innerText = LS_address.address + ",  " + LS_address.apartment + ",  " + LS_address.city + ",  " + LS_address.state + ",  " + LS_address.country;
}
addressData(LS_address)


let signinLS= JSON.parse(localStorage.getItem("signup"))
// console.log(signinLS)


function append_email(signinLS) {
    let email_id = document.getElementById('login_email')
    signinLS.forEach(el => {
        email_id.innerText = (el.email);
    });
}
append_email(signinLS)
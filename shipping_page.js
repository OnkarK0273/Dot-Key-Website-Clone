
let LS_address = JSON.parse(localStorage.getItem('full-address'))

const addressData = (LS_address) => {
    let proper_address = document.getElementById('proper_address')

    proper_address.innerText = LS_address.address + ",  " + LS_address.apartment + ",  " + LS_address.city + ",  " + LS_address.state + ",  " + LS_address.country;
}
addressData(LS_address)
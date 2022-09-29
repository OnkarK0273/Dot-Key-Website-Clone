function constructor(a,ap,c,s,p) {
    this.address = a;
    this.apartment = ap;
    this.city = c;
    this.state = s;
    this.pin_code = p;
}
let btn = document.getElementById('continue_shopping')
btn.addEventListener('click', () => {
    getData()
})


const getData = () => {
    let address = document.getElementById('address').value;
    let apartment = document.getElementById('apartment').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let pin = document.getElementById('pin_code').value;

    let c1 = new constructor(address,apartment,city,state,pin)
    console.log("🚀 ~ getData ~ c1", c1)

    localStorage.setItem('full-address',JSON.stringify(c1))

}


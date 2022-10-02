
const navbar = ()=>{

    return `<div>
    <div>
      <i class="fi fi-rr-menu-burger"></i>
    </div>
    <div>
    <a href="./index.html"> <img
    src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?v=1646547348"
    alt=""
  /></a>
    </div>
    <div class="right">
      <button id="theButton">
        <i class="fi fi-rr-search"></i>
      </button>
      <input type="text" name="popup" id="popup" class="hide" />
      <button class="button1"><a href="location.html"> <i class="fi fi-rs-marker"></i></a></button>
      <button class="button1"><a href="cart.html"><i class="fi fi-rr-shopping-bag"></i></a></button>
      <button class="button1"><a href="signin.html"><i class="fi fi-rr-user"></i></a></button>
    </div>
  </div>`;
}

export {navbar}



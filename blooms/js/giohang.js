const cartProduct = document.getElementsByClassName("cart-product")[0];
const products = document.getElementById("cart-product")
const title = '<div class="title">Added to cart</div>'
const added = '<div class="added"></div>'
const purchase = `<div class="purchase">
<p class="exceed"></p>
<div class="infor">
    <button onclick="infor()">Purchase</button>
</div>
</div>`
const empty = document.getElementById("empty")

const cartItems = [];

function appear() {
    cartProduct.style.display = "block";
}

function disappear() {
    cartProduct.style.display = "none";
}

function addToCart(imgURL, name, price) {
  timg();

  if (!cartProduct.classList.contains("title") &&
    !cartProduct.classList.contains("added") &&
    !cartProduct.classList.contains("purchase")) {
    cartProduct.innerHTML = title + added + purchase;
  }

  const newProduct = creatProductTag(imgURL, name, price);

  cartItems.push(newProduct);

  updateProductsDisplay();
  updateExceedCount();
}

function updateExceedCount(){
  const exceedElement = cartProduct.querySelector('.exceed');
  const count = cartItems.length - 3;

  if (count > 0) {
    exceedElement.textContent = `${count} more products`
  } else {
    exceedElement.textContent = '';
  }
}

function updateProductsDisplay() {
  const productsElement = cartProduct.querySelector(".added");
  let currentProducts = '';
  const maxDisplay = Math.min(cartItems.length, 3);

  for (let i = 0; i < maxDisplay; i++){
    currentProducts += cartItems[i];
  }

  productsElement.innerHTML = currentProducts;
}

function creatProductTag(imgURL, name, price) {
  const product = `<div class="product">
  <img src="${imgURL}" alt="">
  <p class="name">${name}</p>
  <p class="price">${price}</p>
</div>`;

  return product;
}

function timg() {
  empty.style.display = "none";
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}
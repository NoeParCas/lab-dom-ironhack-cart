// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotalNumber = product.querySelector('.subtotal span');
  let total = document.querySelector('#total-value span');

  let priceNumberDOM = price.innerHTML;
  let quantityNumberDOM = quantity.value;

  // ITERATION 3
  subtotalNumber.innerHTML = priceNumberDOM * quantityNumberDOM;
  total.innerHTML = Number(total.innerHTML) + Number(subtotalNumber.innerHTML);
}

function calculateAll() {
  let total = document.querySelector('#total-value span');
  total.innerHTML = 0;
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let everyProduct = document.querySelectorAll('.product');
  //updateSubtotal(everyProduct);
  // end of test
  // ITERATION 2
  everyProduct.forEach(updateSubtotal);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

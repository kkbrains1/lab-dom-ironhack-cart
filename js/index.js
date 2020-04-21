// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const $price = product.querySelector('.price span');
  const $quantity = product.querySelector('.quantity input');
  const price = $price.innerText;
  //console.dir($price)
  //console.dir($quantity)
  const quantity = $quantity.value;
  const subTotal = price * quantity;
  //console.log(subTotal)
  //console.dir(subTotal)
  const $subTotal = product.querySelector('.subtotal span');
  //console.dir($subTotal)
  $subTotal.innerText = subTotal;
  return subTotal;
  //console.dir(subTotal)
  //console.log(subTotal)
  //... your code goes here
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  //const singleProduct = document.querySelector('.product span');
  //updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
/*   const $allProducts = document.getElementsByClassName('.product');
  console.log($allProducts);
  console.dir($allProducts);
  document.getElementsByClassName('.product').item
  */
  
  const $allProducts = document.querySelectorAll(".product");
  console.log($allProducts);
  
  let total = 0;
  for (let i = 0; i < $allProducts.length; i++) {
    //allProducts[i] --> This will be every product row
    total += updateSubtotal($allProducts[i]);
  }

  console.log(total);
  
  // ITERATION 3
  //... your code goes here

  const $totalPrice = document.querySelector('#total-value span');
  console.dir($totalPrice);
  $totalPrice.innerText =  total;



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

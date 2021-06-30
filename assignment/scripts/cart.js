console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item){
  basket.push(item);
  return true;
}

function listItems(){
  for (let i = 0; i < basket.length; i++){
    console.log(basket[i]);
  }
}

function empty(){
  basket = [];
}

function isFull(){
  if (basket.length < maxItems){
    return false;
  } else {
    return true;
  }
}

//Test addItem function
console.log(basket);
addItem('Pants');
addItem('Shoes');
addItem('Jacket');
console.log(basket);

//Test for listItem
listItems();

//Test for isFull
console.log('The cart is full:', isFull());
addItem('Socks');
addItem('Shirt');
console.log('The cart is full:', isFull());

//Test for empty
empty();
console.log(basket);

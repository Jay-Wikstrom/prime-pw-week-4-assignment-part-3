console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;


function addItem(item){
  while (isFull() === false){
    basket.push(item);
    return true;
  }
}

function listItems(){
  for (let i = 0; i < basket.length; i++){
    console.log('Item in my cart:', basket[i]);
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

function removeItem(item){
  const removedItem = basket.indexOf(item);
  if (removedItem > -1){
    basket.splice(removedItem, 1);
    console.log('The item you removed is', item);
  } else {
    console.log(`The item ${item} in not in the cart`);
  }
}

//Test addItem function
console.log('***** Test for addItem function *****');
console.log('Basket array is:', basket);
addItem('Pants');
addItem('Shoes');
addItem('Jacket');
console.log('Basket array is: ', basket);

//Test for listItem
console.log('***** Test for listItems function *****');
listItems();

//Test for isFull
console.log('***** Test for isFull function *****');
console.log('The cart is full:', isFull());
addItem('Socks');
addItem('Shirt');
console.log('The cart is full:', isFull());

//Test for if cart is full
console.log('***** Test for if cart is already full *****');
addItem('Sweater');
listItems();

//Test for removedItem
console.log('***** Test for removedItem function');
removeItem('Winter Jacket');
removeItem('Jacket');

//Test for empty
console.log('***** Test for empty function *****');
empty();
console.log('Basket array is:', basket);

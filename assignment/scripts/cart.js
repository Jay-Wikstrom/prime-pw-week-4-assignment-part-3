console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
  basket.push(item);
  return true;
}

//Test addItem function
console.log(basket);
addItem('Pants');
addItem('Shoes');
addItem('Jacket');
console.log(basket);

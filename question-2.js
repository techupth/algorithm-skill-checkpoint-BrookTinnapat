function findProductPrice(products, name) {
  // Your code here
  const right = products.length - 1;
  const left = 0;

  while (left <= right) {
    let mid = ;
    if (products.name === name) {
      return `name: ${products.name} price: ${products.price}`;
    } else if (products.name !== name) {
      left + 1;
      right - 1;
    }
  }
  return -1;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1

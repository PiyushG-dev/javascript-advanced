// Adding a custom method to Array.prototype
Array.prototype.customMethod = function () {
  // 'this' refers to the array calling this method
  // In this example, it would be the array on which you call customMethod
  console.log("This is a custom method added to Array.prototype");
  console.log("Array length:", this.length);
};

// Using the custom method on an array
const myArray = [1, 2, 3];
myArray.customMethod(); // Output: This is a custom method added to Array.prototype
//         Array length: 3

// Accessing existing methods on Array.prototype
const anotherArray = [4, 5, 6];
console.log(anotherArray.toString()); // Output: 4,5,6

// Adding properties to Array.prototype (not recommended)
Array.prototype.customProperty =
  "This is a custom property added to Array.prototype";

// Accessing the custom property
console.log(myArray.customProperty); // Output: This is a custom property added to Array.prototype

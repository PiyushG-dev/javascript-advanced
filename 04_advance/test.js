// for (let i = 0; i < 10; i++) {
//   let val = i;
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(`outer loop value: ${i}`);
//   for (let j = 0; j < 5; j++) {
//     console.log(`i * j = ${i * j}`);
//   }
// }
const arr = ["james", "phil", "hue", "max"];

for (let i = 0; i < arr.length; i++) {
  const val = arr[i];
  //   console.log(val);
}

// arr.forEach((item) => console.log(item));

// arr.map((item) => console.log(item));

const newArr = arr.map((item) => item + "s");

// console.log(newArr);

arr.forEach((item) => console.log(item + "s"));

console.log(arr);

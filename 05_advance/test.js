// Object oriented programming

// object literals

const user = {
  username: "James",
  age: 12,
  greet: function () {
    console.log(this.username);
  },
};

// user.greet();

// const arrow = () => {
//   const val = "hey i am an arrow fnc";
//   return val;
// };

// console.log(arrow());

function oldFnc(a, b) {
  return a * b;
}

// console.log(oldFnc(3, 6));

const newFnc = (a, b) => a * b;

// console.log(newFnc(8, 9));

// classes

// converting user object into a class:

class User {
  constructor(username, age) {
    (this.username = username), (this.age = age);
  }

  greet() {
    console.log(`${this.username} says hi`);
  }
}

const newUser = new User("phil", "16");

console.log(newUser);

console.log(newUser.greet());

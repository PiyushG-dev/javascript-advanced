class User {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  greetings() {
    return `hey ${this.name}`;
  }
}

class Admin extends User {
  constructor(name, age, isAccessAlowed) {
    super(name, age), (this.isAccessAlowed = isAccessAlowed);
  }
}

const userOne = new Admin("james", 18, true);
console.log(userOne.greetings());

console.log(userOne);

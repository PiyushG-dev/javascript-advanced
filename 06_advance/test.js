function User(username, isLoggedIn) {
  this.username = username;
  this.isLoggedIn = isLoggedIn;
  return this;
}

const userOne = new User("phil", true);

// console.log(userOne);

class Cred {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  greeting() {
    return `${this.name} hello`;
  }
}

const credOne = new Cred("james", 15);

console.log(credOne);

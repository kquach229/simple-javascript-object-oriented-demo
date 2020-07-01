// Create User constructor
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

/* What is a prototype? */
// A prototype stores all your methods
// Before classes, you had to specifically store your methods in the prototype object
// by using objectName.prototype.methodName 
// Classes store your methods automatically for you when you use the "class" keyword
// Every object has a prototype property

/* Why use prototypes? */ 
// Its more efficient because the methods do not need to be repeated
// over and over in each different instance. You can simply define it once
// and it will know to include the method inside the prototype property
// instead of directly in each and every instance. Whenever you want to use the 
// method, just call it like you normally would

// Create a prototype for login
User.prototype.login = function () {
    this.online = true;
    console.log(this.email + " has logged in");
}

// Create  a prototype for logout
User.prototype.logout = function () {
    this.online = false;
    console.log(this.email + " has logged out");
}


// Instantiate Users
var  userOne = new User("kenny335@gmail.com", "Kenny Quach");
var  userTwo = new User("jim@yahoo.com", "Jimmy Jones");

// Login User
userOne.login();
console.log(userOne)

// Logout User
userOne.logout()
console.log(userOne);




// What if we want to make multiple userObjects(ex: userTwo, userThree, ..etc) 
// instances without having to repeat ourselves? We create and use classes. When
// we create classes, we specify the keys that will go into prospective object instances
// and later on, specifying the values of those keys when we create those instances

// Create a single empty User class
// Add the constructor. The constructor function is what calls the class and creates the obect
// Pass in the arguments into the constructor
// Set the prospective keys to the arguments passed in
class User {
    constructor(email, name) {
        this.email = email,
        this.name = name,
        this.score = 0;
    }
    login() {
        console.log(this.email + " just logged in");
        return this;
    }
    logout() {
        console.log(this.email + " just logged out");
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email + "'s score is now " + this.score);
        return this;
    }
}

// Instantiate a new user
// The "new" keyword creates a new empty object, sets the value of "this" to be 
// the new empty object, and calls the constructor method
// Pass in the corresponding argument values
var userOne = new User("kenny335@gmail.com", "Kenny Quach");
console.log(userOne)
console.log(userOne.name);
console.log(userOne.email);

// Instantiate a second user instance
var userTwo = new User("bob@gmail.com", "Bob Johnson");
console.log(userTwo);
console.log(userTwo.name);
console.log(userTwo.email);

// Call the methods attached to the instances
userTwo.login();
userOne.logout();

// We can chain methods together because we returned the "this" keyword in 
// every method in the class. Remember, the "this" keyword holds the instance
// of that object. So it wont return a null value when you chain them together
userOne.login().updateScore().updateScore().logout();


// Create a new Admin class. This admin class will have all the properties and 
// methods that a user has AND extra methods such as deleting a user. 
// Here we use the "extends" keyword to extend to the User class and inherit
// those properties and methods. Note, that we do not need to include an constructor
// because we will basically be using the same constructor as the User class
class Admin extends User {
    deleteUser(user) {
        users = users.filter(u=> {
            return u.email !== user.email
        })
    }
}

// Instabtiate a new instance of admin and pass in the parameters
var admin = new Admin("Corey@gmail.com", "Corey James");

// Create an array of users
var users = [userOne, userTwo, admin];

// Delete userTwo using the admin's delete method
admin.deleteUser(userTwo);
console.log(users);


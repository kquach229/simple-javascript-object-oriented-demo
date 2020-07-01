// Create an object literal that contains properties and methods
var userOne = {
    email: "kenny335@gmail.com",
    name: "Kenny",
    signIn() {
        console.log(this.name + " has logged in at " + Date.now())
    },
    logOut() {
        console.log(this.name + " has logged out")
    }
}

// Get userOne's name using the dot notation
console.log(userOne.name);

// Change the name using the dot notation
userOne.name = "Kenny Quach";
console.log(userOne.name);

// Calling the signIn method using the dot notation
console.log(userOne.signIn());

// Calling the signOut method using the dot notation
console.log(userOne.logOut());

// Get the email using bracket notation
console.log(userOne["email"]);

// Change the email using bracket notation
userOne["email"] = "newemail@gmail.com";
console.log(userOne.email)

/* Which Notation To Choose? */
// Use the dot notation for static variables
// Use the bracket notation for dynamic variables

// EX: 

// The following will output data based on what the prop is. We set the prop to name,
// so it will output the name. This is useful if you dont know which value to extract yet
var prop ="name";
userOne[prop];
console.log(userOne[prop]);

// As you can see, we are changing the value of the prop. So instead of looking for the
// name value of userOne, we are looking for the email value of userOne this time
prop = "email";
userOne[prop];
console.log(userOne[prop]);



// Creating a new propertie in userOne
userOne.experience = "3 years";
console.log(userOne);

// Creating a new property using bracket notation
userOne["age"] = "25";
console.log(userOne);

// Creating a new array within the userOne object using dot notation
userOne.cities = ["NYC", "JC", "Chicago"];
console.log(userOne);

// Creating a new array within the userOne object using bracket notation
userOne["languages"] = ["HTML", "CSS", "JavaScript"]
console.log(userOne);

// Creating a new object in the userOne object using the dot notation
userOne.books = {
    bookId: "123",
    bookName: "Coding",
    Author: "Steven Spielberg"
}
console.log(userOne)

// Creating a new object in the userOne object using bracket notation
userOne["schools"] = {
    id: "123",
    schoolName: "MLK"
}
console.log(userOne);

// Creating a new method in the userOne object using the dot notation
userOne.attendMeeting = function() {
    console.log("Attending Meeting");
}
console.log(userOne);

// Create a new method in the userOne object using the bracket notation 
userOne["leaveMeeting"] = function() {
    console.log("Leaving meeting...");
}
console.log(userOne);



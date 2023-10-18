//Creating a user object
function User(name, age, favoriteColor) {
    this.name = name;
    this.age = age;
    this.favoriteColor = favoriteColor;

    // Testing an object function
    this.innerHTML = () => {
        return "Name: " + this.name + "<br>Age: " + this.age + "<br>Favorite Color: " + this.favoriteColor;
    }
}

//Making this a function means that I can use a button to prompt.
function getUserInformation() {
  // Prompt the user for name, age, and favorite color
  var name = prompt("Please enter your name:");
  var age = prompt("Please enter your age:");
  var color = prompt("Please enter your favorite color:");

  //Check whether values are falsy e.g (null, undefined, NaN, 0)
  if (!name || !age || !color)
    return;

  let user = new User(name, age, color); 

  // Format a string with the user's information
  let userInfo = user.innerHTML();

  // Display the user's information inside a div tag with the id "user-info"
  // This is best practice because document.write() will just append it to the root of the document.
  document.getElementById("user-info").innerHTML = userInfo;
}

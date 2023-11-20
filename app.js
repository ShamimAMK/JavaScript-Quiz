// Quiz One
const time = 9;
// Check if it's morning (from 6 AM to 11:59 AM)
if (time >= 6 && time < 12) {
  console.log("It's morning. Time to feed the animals in the morning!");
} else {
  // If it's not morning, assume it's afternoon
  console.log("It's afternoon. Time to feed the animals in the afternoon!");
}
// End of Quiz One

// Quiz Two
const persons = 5;
const weight = 500;
// If number of persons are below 5 and total weights of person's are 500 KGs then they can cross the river safely, otherwise not.
if (persons <= 5 && weight <= 500) {
  console.log("People on the Boat can cross the river safely!");
} else {
  console.log(
    "Its exceed the weight limits of the boat. People on the Boat CANNOT cross the river safely!"
  );
}
// End of Quiz Two

//Quiz Three
const personName = "John";
const favoriteHobby = "playing guitar";
// Generate the message
const message = `Hi, my name is ${personName}. And my favorite hobby is ${favoriteHobby}`;

// Display the message will be like this; "Hi, my name is _________. My favorite hobby is _________."
console.log(message);
//End of Quiz Three

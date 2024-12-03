const myHouse = {
    stories: 2,
    parking: false,
    bedrooms: 2, 
    garden: true,
    energyEffiency: "D"
} 

const myCar = {
    color: "red",
    wheels: 4,
    powerSteering: true,
    seats: 2,
    mpG: 20

} 

const myFavouriteFilm = {
    title: "The Dark Knight",
    releaseDate: 2008,
    leadActor: "Christian Bale"
}

let person = {
    name: "Ben",
    likesChocolate: false,
  };

  console.log(person.likesChocolate)

  //Then write an if statement that will console.log "Ben loves chocolate" 
 // if likesChocolate has a value of true 
 // else console.log "Ben hates chocolate". 
  //The condition for the if, and the name Ben should both be read from the object using dot notation.


  if (person.likesChocolate == true) {
     console.log(person.name + " " + "loves chocolate"  );
   } else {
    console.log(person.name + " " + "hates chocolate")
  }

// the desired pleasantry is greeting, I want to find a way of linking that to the bensPhrases property greeting. 
//I can then log the desired pleasanty in console log. I want it to change to a different property When I change the value of the desired pleasantry.

let desiredPleasantry = "greeting";  

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

console.log(bensPhrases["smallTalk"])
 


console.log(bensPhrases["greeting"])
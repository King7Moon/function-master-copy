//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: An Object (it can be anything)
// O: return its values in the form of an array
// C: 
// E:

// By "returns values--" does it mean integer values or convert everything from the obj into an array?
// this was pretty simple. I was really over thinking it. There are built in methods that make things easier

function objectValues(object) {
    return Object.values(object);
} 


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: An Object
// O: returns all it's keys in a string
// C: each key needs a space
// E:

function keysToString(object) {
return Object.keys(object).join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: takes in an object
// O: returns (the objects??) string values 
// C: seperate return strings with spaces
// E:

function valuesToString(object) {
    // iterate through the objects values
  var array = [];
    for (let banana in object){ // loop through the objects values
        // check the type. value = each iteration of values
    let value = object[banana]
    if (typeof value === "string"){
      array.push(value);
    } // push does not work on strings. it only works on arrays
  } return array.join(" ");
  // if the the type of values are a string
  
  
  // return the object strings seperate by space. use join method
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I:
// O: returns "array" or "object", if it is
// C:
// E:

// This works but what if i gave you a number, NaN, null, or a primitive value?
function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return "array";
    } else {
        return "object";
    }
}






//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I:
// O:
// C:
// E:

function capitalizeWord(string) {
    // access the strings first letter
    // I know that it would be string[0]
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: string of words
// O: return a string with all words capitalized
// C: toUpperCase method
// E:

// capitalize does not mean uppercase all 
function capitalizeAllWords(string) {
  // take the string apart
  let word = string.split(" ");

  // loop 
  for (let i = 0; i < word.length; i++){
    if (word[i].length > 0){
        word[i] = word[i][0].toUpperCase() + word[i].slice(1);
    } 
  } return word.join(" ");


}





//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: An object with a name property
// O: returns 'Welcome <name>!'
// C:
// E:

// option one
// we need to convert the object into an array
// then convert the first letter of the name
// the name must be returned capitalized

function welcomeMessage(object) {
//

// I was wondering why it was only capitalizing one name and not all of the names
// but that does not really seem like it was part of the directions but it was out of curiosity. 
for(var value of Object.values(object)){
  if (typeof value === "string"){
   var nana = value[0].toUpperCase() + value.slice(1)
  }
} return "Welcome " + nana + "!";
}


  //return 'Welcome ' + Object.values(object) + '!';







//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: takes an object
// O: returns "<Name> is a <Species>"
// C: Name and species must be capitalized? 
// E:


// It does not sound like we need a loop. 

// create variables representing CAP of name and species
function profileInfo(object){
  let nameW = object.name;
  let speciesW = object.species;
  
  let nameX = nameW[0].toUpperCase() + nameW.slice(1);
  let speciesX = speciesW[0].toUpperCase() + speciesW.slice(1);
  
  return nameX + " is a " + speciesX;
}





//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: takes an object
// O: IF the obj has a noises array return
//        them as a string sep by spaces
// C: if there are no noises, return "thre no noises"
// E:

function maybeNoises(object) {
if (object.noises && object.noises.length > 0){
  return object.noises.join(" ")
} else {
  return "there are no noises"
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I:
// O:
// C:
// E:

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I:
// O:
// C:
// E:

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I:
// O:
// C:
// E:

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I:
// O:
// C:
// E:

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I:
// O:
// C:
// E:

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I:
// O:
// C:
// E:

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I:
// O:
// C:
// E:

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
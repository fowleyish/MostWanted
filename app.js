"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      searchResults = searchByGender(people);
      // TODO: search by traits
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    let descendantsArray = getDescendants(person, people);
    alert(descendantsArray.map(x => x.firstName + ' ' + x.lastName));
    mainMenu(person, people);
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

// returns person object searched by firstName and lastName; null, if not found.
function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
<<<<<<< HEAD

  if(foundPerson.length == 0)
    foundPerson = null;
  else
    foundPerson = foundPerson[0];

=======
  if (foundPerson.length == 1) {
    foundPerson = foundPerson[0];
  }
>>>>>>> 4fc5eedaaf6f627df72c0728ba0a3675acfb4e71
  return foundPerson;
}

// returns list of people searched by gender; otherwise, array size 0.
function searchByGender(people){
  let gender = promptFor("What is the person's gender?", maleFemale);

  let foundPeople = people.filter(function(person){
    if(person.gender === gender){
      return true;
    }
    else{
      return false;
    }
  })

  return foundPeople;
}

// returns list of people searched by date of birth (dob); otherwise, array size 0.
function searchByDOB(people){
  let dob = promptFor("What is the person's date of birth?", dateOfBirth);

  let foundPeople = people.filter(function(person){
    if(person.dob === dob){
      return true;
    }
    else{
      return false;
    }
  })

  return foundPeople;
}

// returns list of people searched by height; otherwise, array size 0.
function searchByHeight(people){
  let height = promptFor("What is the person's height (inches)?", numbers);

  let foundPeople = people.filter(function(person){
    if(person.height === height){
      return true;
    }
    else{
      return false;
    }
  })

  return foundPeople;
}

// returns list of people searched by weight; otherwise, array size 0.
function searchByWeight(people){
  let weight = promptFor("What is the person's weight (lbs)?", numbers);

  let foundPeople = people.filter(function(person){
    if(person.weight === weight){
      return true;
    }
    else{
      return false;
    }
  })

  return foundPeople;
}

// returns list of people searched by eye color; otherwise, array size 0.
function searchByEyeColor(people){
  let eyeColor = promptFor("What is the person's eye color?", eyeColors);

  let foundPeople = people.filter(function(person){
    if(person.eyeColor === eyeColor){
      return true;
    }
    else{
      return false;
    }
  })

  return foundPeople;
}

// returns list of people searched by occupation; otherwise, array size 0.
function searchByOccupation(people){
  let occupation = promptFor("What is the person's occupation?", chars);

  let foundPeople = people.filter(function(person){
    if(person.occupation === occupation){
      return true;
    }
    else{
      return false;
    }
  })

  return foundPeople;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

<<<<<<< HEAD
// helper function to pass into promptFor to validate male/female answers
function maleFemale(input){
  return input.toLowerCase() == "male" || input.toLowerCase() == "female";
}

// helper function to pass into promptFor to validate date of birth (dob)
function dateOfBirth(input){
  // TODO
  return true;
}

// helper function to pass into promptFor to validate number entries
function numbers(input){
  return parseInt(input) != NaN;
}

// helper function to pass into promptFor to validate eye color
function eyeColors(input){
  return input.toLowerCase() == "brown" || input.toLowerCase() == "black" || 
         input.toLowerCase() == "blue" || input.toLowerCase() == "hazel" ||  
         input.toLowerCase() == "green"  || input.toLowerCase() == "amber" || 
         input.toLowerCase() == "violet" || input.toLowerCase() == "red" || 
         input.toLowerCase() == "gray";
}

=======
// function to get descendants of a provided person
function getDescendants(person, people) {
  let descendants = people.filter(x => x.parents.includes(person.id))
  return descendants;
}
>>>>>>> 4fc5eedaaf6f627df72c0728ba0a3675acfb4e71

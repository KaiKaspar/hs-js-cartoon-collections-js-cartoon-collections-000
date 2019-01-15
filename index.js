function dwarfRollCall(dwarves) {
let listDwarves = [];
for (let i = 0; i < dwarves.length; i++) {
    listDwarves.push((i+1) + '. ' + dwarves[i] + ' '); //add to listDwarves
    }
  return listDwarves.join(""); //join objects in array and change to string 
}

function summonCaptainPlanet(planeteerCalls){
  let uppercasePlaneteerCalls = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    uppercasePlaneteerCalls.push(planeteerCalls[i].toUpperCase() + '!'); //add object and convert to upper case
  }
  return uppercasePlaneteerCalls; 
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    
    if (words[i].length>4) { //return true if more the 4 words
      return true;
    } else {
      return false; //return false if statement isnt true
    }
  }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === 'cheddar') { //if object in array equals a cheese return it
      return foods[i];
    }
  } return 'no cheese!'; //otherwise return "no cheese."
}
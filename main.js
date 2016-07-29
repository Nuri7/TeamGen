// var names = ["john", "fred", "melissa", "richard", "eric", "joey"]
var preNames = prompt("give me some space seperated names")
// var preNames = "john fred melissa eric john2 eric2 melissa2"
var names = preNames.split(" ");

var nameGenerator = function(arg, names ){
	if (arg == 1){
	return "team1: " + names[0] + " & " + names[1];
	}
	else if (arg == 2){
	return "team2: " + names[2] + " & " + names[3];
	}
	else if (arg == 3){
	return "team3: " + names[4] + " & " + names[5];
	}
	else if (arg == 4){
	return "team4: " + names[6] + " & " + names[7];
	}
	else if (arg == 5){
	return "team5: " + names[8] + " & " + names[9];
	}
	else if (arg == 6){
	return "team6: " + names[10] + " & " + names[11];
	}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

window.onload = function(){
	//this is an array with shuffled names
	var shuffledNames = shuffle(names);
	var firstTwoNames = nameGenerator(1, shuffledNames)
	alert(firstTwoNames)
}
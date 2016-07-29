// var names = ["john", "fred", "melissa", "richard", "eric", "joey"]
var preNames = prompt("give me some space seperated names")
// var preNames = "john fred melissa eric john2 eric2 melissa2"
var names = preNames.split(" ");

function team2Generator(arg, names) {
  return "team" + arg + ": " + names[arg] + " & " + names[arg + 1]
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
	var names12 = team2Generator(0, shuffledNames)
	var names34 = team2Generator(2, shuffledNames)
	var names56 = team2Generator(4, shuffledNames)
	var names78 = team2Generator(6, shuffledNames)
	var names910 = team2Generator(8, shuffledNames)
	var names1112 = team2Generator(10, shuffledNames)
	var names1314 = team2Generator(12, shuffledNames)
	var names1516 = team2Generator(14, shuffledNames)
	var names1718 = team2Generator(16, shuffledNames)
	var names1920 = team2Generator(18, shuffledNames)

	alert(names12)
	alert(names34)
	alert(names56)
	alert(names78)
	alert(names910)
	alert(names1112)
	alert(names1314)
	alert(names1516)
	alert(names1718)
	alert(names1920)
}
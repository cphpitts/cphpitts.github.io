// Set up lists and list attributes
var intialList = []
var finalList = [];
var unsortedList = [];
var unsortedListLength = 0;
var unsortedCounter = 1;
var finalBottom = 0;
var finalTop = finalList.length;
var finalCounter = Math.floor((finalBottom + finalTop)/2);
var newCounter;

// Set content elements
var inputEl = document.getElementById('listInput');
var sortingEl = document.getElementById('listSorting');
var resultsEl = document.getElementById('listResults');
var option1El = document.getElementById('option1');
var option2El = document.getElementById('option2');
option1El.addEventListener('click', compareOptions, false);
option2El.addEventListener('click', compareOptions, false);

// Randomize List and Set Up Initial Options
function startSorting() {
	var originalList = document.getElementById('gameList').value;
	initialList = originalList.split(",");	
	unsortedListLength = initialList.length;
	for (i=0; i < unsortedListLength; i++) {
		var randomNumber = Math.floor(Math.random() * initialList.length); 
		var randomItem = initialList.splice(randomNumber, 1);
		unsortedList[i] = randomItem[0];
	}
	finalList[0] = unsortedList[0];
	inputEl.style.display = "none";
	sortingEl.style.display = "block";
	setOptions();	
}

// Reset buttons with new options
function setOptions() {
	if (unsortedCounter == unsortedListLength) {
		endProgram();
	}
	option1El.innerHTML = unsortedList[unsortedCounter];
	option2El.innerHTML = finalList[finalCounter];
}

// Sort list based on user input
function compareOptions(e) {
	writeToLog();
	if (finalTop - finalBottom < 2) {
		if(e.target.id == "option1") {
			finalList.splice(finalCounter + 1, 0, unsortedList[unsortedCounter]);	
		} else {
			finalList.splice(finalCounter, 0, unsortedList[unsortedCounter]);	
		}
		unsortedCounter++;
		finalBottom = 0;
		finalTop = finalList.length;
		finalCounter = Math.floor((finalBottom + finalTop)/2);
	} else {		
		if(e.target.id == "option1") {
			newCounter = finalCounter;
			finalBottom = finalCounter;
			finalCounter = Math.floor((finalBottom + finalTop)/2);
			if (newCounter == finalCounter) {
				finalList.splice(finalCounter + 1, 0, unsortedList[unsortedCounter]);
				unsortedCounter++;
				finalBottom = 0;
				finalTop = finalList.length;
				finalCounter = Math.floor((finalBottom + finalTop)/2);
			} 			
			
		} else {
			newCounter = finalCounter;
			finalTop = finalCounter;
			finalCounter = Math.floor((finalBottom + finalTop)/2);
			if (newCounter == finalCounter) {
				finalList.splice(finalCounter, 0, unsortedList[unsortedCounter]);
				unsortedCounter++;
				finalBottom = 0;
				finalTop = finalList.length;
				finalCounter = Math.floor((finalBottom + finalTop)/2);
			} 
		}
	}
	setOptions();
}

// End sorting and display final list
function endProgram(){
	sortingEl.style.display = "none";
	resultsEl.style.display = "block";
	var listItem = 1;
	for (i=finalList.length; i>0; i--) {
		var rowNumber = (i%2) + 1;
		resultsEl.innerHTML += '<div class="row' + rowNumber + '">' + listItem + '. ' + finalList[i-1] + '</div>';
		listItem++;
	}
}

// Show console logs
function writeToLog() {
console.log('------------------');
console.log(unsortedList);
console.log("unsortedCounter: " + unsortedCounter);
console.log(finalList);
console.log("finalBottom: " + finalBottom);
console.log("finalTop: " + finalTop);
console.log("finalCounter: " + finalCounter);
}
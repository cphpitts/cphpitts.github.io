// JavaScript Document
var brawnEl = document.querySelector('#brawn input');
var agilityEl = document.querySelector('#agility input');
var intellectEl = document.querySelector('#intellect input');
var cunningEl = document.querySelector('#cunning input');
var willpowerEl = document.querySelector('#willpower input');
var presenceEl = document.querySelector('#presence input');



var brawnSkills = [1,16,22,24];
var agilitySkills = [6,14,15,18,23,25,26];
var intellectSkills = [0,4,10,11,27,28,29,30,31,32];
var cunningSkills = [7,13,17,19,20];
var willpowerSkills = [3,8,21];
var presenceSkills = [2,5,9,12];


var allSkills = document.querySelectorAll('#characterSkills input');
var allResults = document.querySelectorAll('.results');

var allInputs = document.querySelectorAll('input');

var greenDice, yellowDice;

for (i=0; i<allInputs.length; i++) {
	allInputs[i].addEventListener("change", modifyResults, false);
}

console.log(allSkills);
function modifyResults() {
	for (i=0; i<brawnSkills.length; i++) {
		greenDice = Math.max(brawnEl.value, allSkills[brawnSkills[i]].value) - Math.min(brawnEl.value, allSkills[brawnSkills[i]].value);
		yellowDice = Math.min(brawnEl.value, allSkills[brawnSkills[i]].value);
		
		allResults[brawnSkills[i]].innerHTML = "";
		for (j=0; j < greenDice; j++) {
			 allResults[brawnSkills[i]].innerHTML += '<div class="greenDie"></div>';
		}
		for (j=0; j < yellowDice; j++) {
			 allResults[brawnSkills[i]].innerHTML += '<div class="yellowDie"></div>';
		}
	}
	
	for (i=0; i<agilitySkills.length; i++) {
		greenDice = Math.max(agilityEl.value, allSkills[agilitySkills[i]].value) - Math.min(agilityEl.value, allSkills[agilitySkills[i]].value);
		yellowDice = Math.min(agilityEl.value, allSkills[agilitySkills[i]].value);
		
		allResults[agilitySkills[i]].innerHTML = "";
		for (j=0; j < greenDice; j++) {
			 allResults[agilitySkills[i]].innerHTML += '<div class="greenDie"></div>';
		}
		for (j=0; j < yellowDice; j++) {
			 allResults[agilitySkills[i]].innerHTML += '<div class="yellowDie"></div>';
		}
	}
	
	for (i=0; i<intellectSkills.length; i++) {
		greenDice = Math.max(intellectEl.value, allSkills[intellectSkills[i]].value) - Math.min(intellectEl.value, allSkills[intellectSkills[i]].value);
		yellowDice = Math.min(intellectEl.value, allSkills[intellectSkills[i]].value);
		
		allResults[intellectSkills[i]].innerHTML = "";
		for (j=0; j < greenDice; j++) {
			 allResults[intellectSkills[i]].innerHTML += '<div class="greenDie"></div>';
		}
		for (j=0; j < yellowDice; j++) {
			 allResults[intellectSkills[i]].innerHTML += '<div class="yellowDie"></div>';
		}
	}
	
	for (i=0; i<cunningSkills.length; i++) {
		greenDice = Math.max(cunningEl.value, allSkills[cunningSkills[i]].value) - Math.min(cunningEl.value, allSkills[cunningSkills[i]].value);
		yellowDice = Math.min(cunningEl.value, allSkills[cunningSkills[i]].value);
		
		allResults[cunningSkills[i]].innerHTML = "";
		for (j=0; j < greenDice; j++) {
			 allResults[cunningSkills[i]].innerHTML += '<div class="greenDie"></div>';
		}
		for (j=0; j < yellowDice; j++) {
			 allResults[cunningSkills[i]].innerHTML += '<div class="yellowDie"></div>';
		}
	}
	
	for (i=0; i<willpowerSkills.length; i++) {
		greenDice = Math.max(willpowerEl.value, allSkills[willpowerSkills[i]].value) - Math.min(willpowerEl.value, allSkills[willpowerSkills[i]].value);
		yellowDice = Math.min(willpowerEl.value, allSkills[willpowerSkills[i]].value);
		
		allResults[willpowerSkills[i]].innerHTML = "";
		for (j=0; j < greenDice; j++) {
			 allResults[willpowerSkills[i]].innerHTML += '<div class="greenDie"></div>';
		}
		for (j=0; j < yellowDice; j++) {
			 allResults[willpowerSkills[i]].innerHTML += '<div class="yellowDie"></div>';
		}
	}
	
	for (i=0; i<presenceSkills.length; i++) {
		greenDice = Math.max(presenceEl.value, allSkills[presenceSkills[i]].value) - Math.min(presenceEl.value, allSkills[presenceSkills[i]].value);
		yellowDice = Math.min(presenceEl.value, allSkills[presenceSkills[i]].value);
		
		allResults[presenceSkills[i]].innerHTML = "";
		for (j=0; j < greenDice; j++) {
			 allResults[presenceSkills[i]].innerHTML += '<div class="greenDie"></div>';
		}
		for (j=0; j < yellowDice; j++) {
			 allResults[presenceSkills[i]].innerHTML += '<div class="yellowDie"></div>';
		}
	}
}


/*
function modifyResults() {
	
	
	console.log('test');
	console.log(greenDice);
	console.log(yellowDice);
	
	resultsEl.innerHTML = "";
	for (i=0; i < greenDice; i++) {
		 resultsEl.innerHTML += '<div class="greenDie"></div>';
	}
	for (i=0; i < yellowDice; i++) {
		 resultsEl.innerHTML += '<div class="yellowDie"></div>';
	}
}
*/
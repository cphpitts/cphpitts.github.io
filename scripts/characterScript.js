// JavaScript Document
var raceEl = document.querySelector('#characterRace select');
var selectedRace = raceEl.value;
raceEl.addEventListener("change", baseStats, false);
var raceStatsEl = {};

var brawnEl = document.querySelector('#brawn input');
var agilityEl = document.querySelector('#agility input');
var intellectEl = document.querySelector('#intellect input');
var cunningEl = document.querySelector('#cunning input');
var willpowerEl = document.querySelector('#willpower input');
var presenceEl = document.querySelector('#presence input');
var soakEl = document.getElementById('soakAttribute');
var woundEl = document.getElementById('woundThreshold');
var strainEl = document.getElementById('strainThreshold');
var meleeDefenseEl = document.getElementById('meleeDefense');
var rangedDefenseEl = document.getElementById('rangedDefense');
var totalXpEl = document.getElementById('totalXp');
var availableXpEl = document.getElementById('availableXp');
var usedXp = 0;

function baseStats() {
	selectedRace = raceEl.value;
	switch (selectedRace){
		case "raceBothan":
			raceStatsEl = {brawn:1, agility:2, intellect:2, cunning:3, willpower:2, presence:2, wound:10, strain:11, xp:100};
			break;
		case "raceDroid":
			raceStatsEl = {brawn:1, agility:1, intellect:1, cunning:1, willpower:1, presence:1, wound:10, strain:10, xp:175};
			break;
		case "raceGand":
			raceStatsEl = {brawn:2, agility:2, intellect:2, cunning:2, willpower:3, presence:1, wound:10, strain:10, xp:100};
			break;
		case "raceHuman":
			raceStatsEl = {brawn:2, agility:2, intellect:2, cunning:2, willpower:2, presence:2, wound:10, strain:11, xp:110};
			break;
		case "raceRodian":
			raceStatsEl = {brawn:2, agility:3, intellect:2, cunning:2, willpower:1, presence:2, wound:10, strain:10, xp:100};
			break;
		case "raceTrandoshan":
			raceStatsEl = {brawn:3, agility:1, intellect:2, cunning:2, willpower:2, presence:2, wound:12, strain:9, xp:90};
			break;
		case "raceTwilek":
			raceStatsEl = {brawn:1, agility:2, intellect:2, cunning:2, willpower:2, presence:3, wound:10, strain:11, xp:100};
			break;
		case "raceWookie":
			raceStatsEl = {brawn:3, agility:2, intellect:2, cunning:2, willpower:1, presence:2, wound:14, strain:8, xp:90};
			break;
	}
	console.log(raceStatsEl);
	console.log(raceStatsEl.brawn);
	brawnEl.value = raceStatsEl.brawn;
	agilityEl.value = raceStatsEl.agility;
	intellectEl.value = raceStatsEl.intellect;
	cunningEl.value = raceStatsEl.cunning;
	willpowerEl.value = raceStatsEl.willpower;
	presenceEl.value = raceStatsEl.presence;
	modifyResults();	
}


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
	woundEl.innerHTML = Number(raceStatsEl.wound) + Number(brawnEl.value);
	strainEl.innerHTML = Number(raceStatsEl.strain) + Number(willpowerEl.value);
	totalXpEl.innerHTML = raceStatsEl.xp;
	availableXpEl.innerHTML = Number(raceStatsEl.xp) - usedXp;
}

var chosenCareerEl = document.querySelector('#characterCareer select');
chosenCareerEl.addEventListener('change', selectCareer, false);
var specialtyContainer = document.getElementById('characterSpecialty');

function selectCareer() {
	var chosenCareer = chosenCareerEl.value;
	
	switch(chosenCareer) {
		case "careerBounty":
			specialtyContainer.innerHTML = '<select><option value="bountyAssassin">Assassin</option><option value="bountyGadgeteer">Gadgeteer</option><option value="bountySurvivalist">Survivalist</option></select>';
			break;
		case "careerColonist":
			specialtyContainer.innerHTML = '<select><option value="colonistDoctor">Doctor</option><option value="colonistPolitico">Politico</option><option value="colonistScholar">Scholar</option></select>';
			break;
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
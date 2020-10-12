//VARIABLES

const vcParent = document.getElementById('main-window__vc');
const costParent = document.getElementById('main-window__cost');
const discountParent = document.getElementById('main-window__discount');
const listOfRenderedVc = []; //List of div's in VCParent
const vcStatusActiveArray = document.getElementsByClassName("vcStatusActive");
const dropBox = document.getElementById("main-window");
let count = 0;
let currentDomVc = 0; //Div with class 'vcStatusActive' 
let dAllPercent = 0;
let textFit = 0;
let menuToggle = false;
let thisIsMenuToggle = false;
let openSpecBlockToggle = true;
let closureToggle = false;
let nightShiftToggle = false;
let arrowToggle = false;
let date = new Date();
let hour = date.getHours();
let countFrog = 0;

//LOGIC

if (hour >= 23 || hour < 7) {//Check for current time and change preset dayShift/nightShift
	nightShiftToggle = true;
	nightShift();
}
else {
	dayShift();
	nightShiftToggle = false;
}

function doActive() { //set class Active for clicked div
	for (let i of vcStatusActiveArray) {
		i.className = "vcStatusNone";
	}
	this.className = "vcStatusActive";
}

function changeCost() {//Return new cost by using dPos()
	currentDomVc = vcStatusActiveArray[0];
	let vc = dataBase[currentDomVc.id];
	let newCost = document.getElementById('input-form').value;
	if (newCost.includes(',')) {
		newCost = newCost.replace(',', '.');
	}
	document.getElementById('input-form').value = "";
	let currentCost = vc.cost;

	let discountPercent = 100 - ((newCost * 100) / currentCost);
	dPos(discountPercent);
}

function dPos(discountPercent) { //Return and count discount for single active position (has own property)
	'use strict';
	currentDomVc = vcStatusActiveArray[0];
	let vc = dataBase[currentDomVc.id];
	let previousCost = vc.costAfterDiscount();
	vc.dPos = discountPercent;
	document.getElementById(vc.key + 'cost').innerHTML = Math.round(vc.costAfterDiscount() * 100) / 100 + " ₽";
	document.getElementById(vc.key + 'discount').innerHTML = ((vc.dPos + dAllPercent) === 0) ? " " : '|' + (vc.dPos + dAllPercent) + "%";
	count = count - (previousCost * vc.multiplicator) + (vc.costAfterDiscount() * vc.multiplicator);
	document.getElementById('total').innerHTML = Math.round(count * 2) / 2 + " ₽";
}

function dAll(discountPercent) {//Return and count discount for all positions (has own property)
	'use strict';
	let previousDiscount = dAllPercent;
	for (let i of listOfRenderedVc) {
		let vc = dataBase[i];
		let previousCost = (vc.cost * (1 - (vc.dPos + previousDiscount) / 100));
		dAllPercent = discountPercent;
		document.getElementById(vc.key + 'cost').innerHTML = Math.round(vc.costAfterDiscount() * 100) / 100 + " ₽";
		document.getElementById(vc.key + 'discount').innerHTML = ((vc.dPos + dAllPercent) === 0) ? " " : '|' + (vc.dPos + dAllPercent) + "%";
		count = (count - previousCost * vc.multiplicator) + vc.costAfterDiscount() * vc.multiplicator;
		document.getElementById('total').innerHTML = Math.round(count * 2) / 2 + " ₽";
	}
	dAllPercent = discountPercent; //Set discount for all keys in dataBase 
}

function addVcHandler(loadedVc, loadedMultiplicator) {  //Return new div in VCParent
	try {
		let dataFromInput = document.getElementById('input-form').value

		textFit++;
		if (textFit <= 10) {
			document.getElementById('main-window').style = "font-size: 24px;";
		}
		if (textFit > 10) {
			document.getElementById('main-window').style = "font-size: 22px;";
		}
		if (textFit > 15) {
			document.getElementById('main-window').style = "font-size: 19px;";
		}

		document.getElementById('input-form').value = "";


		if (dataFromInput.includes(',') || dataFromInput.includes('.')) { //Check for fast input
			dataFromInput = dataFromInput.replace('.', ',');
			var [key, fastMultiplicator] = dataFromInput.split(',')//Get vc.key and vc.multiplicator from input
			var vc = dataBase[key];
			var isFastInput = true; //It will be used in the end of function 
		}
		else if (loadedVc != undefined) {
			vc = dataBase[loadedVc];
			fastMultiplicator = loadedMultiplicator;
			isFastInput = true;
		}
		else {
			vc = dataBase[dataFromInput]; //Get subObject with name from input form
		}

		if (listOfRenderedVc.includes(vc.key)) { //If new vc in input is already exist in VCParent
			count += vc.costAfterDiscount();
			document.getElementById(vc.key).innerHTML = " " + vc.key + ":" + ++vc.multiplicator;
		}
		else {
			let vcForDom = document.createElement('div');
			vcForDom.id = vc.key;
			vcForDom.addEventListener("click", doActive);
			let costForDom = document.createElement('div');
			costForDom.id = vc.key + 'cost';
			let discountForDom = document.createElement('div');
			discountForDom.id = vc.key + 'discount';

			nightShiftToggle ? dAllPercent = -10 : "";
			vcForDom.innerHTML = " " + vc.key + ":" + vc.multiplicator;
			vcParent.appendChild(vcForDom);
			costForDom.innerHTML = Math.round(vc.costAfterDiscount() * 100) / 100 + " ₽";
			costParent.appendChild(costForDom);
			discountForDom.innerHTML = ((vc.dPos + dAllPercent) === 0) ? " " : '|' + (vc.dPos + dAllPercent) + "%";
			discountParent.appendChild(discountForDom);

			for (let i of vcStatusActiveArray) { //Set for rendered div class vcStatusNone
				i.className = "vcStatusNone";
			}
			vcForDom.className = "vcStatusActive";

			count += vc.costAfterDiscount() * vc.multiplicator;
			listOfRenderedVc.push(vc.key); //Add vc key of rendered div into Array

			isFastInput ? addCountHandler(fastMultiplicator) : "";
		}


		if (vc.key === '771' || vc.key === '720' || vc.key === '721') {
			cutWarning()
		}
		if (count >= 10000) {
			depositWarning()
		}
		if (vc.key === '192' || vc.key === '145' || vc.key === '146') {
			fillWarning()
		}

		document.getElementById('total').innerHTML = Math.round(count * 2) / 2 + " ₽";
	}
	catch (e) {
		notFound();
	}
}
function addCountHandler(fastMultiplicator) { //Return multiplicator for current vc in VCParent
	'use strict';
	currentDomVc = vcStatusActiveArray[0];
	let vc = dataBase[currentDomVc.id];
	let oldCost = vc.multiplicator * vc.costAfterDiscount();
	if (fastMultiplicator != undefined) {
		vc.multiplicator = fastMultiplicator;
	}
	else {
		vc.multiplicator = document.getElementById('input-form').value;
	}
	document.getElementById('input-form').value = "";


	if (vc.key === '001' || vc.key === '101' || vc.key === '201' || vc.key === '301') {
		if (vc.multiplicator <= 9) {
			vc.cost = 14;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 9 && vc.multiplicator <= 49) {
			vc.cost = 12;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 49 && vc.multiplicator <= 99) {
			vc.cost = 8;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 99 && vc.multiplicator <= 499) {
			vc.cost = 5;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 499 && vc.multiplicator <= 999) {
			vc.cost = 4;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 999 && vc.multiplicator <= 4999) {
			vc.cost = 3;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 4999) {
			vc.cost = 2.5;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
	}
	if (vc.key === '058' || vc.key === '158' || vc.key === '258' || vc.key === '358') {
		if (vc.multiplicator <= 19) {
			vc.cost = 36;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 19 && vc.multiplicator <= 49) {
			vc.cost = 28;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 49 && vc.multiplicator <= 99) {
			vc.cost = 25;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 99 && vc.multiplicator <= 199) {
			vc.cost = 20;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 199 && vc.multiplicator <= 499) {
			vc.cost = 15;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 499 && vc.multiplicator <= 999) {
			vc.cost = 12;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 999) {
			vc.cost = 10;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
	}
	if (vc.key === '062' || vc.key === '162' || vc.key === '262' || vc.key === '362') {
		if (vc.multiplicator <= 19) {
			vc.cost = 72;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 19 && vc.multiplicator <= 49) {
			vc.cost = 56;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 49 && vc.multiplicator <= 99) {
			vc.cost = 50;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 99 && vc.multiplicator <= 199) {
			vc.cost = 40;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 199 && vc.multiplicator <= 499) {
			vc.cost = 30;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 499 && vc.multiplicator <= 999) {
			vc.cost = 24;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 999) {
			vc.cost = 20;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
	}
	if (vc.key === '011' || vc.key === '111' || vc.key === '211' || vc.key === '311') {
		if (vc.multiplicator <= 9) {
			vc.cost = 20;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 9 && vc.multiplicator <= 49) {
			vc.cost = 16;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 49 && vc.multiplicator <= 99) {
			vc.cost = 12;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 99 && vc.multiplicator <= 499) {
			vc.cost = 8;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 499 && vc.multiplicator <= 999) {
			vc.cost = 6;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 999 && vc.multiplicator <= 4999) {
			vc.cost = 5;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 4999) {
			vc.cost = 4;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
	}
	if (vc.key === '020' || vc.key === '120' || vc.key === '220' || vc.key === '320') {
		if (vc.multiplicator <= 9) {
			vc.cost = 24;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 9 && vc.multiplicator <= 49) {
			vc.cost = 20;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 49 && vc.multiplicator <= 99) {
			vc.cost = 14;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 99 && vc.multiplicator <= 499) {
			vc.cost = 10;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 499 && vc.multiplicator <= 999) {
			alert('Возможно, цена неправильная')
			vc.cost = 7;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 999 && vc.multiplicator <= 4999) {
			alert('Возможно, цена неправильная')
			vc.cost = 6;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 4999) {
			alert('Возможно, цена неправильная')
			vc.cost = 5;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
	}
	if (vc.key === '024' || vc.key === '124' || vc.key === '224' || vc.key === '324') {
		if (vc.multiplicator <= 9) {
			vc.cost = 32;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 9 && vc.multiplicator <= 49) {
			vc.cost = 28;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 49 && vc.multiplicator <= 99) {
			vc.cost = 20;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 99 && vc.multiplicator <= 499) {
			vc.cost = 16;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 499 && vc.multiplicator <= 999) {
			alert('Возможно, цена неправильная')
			vc.cost = 12;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 999 && vc.multiplicator <= 4999) {
			alert('Возможно, цена неправильная')
			vc.cost = 9.9;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator > 4999) {
			alert('Возможно, цена неправильная')
			vc.cost = 7.95;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
	}
	if (vc.key === '720') {
		if (vc.multiplicator < 10) {
			vc.cost = 50;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator >= 10 && vc.multiplicator < 20) {
			vc.cost = 45;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator >= 20 && vc.multiplicator < 30) {
			vc.cost = 40;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator >= 30 && vc.multiplicator < 40) {
			vc.cost = 35;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator >= 40) {
			vc.cost = 30;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
	}
	if (vc.key === '721') {
		if (vc.multiplicator < 10) {
			vc.cost = 85;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator >= 10 && vc.multiplicator < 20) {
			vc.cost = 76.50;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator >= 20 && vc.multiplicator < 30) {
			vc.cost = 68;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator >= 30 && vc.multiplicator < 40) {
			vc.cost = 59.50;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
		if (vc.multiplicator >= 40) {
			vc.cost = 51;
			document.getElementById(vc.key + 'cost').innerHTML = vc.costAfterDiscount() + " ₽";
		}
	}
	if (vc.key === '130') {
		if (vc.multiplicator < 50) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 0;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 10 && vc.multiplicator < 50) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 20;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 50 && vc.multiplicator < 100) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 40;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 100 && vc.multiplicator < 500) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 60;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 500 && vc.multiplicator < 1000) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 76;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 1000) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 84;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
	}
	if (vc.key === '131') {
		if (vc.multiplicator < 50) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 0;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 10 && vc.multiplicator < 50) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 20;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 50 && vc.multiplicator < 100) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 40;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 100 && vc.multiplicator < 500) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 60;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 500 && vc.multiplicator < 1000) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 76;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 1000) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 84;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
	}
	if (vc.key === '167') {
		if (vc.multiplicator < 50) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 0;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 50 && vc.multiplicator < 100) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 10;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 100 && vc.multiplicator < 500) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 20;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 500 && vc.multiplicator < 1000) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 30;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 1000) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 40;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
	}
	if (vc.key === '168') {
		if (vc.multiplicator < 50) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 0;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 50 && vc.multiplicator < 100) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 10;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 100 && vc.multiplicator < 500) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 20;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 500 && vc.multiplicator < 1000) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 30;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator >= 1000) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 40;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
	}
	if (vc.key === '070' || vc.key === '170') {
		if (vc.multiplicator <= 1199) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 0;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator > 1199 && vc.multiplicator <= 2999) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 10;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator > 2999 && vc.multiplicator <= 5999) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 20;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator > 5999) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 30;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
	}
	if (vc.key === '071' || vc.key === '171') {
		if (vc.multiplicator <= 1679) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 0;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator > 1679 && vc.multiplicator <= 4199) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 10;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator > 4199 && vc.multiplicator <= 8399) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 20;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
		if (vc.multiplicator > 8399) {
			count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost
			let discountPercent = 30;
			dPos(discountPercent)
			count -= (vc.costAfterDiscount() * vc.multiplicator) - oldCost
		}
	}


	currentDomVc.innerHTML = " " + currentDomVc.id + ":" + vc.multiplicator;
	count += (vc.costAfterDiscount() * vc.multiplicator) - oldCost;
	if (count >= 10000) {
		depositWarning()
	}
	document.getElementById('total').innerHTML = Math.round(count * 2) / 2 + " ₽";
}

function thisIsMenu() { //Set discount and change vc's for menu
	'use strict';
	for (let i of listOfRenderedVc) {
		function addNewVc(prop) {
			let currentVc = dataBase[i];
			let newVc = dataBase[prop];
			newVc.multiplicator = currentVc.multiplicator;
			let currentDomVc = document.getElementById(i);
			let currentDomCost = document.getElementById(i + "cost");
			let currentDomDiscount = document.getElementById(i + "discount");
			currentDomVc.id = prop; //Set new id to rendered div's
			currentDomCost.id = prop + 'cost';
			currentDomDiscount.id = prop + 'discount';
			document.getElementById(prop + 'discount').innerHTML = "";//Delete discount in DOM
			listOfRenderedVc.splice(listOfRenderedVc.indexOf(i), 1, String(prop));//Delete old vc and add new in listOfRenderedVc

			count = count - (Math.ceil((+currentVc.costAfterDiscount() * currentVc.multiplicator) * 2)) / 2;//delete old cost
			document.getElementById('total').innerHTML = count + " ₽";

			currentDomVc.innerHTML = " " + newVc.key + ":" + newVc.multiplicator;//Add new vc and cost to DOM
			currentDomCost.innerHTML = newVc.costAfterDiscount() + " ₽";
			currentDomDiscount.innerHTML = "&nbsp;";

			for (let i of vcStatusActiveArray) { //Set for rendered div class vcStatusNone
				i.className = "vcStatusNone";
			}
			currentDomVc.className = "vcStatusActive"

			count += newVc.costAfterDiscount() * newVc.multiplicator;//Set new count
			document.getElementById('total').innerHTML = Math.round(count * 2) / 2 + " ₽";
		}
		if (arrForMenu.includes(i)) {
			if (i === '058' || i === '158' || i === '258' || i === '358') {
				let prop = 161;
				addNewVc(prop);
				let discountPercent = 52;
				dPos(discountPercent);
			}
			if (i === '062' || i === '162' || i === '262' || i === '362') {
				let prop = 165;
				addNewVc(prop);
				let discountPercent = 52;
				dPos(discountPercent);
			}
			if (i === '001' || i === '101' || i === '201' || i === '301') {
				let prop = 107;
				addNewVc(prop);
			}
			if (i === '011' || i === '111' || i === '211' || i === '311') {
				let prop = 117;
				addNewVc(prop);
			}
			if (i === '024' || i === '124' || i === '224' || i === '324') {
				let prop = 126;
				addNewVc(prop);
				let discountPercent = 60;
				dPos(discountPercent);
			}
			if (i === '020' || i === '120' || i === '220' || i === '320') {
				let prop = 123;
				addNewVc(prop);
				let discountPercent = 50;
				dPos(discountPercent);
			}
		}
		else {
			for (let j of vcStatusActiveArray) { //Set for rendered div class vcStatusNone
				j.className = "vcStatusNone";
			}
			document.getElementById(i).className = "vcStatusActive"
			let discountPercent = 20;
			dPos(discountPercent);
		}
	}
}

function deleteVc() { //Delete current VC 
	textFit -= 1;
	if (textFit <= 10) {
		document.getElementById('main-window').style = "font-size: 24px;";
	}
	if (textFit > 10) {
		document.getElementById('main-window').style = "font-size: 22px;";
	}
	if (textFit > 15) {
		document.getElementById('main-window').style = "font-size: 19px;";
	}

	currentDomVc = vcStatusActiveArray[0];
	let vc = dataBase[currentDomVc.id];

	count -= vc.costAfterDiscount() * vc.multiplicator;
	document.getElementById('total').innerHTML = Math.round(count * 2) / 2 + " ₽";

	vcParent.removeChild(document.getElementById(vc.key));
	costParent.removeChild(document.getElementById(vc.key + 'cost'));
	discountParent.removeChild(document.getElementById(vc.key + 'discount'));
	listOfRenderedVc.splice(listOfRenderedVc.indexOf(vc.key), 1);//delete vc.key from listOfRenderedVc 
	vc.multiplicator = 1;
}

// day/night
function nightShift() {
	$(document).ready(function () {
		document.body.style = 'background-color:#424242;color:#000;'
		document.getElementById("night_shift").querySelector('img').src = "css/night.svg";
		$("#night_shift").css({ "background-color": "#000" });
		$('.right-menu__btn').attr('class', 'right-menu__btn--night');
		$('#dPos, #dAll, #cng, #VC, #this-is-menu').attr('class', 'night');
		$('.message').attr('class', 'message--night');
		$("#arrow").css({ "background-image": "url(css/arrow_night.png)", "opacity": "1" })
		$("#info").attr("src", "css/info_night.png").css({ "opacity": "0.8" });
		$("#cont").css({ "color": "#f8981f" });
		document.getElementById("input-form").style = "background:#f8981f;color:#000";
		$("#night_shift img").css({ "opacity": "1" });
	});
}

function dayShift() {
	$(document).ready(function () {
		document.body.style = 'background-color:#ededed;'
		document.getElementById("night_shift").querySelector('img').src = "css/day.svg";
		$("#night_shift").css({ "background-color": "#E5E5E5" });
		$('.right-menu__btn--night').attr('class', 'right-menu__btn');
		$('#dPos, #dAll, #cng, #VC, #this-is-menu').removeClass('night');
		$('.message--night').attr('class', 'message');
		$("#arrow").css({ "background-image": "url(css/arrow.png)", "opacity": "0.8" });
		$("#info").attr("src", "css/info.png").css({ "opacity": "0.3" });
		$("#cont").css({ "color": "#2196F3" });
		document.getElementById("input-form").style = "background:linear-gradient(to right, #2e9ef6, #2596f0);color:#fff;";
		$("#night_shift img").css({ "opacity": "0.7" });
	});
}

function generateLetter() {
	let letter = `Стоимость составит${nightShiftToggle ? ' (с учетом ночной наценки)' : ''}: \n`;
	for (let i of listOfRenderedVc) {
		let vc = dataBase[i]
		letter += `${vc.name} - ${Math.round(vc.costAfterDiscount() * vc.multiplicator * 100) / 100} ₽\n`;
	}
	letter += `\nИтого: ${total.innerText}`
	// alert(letter);

	new ClipboardJS('#generate-letter', {
		text: function () {
			return letter;
		}
	});
}

function save() { //Save file
	let orderName = prompt('Введите номер заказа');
	let arrayForSave = [];

	arrayForSave.push('%cmcalcfile%\n')
	arrayForSave.push('%begin%\n')
	for (let i of listOfRenderedVc) {
		arrayForSave.push(`[:${i}:;${dataBase[i]["multiplicator"]};%${dataBase[i]['dPos']}%]\n`);
	}
	arrayForSave.push('%end%\n')
	arrayForSave.push(`da%%${dAllPercent}%%\n`)

	saveAs(new Blob(arrayForSave, { type: 'text/csv;charset=utf-8' }), `${orderName}.cmf`);
}

function read(files) {
	let file = files[0];

	let reader = new FileReader();

	//todo: an issue with night discount 

	reader.onload = function (e) {
		if (nightShiftToggle) {
			alert('Разрушительный сбой. Aborted. You have to turn off night mode.\n' + '\n' + addVcHandler)
		}
		else {
			let loadedFile = String(e.target.result);
			const lines = loadedFile.match(/\[.*?\]/igms);
			let disAll = String(loadedFile.match(/da%%.+?%%/igms));
			disAll = disAll.match(/\d/g).join('');
			dAll(+disAll);

			for (i of lines) {
				let vc = String(i.match(/:\d{3}:/));
				vc = vc.match(/\d/g).join('');
				let multiplicator = String(i.match(/;.*;/));
				multiplicator = multiplicator.match(/\d/g).join('');
				let disPos = String(i.match(/%.*%/));
				disPos = disPos.match(/\d/g).join('');
				addVcHandler(vc, multiplicator);
				dPos(+disPos);
			}
		}
	};

	reader.readAsText(file);
}

//CONTROLS

//special block

$(document).ready(function () {
	$('#spec-block__open-btn').click(function () {
		countFrog += 1;
		if (countFrog === 5) {
			frogAnimation();
		};
		if (openSpecBlockToggle === true) {
			setTimeout(function () {
				$('#spec-block').css({ "box-shadow": "0px 0px 10px rgba(0, 0, 0, 0.0)" });
			}, 420);
			$('#spec-block').animate({ left: "220px" }, 500, "easeInBack");
			$('#spec-block__open-btn img').css({ "transform": "rotate(0deg)" });
			openSpecBlockToggle = false;
		}
		else {
			setTimeout(function () {
				$('#spec-block').css({ "box-shadow": "0px 0px 10px rgba(0, 0, 0, 0.25)" });
			}, 480);
			$('#spec-block').animate({ left: "35px" }, 500, "easeInBack");
			$('#spec-block__open-btn img').css({ "transform": "rotate(180deg)" });
			openSpecBlockToggle = true;
		};
	});
});

document.getElementById('dPos').onclick = function () {
	let discountPercent = +prompt("Введите процент", 50);
	dPos(discountPercent);
}

document.getElementById('dAll').onclick = function () {
	'use strict';
	let discountPercent = +prompt("Введите процент", 20);
	dAll(discountPercent);
}

document.getElementById('VC').onclick = function () {
	addVcHandler()
};

document.getElementById('cng').onclick = function () {
	addCountHandler()
};

//hotkeys
document.onkeydown = function (e) {
	'use strict';
	if (e.keyCode === 13) { //enter
		addVcHandler();
		return false;
	}
	if (e.keyCode === 107) { //+
		addCountHandler();
		return false;
	}
	if (e.keyCode === 106) { //*
		changeCost();
		return false;
	}
	if (e.keyCode === 46) { //delete
		deleteVc();
		return false;
	}
	if (e.keyCode === 38) { // ArrowUp
		currentDomVc = vcStatusActiveArray[0];
		let previousIndex = listOfRenderedVc.indexOf(currentDomVc.id) - 1;
		if (previousIndex > -1) {
			document.getElementById(listOfRenderedVc[previousIndex]).className = "vcStatusActive";
			currentDomVc.className = "vcStatusNone";
		}
		else {
			document.getElementById(listOfRenderedVc[listOfRenderedVc.length - 1]).className = "vcStatusActive";
			currentDomVc.className = "vcStatusNone";
		}
	}
	if (e.keyCode === 40) { // ArrowDown
		currentDomVc = vcStatusActiveArray[0];
		let nextIndex = listOfRenderedVc.indexOf(currentDomVc.id) + 1;
		if (nextIndex > listOfRenderedVc.length - 1) {
			document.getElementById(listOfRenderedVc[0]).className = "vcStatusActive";
			currentDomVc.className = "vcStatusNone";
		}
		else {
			document.getElementById(listOfRenderedVc[nextIndex]).className = "vcStatusActive";
			currentDomVc.className = "vcStatusNone";
		}
	}
}

//left menu
document.getElementById('this-is-menu').onclick = function () {
	thisIsMenu();
	// if (thisIsMenuToggle) {
	// 	document.querySelector('#this-is-menu img').style = "transform: scale(1)";
	// 	thisIsMenuToggle = !thisIsMenuToggle;
	// }
	// else{
	// 	document.querySelector('#this-is-menu img').style = "transform: scale(1.4)";
	// 	thisIsMenuToggle = !thisIsMenuToggle;
	// }

	//i'll delete function below when i'll finish new logic

	document.querySelector('#this-is-menu img').style = "transform: scale(1.25)";
	setTimeout(function () {
		document.querySelector('#this-is-menu img').style = "transform: scale(1)";
	}, 350);
}

document.getElementById('closure').onclick = function () { //Handles status of closure button
	if (closureToggle === false) {
		document.getElementById('closure').style = 'background-color:#D92231;';
		document.getElementById('closure').querySelector('span').style = 'color:#fff;';
		closureToggle = true;
	}
	else {
		document.getElementById('closure').style = 'background-color:#E5E5E5;';
		document.getElementById('closure').querySelector('span').style = 'color:rgba(1,1,1,0.6);';
		closureToggle = false;
	}
}

window.onbeforeunload = function () { //Set a warning when a user try to leave the window
	if (closureToggle === true) {
		return true;
	}
}

document.getElementById('generate-letter').onclick = function () {
	generateLetter();
	copyWarning();
	document.querySelector("#generate-letter img").style = "transform: scale(1.25)";
	setTimeout(function () {
		document.querySelector('#generate-letter img').style = "transform: scale(1)";
	}, 350);
}

document.getElementById('save').onclick = function () {
	save();
	document.querySelector("#save img").style = "transform: scale(1.25)";
	setTimeout(function () {
		document.querySelector('#save img').style = "transform: scale(1)";
	}, 350);
}

//right menu
$(function () {
	'use strict';
	$('#bw').click(function () {
		$('#bw__table').slideToggle(300);
		$('#grayscale-scan__table').slideUp(300);
		$('#color-scan__table').slideUp(300);
		$('#menu-discount__table').slideUp(300);
	});
});

$(function () {
	'use strict';
	$('#grayscale-scan').click(function () {
		$('#bw__table').slideUp(300);
		$('#grayscale-scan__table').slideToggle(300);
		$('#color-scan__table').slideUp(300);
		$('#menu-discount__table').slideUp(300);
	});
});

$(function () {
	'use strict';
	$('#color-scan').click(function () {
		$('#bw__table').slideUp(300);
		$('#grayscale-scan__table').slideUp(300);
		$('#color-scan__table').slideToggle(300);
		$('#menu-discount__table').slideUp(300);
	});
});

$(function () {
	'use strict';
	$('#menu-discount').click(function () {
		if (menuToggle === false) {
			$('#bw__table').slideUp(300);
			$('#grayscale-scan__table').slideUp(300);
			$('#color-scan__table').slideUp(300);
			$('#menu-discount__table').slideDown(300);
			setTimeout(function () {
				$('#A3').animate({ left: "-35px" }, 300);
				$('#A4').animate({ left: "-35px" }, 300);
			}, 300);
			menuToggle = true;
		}
		else {
			$('#A3').animate({ left: "2px" }, 300);
			$('#A4').animate({ left: "2px" }, 300);
			setTimeout(function () {
				$('#menu-discount__table').slideUp(300);
			}, 300);
			menuToggle = false;
		}
	});
});

//night shift

document.getElementById('night_shift').onclick = function () {
	if (nightShiftToggle === false) {
		nightShift();
		nightShiftWarning();
		let discountPercent = -10;
		dAll(discountPercent);
		nightShiftToggle = true;
		$("#night_shift img").css({ "transform": "rotate(-30deg)" });
		setTimeout(function () {
			$('#night_shift img').css({ "transform": "rotate(0deg)" });
		}, 300);
	}
	else {
		$("#night_shift img").css({ "transform": "rotate(-30deg)" });
		setTimeout(function () {
			$('#night_shift img').css({ "transform": "rotate(0deg)" });
		}, 300);
		dayShift();
		let discountPercent = 0;
		dAll(discountPercent);
		nightShiftToggle = false;
	}
}

//arrow

$(document).ready(function () {
	'use strict';
	$('#arrow').click(function () {
		if (arrowToggle === false) {
			$('#bot').css({ "display": "flex" });
			$("html,body").animate({ scrollTop: $(document).height() - $(window).height() }, 1000, "easeOutBounce");
			setTimeout(function () {
				$("#arrow").animate({ top: "194vh" }, 200).css({ "transform": "rotate(90deg)" });
				$('#ent').animate({ left: "10vw" }, 500);
			}, 900);
			$('#cont').animate({ left: "10vw" }, 700).css({ "display": "inline-block" });
			$('#ent').css({ "display": "inline-block" });
			arrowToggle = true;
		}
		else {
			$("html,body").animate({ scrollTop: 0 }, 1000, "easeOutBounce");
			$("#arrow").animate({ top: "94vh" }, 700).css({ "transform": "rotate(270deg)" });
			setTimeout(function () {
				$('#ent').animate({ left: "110vw" }, 500).css({ "display": "none" });
				$('#cont').animate({ left: "-100vw" }, 700).css({ "display": "none" });
				$('#bot').css({ "display": "none" });
			}, 900);
			arrowToggle = false;
		}
	});
});

//info button

function shake() {
	$(document).ready(function () {
		$('#info').addClass('hvr-buzz-out');
		setTimeout(function () {
			$('#info').removeClass('hvr-buzz-out')
		}, 1000)
	});
};

setInterval(shake, 6000);

//WARNINGS

function cutWarning() {
	$(document).ready(function () {
		$('#js-cut-warning').animate({ top: "2vh" }, 900, "easeOutElastic").css({ "display": "flex" });
		setTimeout(function () {
			$('#js-cut-warning').css({ "opacity": "0" });
		}, 5000);
		setTimeout(function () {
			$('#js-cut-warning').css({ "display": "none" });
		}, 6000);
	});
}

function notFound() {
	$(document).ready(function () {
		$('#js-not-found').animate({ top: "2vh" }, 900, "easeOutElastic").css({ "transition": "opacity 0s", "display": "flex", "opacity": "1" });
		setTimeout(function () {
			$('#js-not-found').css({ "transition": "opacity 0.5s", "opacity": "0" });
		}, 2000);
		setTimeout(function () {
			$('#js-not-found').animate({ top: "-10vh" }, 900, "easeOutElastic");
		}, 2600);
		setTimeout(function () {
			$('#js-not-found').css({ "display": "none" });
		}, 3200);
	});
}

function nightShiftWarning() {
	$(document).ready(function () {
		$('#js-night-shift').animate({ top: "2vh" }, 900, "easeOutElastic").css({ "transition": "opacity 0s", "display": "flex", "opacity": "1" });
		setTimeout(function () {
			$('#js-night-shift').css({ "transition": "opacity 0.5s", "opacity": "0" });
		}, 2000);
		setTimeout(function () {
			$('#js-night-shift').animate({ top: "-10vh" }, 900, "easeOutElastic");
		}, 2600);
		setTimeout(function () {
			$('#js-night-shift').css({ "display": "none" });
		}, 3200);
	});
}

function copyWarning() {
	$(document).ready(function () {
		$('#js-copied').animate({ top: "2vh" }, 900, "easeOutElastic").css({ "transition": "opacity 0s", "display": "flex", "opacity": "1" });
		setTimeout(function () {
			$('#js-copied').css({ "transition": "opacity 0.5s", "opacity": "0" });
		}, 2000);
		setTimeout(function () {
			$('#js-copied').animate({ top: "-10vh" }, 900, "easeOutElastic");
		}, 2600);
		setTimeout(function () {
			$('#js-copied').css({ "display": "none" });
		}, 3200);
	});
}

function fillWarning() {
	$(document).ready(function () {
		$('#js-fill-warning').animate({ top: "2vh" }, 900, "easeOutElastic").css({ "display": "flex" });
		setTimeout(function () {
			$('#js-fill-warning').css({ "opacity": "0" });
		}, 5000);
		setTimeout(function () {
			$('#js-fill-warning').css({ "display": "none" });
		}, 6000);
	});
}

function depositWarning() {
	$(document).ready(function () {
		$('#js-deposit-warning').animate({ top: "2vh" }, 900, "easeOutElastic").css({ "display": "flex" });
		setTimeout(function () {
			$('#js-deposit-warning').css({ "opacity": "0" });
		}, 5000);
		setTimeout(function () {
			$('#js-deposit-warning').css({ "display": "none" });
		}, 6000);
	});
}

function frogAnimation() {
	$(function () {
		$('#frog').click(function () {
			$('#frog').animate({ top: "-50vh", left: "-50vw" }, 1500, "easeInBack");
		});
		$('#frog').animate({ right: "10vw" }, 1500).css({ "display": "block" });
		setTimeout(function () {
			$('#frog').addClass('hvr-buzz-out');
		}, 1000);
		setTimeout(function () {
			$('#frog').removeClass('hvr-buzz-out').animate({ right: "-50vw" }, 500);
		}, 7000);
		setTimeout(function () {
			$('#frog').css({ "display": "none" });
		}, 7500);
	});
}


//DRAG

window.onload = function () {
	dropBox.ondragenter = ignoreDrag;
	dropBox.ondragover = ignoreDrag;
	dropBox.ondrop = drop;
}

function ignoreDrag(e) {
	// Обеспечиваем, чтобы никто другой не получил это событие, 
	// т.к. мы выполняем операцию перетаскивания
	e.stopPropagation();
	e.preventDefault();
}

function drop(e) {
	// Аннулируем это событие для всех других
	e.stopPropagation();
	e.preventDefault();

	// Получаем перемещенные файлы
	let data = e.dataTransfer;
	let files = data.files;

	// Передаем полученный файл функции для обработки файлов
	read(files);
}

// const hat = document.getElementById('hat');

// hat.onmousedown = function(e) { // 1. отследить нажатие

//   // подготовить к перемещению
//   // 2. разместить на том же месте, но в абсолютных координатах
//   moveAt(e);
//   // переместим в body, чтобы мяч был точно не внутри position:relative
//   document.body.appendChild(hat);
//   // передвинуть мяч под координаты курсора
//   // и сдвинуть на половину ширины/высоты для центрирования
//   function moveAt(e) {
//     hat.style.left = e.pageX - hat.offsetWidth / 2 + 'px';
//     hat.style.top = e.pageY - hat.offsetHeight / 2 + 'px';
//   }

//   // 3, перемещать по экрану
//   document.onmousemove = function(e) {
//     moveAt(e);
//   }

//   // 4. отследить окончание переноса
//   hat.onmouseup = function() {
//     document.onmousemove = null;
//     hat.onmouseup = null;
//   }
// }

// hat.ondragstart = function() {
// 	return false;
//   };
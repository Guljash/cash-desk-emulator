var VC = 0;
var d_arrow = false;
var t = 1;
var d_closure = false;
var d_open = true;
var d_open_menu = false;
var for_discount = 0;
var discount_percent = 0;
var cost = 0;
var for_newDiv_id = 0;
var for_newDiv2_id = 0;
var for_newDiv3_id = 0;
var for_newDiv4_id = 0;
var vc_active = 0;
var count = 0;
var vc_collection = document.getElementsByClassName("vc_change_active");
var output = document.getElementById('output');
var output2 = document.getElementById('output2');
var output3 = document.getElementById('output3');
var output4 = document.getElementById('output4');
var multiplicator = 1;
var text_fit = 0;
var count_frogg = 0;

function seven_one_one(){
	$(document).ready(function(){
		$('#seven_one_one').animate({right: "50px"}, 900, "easeOutElastic").css({"display":"flex"});
		setTimeout(function(){
			$('#seven_one_one').css({"opacity":"0"});
		}, 5000);
		setTimeout(function(){
			$('#seven_one_one').css({"display":"none"});
		}, 6000);
	});
}

function big_money(){
	$(document).ready(function(){
		$('#big_money').animate({right: "50px"}, 900, "easeOutElastic").css({"display":"flex"});
		setTimeout(function(){
			$('#big_money').css({"opacity":"0"});
		}, 5000);
		setTimeout(function(){
			$('#big_money').css({"display":"none"});
		}, 6000);
	});
}

function change(){
	'use strict';
	get_active()
	multiplicator = document.getElementById('cheque_form').value;
	currentDiv = document.getElementById(vc_active); 
	t = currentDiv.innerHTML.slice(10,currentDiv.length);
	output_str = currentDiv.innerHTML;
	document.getElementById('cheque_form').value = "";
	cost = dict[output_str.substring(6,9)];
	var currentVC = currentDiv.innerHTML.slice(6,9);
	var newCostDiv4 = document.getElementById('newDiv4' + vc_active.slice(6, vc_active.length));
	var old_cost = newCostDiv4.innerHTML.slice(0, newCostDiv4.innerHTML.length-7);
		
	if (currentVC === '001' || currentVC === '101' || currentVC === '201' || currentVC === '301'){
		if (multiplicator <= 49){
			cost = 10;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 49 && multiplicator <= 99){
			cost = 7;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 99 && multiplicator <= 499){
			cost = 5;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 499 && multiplicator <= 999){
			cost = 3.5;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 999 && multiplicator <= 4999){
			cost = 3;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 4999){
			cost = 2.5;
			newCostDiv4.innerHTML = cost + " ₽";
		}
	}
		
	if (currentVC === '011' || currentVC === '111' || currentVC === '211' || currentVC === '311'){
		if (multiplicator <= 49){
			cost = 14;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 49 && multiplicator <= 99){
			cost = 10;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 99 && multiplicator <= 499){
			cost = 7;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 499 && multiplicator <= 999){
			cost = 6;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 999 && multiplicator <= 4999){
			cost = 5;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 4999){
			cost = 4;
			newCostDiv4.innerHTML = cost + " ₽";
		}
	}
		
	if (currentVC === '058' || currentVC === '158' || currentVC === '258' || currentVC === '358'){
		if (multiplicator <= 19){
			cost = 36;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 19 && multiplicator <= 49){
			cost = 28;
			newCostDiv4.innerHTML = cost + " ₽";
		}			
		if (multiplicator > 49 && multiplicator <= 99){
			cost = 25;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 99 && multiplicator <= 199){
			cost = 20;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 199 && multiplicator <= 499){
			cost = 15;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 499 && multiplicator <= 999){
			cost = 12;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 999){
			cost = 10;
			newCostDiv4.innerHTML = cost + " ₽";
		}
	}
		
	if (currentVC === '062' || currentVC === '162' || currentVC === '262' || currentVC === '362'){
		if (multiplicator <= 19){
			cost = 72;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 19 && multiplicator <= 49){
			cost = 56;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 49 && multiplicator <= 99){
			cost = 50;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 99 && multiplicator <= 199){
			cost = 40;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 199 && multiplicator <= 499){
			cost = 30;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 499 && multiplicator <= 999){
			cost = 24;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 999){
			cost = 20;
			newCostDiv4.innerHTML = cost + " ₽";
		}
	}
		
	if (currentVC === '020' || currentVC === '120' || currentVC === '220' || currentVC === '320'){
		if (multiplicator <= 49){
			cost = 17;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 49 && multiplicator <= 99){
			cost = 14;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 99 && multiplicator <= 499){
			cost = 10;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 499 && multiplicator <= 999){
			cost = 7;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 999 && multiplicator <= 4999){
			cost = 6;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 4999){
			cost = 5;
			newCostDiv4.innerHTML = cost + " ₽";
		}
	}
		
	if (currentVC === '024' || currentVC === '124' || currentVC === '224' || currentVC === '324'){
		if (multiplicator <= 49){
			cost = 24;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 49 && multiplicator <= 99){
			cost = 19;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 99 && multiplicator <= 499){
			cost = 15;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 499 && multiplicator <= 999){
			cost = 12;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 999 && multiplicator <= 4999){
			cost = 9.9;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator > 4999){
			cost = 7.95;
			newCostDiv4.innerHTML = cost + " ₽";
		}
	}
		
	if (currentVC === '720'){
		if (multiplicator < 10){
			cost = 50;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 10 && multiplicator < 20){
			cost = 45;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 20 && multiplicator < 30){
			cost = 40;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 30 && multiplicator < 40){
			cost = 35;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 40){
			cost = 30;
			newCostDiv4.innerHTML = cost + " ₽";
		}
	}
		
	if (currentVC === '721'){
		if (multiplicator < 10){
			cost = 85;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 10 && multiplicator < 20){
			cost = 76.50;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 20 && multiplicator < 30){
			cost = 68;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 30 && multiplicator < 40){
			cost = 59.50;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 40){
			cost = 51;
			newCostDiv4.innerHTML = cost + " ₽";
		}
	}
		
	if (currentVC === '130'){
		if (multiplicator < 50){
			cost = 15;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 50 && multiplicator < 100){
			cost = 12;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 100 && multiplicator < 500){
			cost = 9;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 500 && multiplicator < 1000){
			cost = 6;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 1000){
			cost = 3;
			newCostDiv4.innerHTML = cost + " ₽";
		}
	}
		
	if (currentVC === '131'){
		if (multiplicator < 50){
			cost = 20;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 50 && multiplicator < 100){
			cost = 16;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 100 && multiplicator < 500){
			cost = 12;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 500 && multiplicator < 1000){
			cost = 8;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 1000){
			cost = 4;
			newCostDiv4.innerHTML = cost + " ₽";
		}
	}
		
	if (currentVC === '167'){
		if (multiplicator < 50){
			cost = 20;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 50 && multiplicator < 100){
			cost = 16;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 100 && multiplicator < 500){
			cost = 12;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 500 && multiplicator < 1000){
			cost = 8;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 1000){
			cost = 4;
			newCostDiv4.innerHTML = cost + " ₽";
		}
	}
		
	if (currentVC === '168'){
		if (multiplicator < 50){
			cost = 40;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 50 && multiplicator < 100){
			cost = 32;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 100 && multiplicator < 500){
			cost = 24;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 500 && multiplicator < 1000){
			cost = 16;
			newCostDiv4.innerHTML = cost + " ₽";
		}
		if (multiplicator >= 1000){
			cost = 8;
			newCostDiv4.innerHTML = cost + " ₽";
		}
	}
		
	currentDiv.innerHTML = " " + output_str.substring(6,10) + multiplicator;
	count += (cost*multiplicator) - Math.ceil((old_cost*t)*2)/2;
	count = Math.ceil(count*2)/2;
	document.getElementById('total').innerHTML = count + " ₽";
	for_discount = multiplicator*cost;
	if (multiplicator > +dict_for_error[output_str.substring(6,9)]){
		document.getElementById('output2').lastChild.innerHTML = "!";
	}
	else{
		document.getElementById('output2').lastChild.innerHTML = " ";
	}
	
	if (((document.getElementById('total').innerHTML).slice(0,-7)) >= 10000){
		big_money()
	}
}

function enter(){
	multiplicator = 1;
	VC = document.getElementById('cheque_form').value;
	cost = dict[document.getElementById('cheque_form').value];
	if ((cost/1) === cost){
		text_fit++;
		if (text_fit <= 10){
			document.getElementById('under_output').style = "font-size: 24px;";
		}
		if (text_fit > 10){
			document.getElementById('under_output').style = "font-size: 22px;";
		}
		if (text_fit > 15){
			document.getElementById('under_output').style = "font-size: 19px;";
		}
			
		document.getElementById('cheque_form').value = "";
		var newDiv = document.createElement('div');
		newDiv.id = "newDiv" + for_newDiv_id;
		for_newDiv_id++;
		newDiv.addEventListener("click", give_me_ID);
		var newDiv2 = document.createElement('div');
		newDiv2.id = "newDiv2" + for_newDiv2_id;
		for_newDiv2_id++;
		var newDiv3 = document.createElement('div');
		newDiv3.id = "newDiv3" + for_newDiv3_id;
		for_newDiv3_id++;
		var newDiv4 = document.createElement('div');
		newDiv4.id = "newDiv4" + for_newDiv4_id;
		for_newDiv4_id++;
		newDiv.innerHTML = " " + VC + ":1";
		output.appendChild(newDiv);
		newDiv2.innerHTML = " ";
		output2.appendChild(newDiv2);
		newDiv3.innerHTML = " ";
		output3.appendChild(newDiv3);
		newDiv4.innerHTML = cost + " ₽";
		output4.appendChild(newDiv4);
			
		for(var i = 0; i<(vc_collection.length); i++){
			vc_collection[i].className = "vc_change";
		}
		newDiv.className = "vc_change_active";
			
		count += Math.ceil((cost*multiplicator)*2)/2;
		document.getElementById('total').innerHTML = count + " ₽";
		
		if (VC === '771' || VC === '720' || VC === '721'){
			seven_one_one()
		}
			
		if (((document.getElementById('total').innerHTML).slice(0,-7)) >= 10000){
			big_money()
		}
		
		return false;
	}
	else{
		alert('Артикул не найден');
	}
}

function get_active(){
	
	for (var i = 0; i < vc_collection.length; i++){
		vc_active = vc_collection[i].id;
	}
}

function give_me_ID(){

	var temp = this.id.slice(6, this.id.length);

	for(var i = 0; i<vc_collection.length; i++){
		vc_collection[i].className = "vc_change";
	}
	document.getElementById("newDiv" + temp).className = "vc_change_active";
}

var dict = {};
	dict['101'] = 10;
	dict[103] = 7;
	dict[104] = 5;
	dict[105] = 3.5;
	dict[106] = 3;
	dict[107] = 2.5;
	dict[111] = 14;
	dict[113] = 10;
	dict[114] = 7;
	dict[115] = 6;
	dict[116] = 5;
	dict[117] = 4;
	dict[120] = 17;
	dict[122] = 14;
	dict[123] = 10;
	dict[124] = 24;
	dict[126] = 19;
	dict[127] = 15;
	dict[128] = 80;
	dict[129] = 60;
	dict[130] = 15;
	dict[131] = 20;
	dict[132] = 15;
	dict[133] = 500;
dict['001'] = 10;
dict['003'] = 7;
dict['004'] = 5;
dict['005'] = 3.5;
dict['006'] = 3;
dict['007'] = 2.5;
dict['008'] = 17;
dict['011'] = 14;
dict['013'] = 10;
dict['014'] = 7;
dict['015'] = 6;
dict['016'] = 5;
dict['017'] = 4;
dict['020'] = 17;
dict['022'] = 14;
dict['023'] = 10;
dict['024'] = 24;
dict['026'] = 19;
dict['027'] = 15;
dict['029'] = 25;
	dict[201] = 10;
	dict[203] = 7;
	dict[204] = 5;
	dict[205] = 3.5;
	dict[206] = 3;
	dict[207] = 2.5;
	dict[208] = 17;
	dict[211] = 14;
	dict[213] = 10;
	dict[214] = 7;
	dict[215] = 6;
	dict[216] = 5;
	dict[217] = 4;
	dict[220] = 17;
	dict[222] = 14;
	dict[223] = 10;
	dict[224] = 24;
	dict[226] = 19;
	dict[227] = 15;
	dict[229] = 25;
dict[301] = 10;
dict[303] = 7;
dict[304] = 5;
dict[305] = 3.5;
dict[306] = 3;
dict[307] = 2.5;
dict[311] = 14;
dict[313] = 10;
dict[314] = 7;
dict[315] = 6;
dict[316] = 5;
dict[317] = 4;
dict[320] = 17;
dict[322] = 14;
dict[323] = 10;
dict[324] = 24;
dict[326] = 19;
dict[327] = 15;
	dict[158] = 36;
	dict[160] = 28;
	dict[161] = 25;
	dict[162] = 72;
	dict[164] = 56;
	dict[165] = 50;
	dict[167] = 20;
	dict[168] = 40;
dict[258] = 36;
dict[260] = 28;
dict[261] = 25;
dict[262] = 72;
dict[264] = 56;
dict[265] = 50;
	dict[358] = 36;
	dict[360] = 28;
	dict[361] = 25;
	dict[362] = 72;
	dict[364] = 56;
	dict[365] = 50;
dict['058'] = 36;
dict['060'] = 28;
dict['061'] = 25;
dict['062'] = 72;
dict['064'] = 56;
dict['065'] = 50;
	dict[501] = 1.5;
	dict[502] = 2.5;
	dict[503] = 4.5;
	dict[504] = 6;
	dict[505] = 7.5;
	dict[506] = 10.5;
	dict[507] = 13;
	dict[518] = 21;
	dict[519] = 42;
	dict[538] = 38;
	dict[539] = 76;
	dict[521] = 3;
	dict[522] = 5.5;
	dict[523] = 8.5;
	dict[524] = 13;
	dict[525] = 15;
	dict[526] = 17;
	dict[527] = 25.5;
	dict[508] = 5.5;
	dict[509] = 10;
	dict[528] = 13;
	dict[529] = 17;
	dict[510] = 26;
	dict[511] = 3.5;
	dict[512] = 7.5;
	dict[513] = 17;
	dict[514] = 105;
	dict[533] = 34;
	dict[535] = 7.5;
	dict[536] = 19;
	dict[537] = 26.5;
	dict[540] = 210;
dict[150] = 1700;
dict[151] = 900;
dict[152] = 500;
dict[153] = 300;
	dict['040'] = 5.5;
	dict['044'] = 20;
	dict['045'] = 40;
	dict['046'] = 11;
	dict['050'] = 50;
	dict['051'] = 100;
dict[580] = 35;
dict[581] = 30;
dict[582] = 45;
dict[583] = 35;
dict[584] = 45;
dict[585] = 30;
	dict[401] = 35;
	dict[402] = 40;
	dict[403] = 45;
	dict[404] = 50;
	dict[405] = 55;
	dict[406] = 60;
	dict[407] = 65;
	dict[408] = 70;
	dict[410] = 30;
	dict[411] = 32;
	dict[412] = 35;
	dict[413] = 38;
	dict[414] = 40;
	dict[416] = 45;
	dict[417] = 48;
	dict[418] = 50;
	dict[419] = 52;
	dict[420] = 55;
	dict[421] = 58;
	dict[422] = 60;
	dict[424] = 70;
	dict[431] = 60;
	dict[432] = 65;
	dict[434] = 75;
	dict[435] = 85;
dict[460] = 120;
dict[461] = 120;
dict[462] = 150;
dict[463] = 70;
dict[464] = 70;
dict[465] = 100;
dict[466] = 40;
dict[467] = 40;
dict[469] = 30;
dict[470] = 30;
dict[480] = 6;
	dict['070'] = 0.9;
	dict['071'] = 0.8;
	dict['074'] = 3.5;
	dict['080'] = 20;
	dict['081'] = 20;
dict[170] = 0.90;
dict[171] = 0.80;
dict[174] = 3.5;
	dict[190] = 7.5;
	dict[191] = 11;
	dict[192] = 5.5;
	dict[193] = 13;
	dict[194] = 25;
	dict[195] = 2;
	dict[196] = 11;
	dict[140] = 11;
	dict[141] = 16.50;
	dict[142] = 8.50;
	dict[143] = 19.50;
	dict[144] = 4;
	dict[145] = 2;
	dict[146] = 2;
	dict[147] = 1;
	dict[148] = 1;
	dict[149] = 2;
dict[181] = 80;
dict[182] = 50;
dict[183] = 35;
dict[184] = 150;
dict[185] = 100;
dict[186] = 70;
	dict[801] = 10;
	dict[802] = 20;
	dict[803] = 40;
	dict[804] = 200;
dict[491] = 150;
dict[492] = 160;
dict[493] = 170;
dict[494] = 180;
dict[495] = 190;
dict[496] = 200;
dict[497] = 210;
dict[498] = 220;
dict[499] = 230;
dict[500] = 200;
	dict[600] = 100;
	dict[601] = 150;
	dict[602] = 200;
dict[700] = 10;
dict[701] = 15;
dict[702] = 3;
dict[703] = 6;
dict[704] = 100;
dict[705] = 10;
dict[706] = 50;
dict[707] = 10;
dict[717] = 2700;
dict[720] = 50;
dict[721] = 85;
dict[728] = 50;
dict[730] = 50;
dict[740] = 0.5;
dict[762] = 4;
dict[763] = 1;
dict[764] = 2;
dict[765] = 150;
dict[770] = 5;
dict[771] = 1;
dict[772] = 1.5;
dict[773] = 1;
dict[774] = 10;
dict[775] = 50;
dict[776] = 25;
dict[777] = 30;
dict[779] = 500;
dict[781] = 100;
dict[782] = 50;
dict[783] = 200;
dict[784] = 50;
dict[785] = 250;

var dict_for_error = {};
dict_for_error[170] = 1200;
dict_for_error[171] = 1680;
	dict_for_error['070'] = 1200;
	dict_for_error['071'] = 1680;


var currentDiv = 0; 
var output_str = 0;


//СПЕЦИАЛЬНЫЙ БЛОК START


document.getElementById('VC').onclick = function(){
	enter()
};

document.getElementById('cng').onclick = function(){
	change()
};

document.getElementById('dPos').onclick = function(){
	'use strict';
	discount_percent = prompt("Введите процент", 50);
	get_active();
	var currentDiv3 = document.getElementById('newDiv3' + vc_active.slice(6, vc_active.length));
	var currentDiv4 = document.getElementById('newDiv4' + vc_active.slice(6, vc_active.length));
	for_discount = currentDiv4.innerHTML.slice(0,-7);
	var temp = document.getElementById('newDiv' + vc_active.slice(6, vc_active.length));
	multiplicator = temp.innerHTML.substring(10,temp.length);
	currentDiv4.innerHTML = Math.round(for_discount*(1-(discount_percent/100))*100)/100 + " ₽";
	currentDiv3.innerHTML = "|" + Math.round((1 - (for_discount*(1-(discount_percent/100))/for_discount))*100) + "%";
	count = (count - for_discount*multiplicator) + (for_discount*multiplicator*(1-(discount_percent/100))) ;  //OOOH MY GOOOOOOOOD!!! (c)Asking Alexandria
	count = Math.ceil(count*2)/2;
	document.getElementById('total').innerHTML = count + " ₽";
};

document.getElementById('dAll').onclick = function(){
	'use strict';
	discount_percent = prompt("Введите процент", 20);
	var childs = document.getElementById('output4').getElementsByTagName('div');
	var childs2 = document.getElementById('output3').getElementsByTagName('div');
	
	for(var k=0; k<childs2.length; k++){
		var dpos_percent = childs2[k].innerHTML;
		dpos_percent = dpos_percent.substring(1,dpos_percent.length-1);
		var c2 = childs[k].innerHTML;
		c2 = c2.substring(0,c2.length-7);
		var dall_percent = discount_percent;
		if (dpos_percent !== "nbsp"){
			dpos_percent = (dpos_percent/100);
			var par = c2/(1-dpos_percent);
			dall_percent = 100 - (100/(par/(c2 - (c2*(discount_percent/100)))));
			
		}
		childs2[k].innerHTML =  "|" + dall_percent + "%";
	}
	
	for(var i=0; i<childs.length; i++){
		var c = childs[i].innerHTML;
		c = c.substring(0,c.length-7);
		childs[i].innerHTML = Math.round((c - (c*(discount_percent/100)))*100)/100 + "&nbsp;&#8381;";
	}
	
	count = count - (count*((discount_percent/100)));
	count = Math.ceil(count*2)/2;
	document.getElementById('total').innerHTML = count + "&nbsp;&#8381;";
};

//СПЕЦИАЛЬНЫЙ БЛОК END

//ГОРЯЧИЕ КЛАВИШИ START

document.onkeydown = function(e){ 
	'use strict';
	if (e.keyCode === 13){ //ENTER
		enter();
		return false;
	}
	
	if (e.keyCode === 107){ //+
		change();
		return false;
	}
		
	if (e.keyCode === 110){ //.del
		text_fit -= 1;

			if (text_fit <= 10){
					document.getElementById('output_parent').style = "font-size: 3vh;";
			}
			if (text_fit > 10){
					document.getElementById('output_parent').style = "font-size: 2.5vh;";
			}
			if (text_fit > 15){
					document.getElementById('output_parent').style = "font-size: 2vh;";
			}
		
		get_active()
		
		var cost_for_del = document.getElementById('newDiv4' + vc_active.slice(6, vc_active.length)).innerHTML;
		cost_for_del = cost_for_del.slice(0, cost_for_del.length-7 );
		
		var removeDiv1 = document.getElementById(vc_active);
		var removeDiv2 = document.getElementById('newDiv2' + vc_active.slice(6, vc_active.length));
		var removeDiv3 = document.getElementById('newDiv3' + vc_active.slice(6, vc_active.length));
		var removeDiv4 = document.getElementById('newDiv4' + vc_active.slice(6, vc_active.length));
		output.removeChild(removeDiv1);
		output2.removeChild(removeDiv2);
		output3.removeChild(removeDiv3);
		output4.removeChild(removeDiv4);
		
		var multiplicator_for_del = removeDiv1.innerHTML.slice(10,removeDiv1.innerHTML.length);
		
		if (removeDiv3.innerHTML.substring(1,3) === "nb" ){
			count = count - (Math.ceil((cost_for_del*multiplicator_for_del)*2))/2;
			document.getElementById('total').innerHTML = count + " ₽";
			return false;
		}
		else {
			count = count - (Math.ceil(((cost_for_del*multiplicator_for_del)*(1-(removeDiv3 .innerHTML.substring(1,3))/100))*2)/2);
			document.getElementById('total').innerHTML = count + " ₽";
			return false;
		}
			
	}
	
	if (e.keyCode === 38){ // ArrowUp
		get_active()
		document.getElementById('newDiv' + (vc_active.slice(6, vc_active.length) - 1)).className = 'vc_change_active';
		currentDiv = document.getElementById(vc_active).className = 'vc_change';
	}
	if (e.keyCode === 40){ // ArrowDown
		get_active()
	var output_elems_collection = document.getElementById('output').childNodes.length;
	if ((+((vc_active.slice(6, vc_active.length)))+1) === output_elems_collection){
		document.getElementById('newDiv0').className = 'vc_change_active';
		currentDiv = document.getElementById(vc_active).className = 'vc_change';
	}
	else{
		document.getElementById('newDiv' + (+(vc_active.slice(6, vc_active.length)) + 1)).className = 'vc_change_active';
		currentDiv = document.getElementById(vc_active).className = 'vc_change';
	}
	}
};

//ГОРЯЧИЕ КЛАВИШИ END

//БОКОВОЕ МЕНЮ START
$(function(){
	'use strict';
    $('#bw').click(function(){
        $('#container_bw').slideToggle(300);
		$('#container_scan_grayscale').slideUp(300);
		$('#container_scan_color').slideUp(300);
		$('#container_menu').slideUp(300);
    });
});

$(function(){
	'use strict';
    $('#grayscale_scan').click(function(){
        $('#container_bw').slideUp(300);
		$('#container_scan_grayscale').slideToggle(300);
		$('#container_scan_color').slideUp(300);
		$('#container_menu').slideUp(300);
    });
});

$(function(){
	'use strict';
    $('#color_scan').click(function(){
        $('#container_bw').slideUp(300);
		$('#container_scan_grayscale').slideUp(300);
		$('#container_scan_color').slideToggle(300);
		$('#container_menu').slideUp(300);
    });
});

$(function(){
	'use strict';
    $('#menu_disc').click(function(){
		if (d_open_menu === false){
			$('#container_bw').slideUp(300);
			$('#container_scan_grayscale').slideUp(300);
			$('#container_scan_color').slideUp(300);
			$('#container_menu').slideDown(300);
			setTimeout(function(){
				$('#A3').animate({left: "-35px"}, 300);
				$('#A4').animate({left: "-35px"}, 300);
			},300);
			d_open_menu = true;
		}
		else{				
			$('#A3').animate({left: "2px"}, 300);
			$('#A4').animate({left: "2px"}, 300);
			setTimeout(function(){
				$('#container_menu').slideUp(300);
			},300);
			d_open_menu = false;
		}
    });
});



$(document).ready(function(){
	'use strict';
	$('#arrow').click(function(){
		if (d_arrow === false){
			$('#bot').css({"display":"flex"});
			$("html,body").animate({ scrollTop:$(document).height()-$(window).height()}, 1000, "easeOutBounce");
			setTimeout(function(){
				$("#arrow").animate({top: "297vh"}, 200).css({"transform":"rotate(90deg)"});
				$('#ent').animate({left: "10vw"}, 500);
			}, 900);
			$('#cont').animate({left: "10vw"}, 700).css({"display":"inline-block"});
			$('#ent').css({"display":"inline-block"});
			d_arrow = true;
		}
		else{
			$("html,body").animate({ scrollTop:0}, 1000, "easeOutBounce");
			$("#arrow").animate({top: "95vh"}, 700).css({"transform":"rotate(270deg)"});
			setTimeout(function(){
				$('#ent').animate({left: "110vw"}, 500).css({"display":"none"});
				$('#cont').animate({left: "-100vw"}, 700).css({"display":"none"});
				$('#bot').css({"display":"none"});
			}, 900);
			d_arrow = false;	
		}
	});
});

document.getElementById('closure').onclick = function(){
	if (d_closure === false){
		document.getElementById('closure').style = 'background-color:#D92231;';
		document.getElementById('closure').querySelector('span').style = 'color:#fff;';
		d_closure = true;
	}
	else{
		document.getElementById('closure').style = 'background-color:#E5E5E5;';
		document.getElementById('closure').querySelector('span').style = 'color:rgba(1,1,1,0.6);';
		d_closure = false;
	}
}

window.onbeforeunload = function() {
	if (d_closure === true){
		return true;
	}
}

$(document).ready(function(){
	$('#open_button').click(function(){
		if (d_open === true){
			setTimeout(function(){
				$('#spec_block').css({"box-shadow":"0px 0px 10px rgba(0, 0, 0, 0.0)"});
			}, 420);
			$('#spec_block').animate({left: "220px"}, 500, "easeInBack");
			$('#open_button img').css({"transform":"rotate(0deg)"});
			d_open = false;
			count_frogg += 1;
			if (count_frogg >= 5){
				$('#frogg').animate({right: "150vw"}, 19000).css({"display":"block"});
			}
		}
		else{
			setTimeout(function(){
				$('#spec_block').css({"box-shadow":"0px 0px 10px rgba(0, 0, 0, 0.25)"});
			}, 480);
			$('#spec_block').animate({left: "35px"}, 500, "easeInBack");
			$('#open_button img').css({"transform":"rotate(180deg)"});
			d_open = true;
			count_frogg += 1;
			if (count_frogg >= 5){
				$('#frogg').animate({right: "150vw"}, 19000).css({"display":"block"});
			}
		}
	});
});

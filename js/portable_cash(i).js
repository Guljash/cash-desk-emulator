var VC = 0;
var d = 1;
var d2 = 1;
var d3 = 1;
var t = 1;
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


function give_me_ID(){
	'use strict';
	var temp = this.id.slice(6, this.id.length);

	for(var i = 0; i<vc_collection.length; i++){
		vc_collection[i].className = "vc_change";
	}
	document.getElementById("newDiv" + temp).className = "vc_change_active";
	
}

dict = {};
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
	dict[190] = 11;
	dict[191] = 13;
	dict[192] = 5.5;
	dict[193] = 15;
	dict[194] = 35;
	dict[195] = 4;
	dict[196] = 13;
	dict[140] = 16.50;
	dict[141] = 19.50;
	dict[142] = 8.50;
	dict[143] = 22.50;
	dict[144] = 13;
	dict[145] = 5.50;
	dict[146] = 5.50;
	dict[147] = 2;
	dict[148] = 2;
	dict[149] = 4;
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
	dict_for_error['101'] = 49;
	dict_for_error[103] = 99;
	dict_for_error[104] = 499;
	dict_for_error[105] = 999;
	dict_for_error[106] = 4999;
	dict_for_error[111] = 49;
	dict_for_error[113] = 99;
	dict_for_error[114] = 499;
	dict_for_error[115] = 999;
	dict_for_error[116] = 4999;
	dict_for_error[120] = 49;
	dict_for_error[122] = 99;
	dict_for_error[124] = 49;
	dict_for_error[126] = 99;
dict_for_error['001'] = 49;
dict_for_error['003'] = 99;
dict_for_error['004'] = 499;
dict_for_error['005'] = 999;
dict_for_error['006'] = 4999;
dict_for_error['011'] = 49;
dict_for_error['013'] = 99;
dict_for_error['014'] = 499;
dict_for_error['015'] = 999;
dict_for_error['016'] = 4999;
dict_for_error['020'] = 49;
dict_for_error['022'] = 99;
dict_for_error['024'] = 49;
dict_for_error['026'] = 99;
	dict_for_error[201] = 49;
	dict_for_error[203] = 99;
	dict_for_error[204] = 499;
	dict_for_error[205] = 999;
	dict_for_error[206] = 4999;
	dict_for_error[211] = 49;
	dict_for_error[213] = 99;
	dict_for_error[214] = 499;
	dict_for_error[215] = 999;
	dict_for_error[216] = 4999;
	dict_for_error[220] = 49;
	dict_for_error[222] = 99;
	dict_for_error[224] = 49;
	dict_for_error[226] = 99;
dict_for_error[301] = 49;
dict_for_error[303] = 99;
dict_for_error[304] = 499;
dict_for_error[305] = 999;
dict_for_error[306] = 4999;
dict_for_error[311] = 49;
dict_for_error[313] = 99;
dict_for_error[314] = 499;
dict_for_error[315] = 999;
dict_for_error[316] = 4999;
dict_for_error[320] = 49;
dict_for_error[322] = 99;
dict_for_error[324] = 49;
dict_for_error[326] = 99;
	dict_for_error['058'] = 19;
	dict_for_error['060'] = 49;
	dict_for_error['061'] = 99;
	dict_for_error['062'] = 19;
	dict_for_error['064'] = 49;
	dict_for_error['065'] = 99;
dict_for_error[158] = 19;
dict_for_error[160] = 49;
dict_for_error[161] = 99
dict_for_error[162] = 19;
dict_for_error[164] = 49;
dict_for_error[165] = 99;
	dict_for_error[258] = 19;
	dict_for_error[260] = 49;
	dict_for_error[261] = 99
	dict_for_error[262] = 19;
	dict_for_error[264] = 49;
	dict_for_error[265] = 99;
dict_for_error[358] = 19;
dict_for_error[360] = 49;
dict_for_error[361] = 99
dict_for_error[362] = 19;
dict_for_error[364] = 49;
dict_for_error[365] = 99;
	dict_for_error[190] = 1199;
	dict_for_error[191] = 1199;
	dict_for_error[192] = 1199;
	dict_for_error[193] = 1199;
	dict_for_error[194] = 1199;
	dict_for_error[195] = 1199;
	dict_for_error[196] = 1199;
dict_for_error[170] = 5999;
dict_for_error[171] = 8399;
	dict_for_error['070'] = 5999;
	dict_for_error['071'] = 8399;
dict_for_error[130] = 49;
dict_for_error[131] = 49;
	dict_for_error[167] = 49;
	dict_for_error[168] = 49;
dict_for_error[720] = 10;
dict_for_error[721] = 10;




var currentDiv = 0; 
var output_str = 0;




//СПЕЦИАЛЬНЫЙ БЛОК START


document.getElementById('VC').onclick = function(){
'use strict';
	multiplicator = 1;
	VC = document.getElementById('cheque_form').value;
	cost = dict[document.getElementById('cheque_form').value];
	if ((cost/1) === cost){
		text_fit++;
		if (text_fit <= 10){
			document.getElementById('under_output').style = "font-size: 2.7vh;";
		}
		if (text_fit > 10){
			document.getElementById('under_output').style = "font-size: 2.3vh;";
		}
		if (text_fit > 15){
			document.getElementById('under_output').style = "font-size: 2vh;";
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
		newDiv.innerHTML = "&nbsp;" + VC + ":1";
		output.appendChild(newDiv);
		newDiv2.innerHTML = "&nbsp;";
		output2.appendChild(newDiv2);
		newDiv3.innerHTML = "&nbsp;";
		output3.appendChild(newDiv3);
		newDiv4.innerHTML = cost + "р.";
		output4.appendChild(newDiv4);
			
		for(var i = 0; i<(vc_collection.length); i++){
			vc_collection[i].className = "vc_change";
		}
		newDiv.className = "vc_change_active";
			
		count += Math.ceil((cost*multiplicator)*2)/2;
		document.getElementById('total').innerHTML = count + "р.";
		return false;
	}
	else{
		alert('Артикул не найден');
	}
};

document.getElementById('cng').onclick = function(){
	for (var i1 = 0; i1 < vc_collection.length; i1++){
			vc_active = vc_collection[i1].id;
		}
		multiplicator = document.getElementById('cheque_form').value;
		currentDiv = document.getElementById(vc_active); 
		t = currentDiv.innerHTML.slice(10,currentDiv.length);
		output_str = currentDiv.innerHTML;
		document.getElementById('cheque_form').value = "";
		cost = dict[output_str.substring(6,9)];
		currentDiv.innerHTML = "&nbsp;" + output_str.substring(6,10) + multiplicator;
		count += (cost*multiplicator) - Math.ceil((cost*t)*2)/2;
		count = Math.ceil(count*2)/2;
		document.getElementById('total').innerHTML = count + "р.";
		for_discount = multiplicator*cost;
		if (multiplicator > +dict_for_error[output_str.substring(6,9)]){
			document.getElementById('output2').lastChild.innerHTML = "!";
		}
		else{
			document.getElementById('output2').lastChild.innerHTML = "&nbsp;";
		}
	return false;
};

document.getElementById('dPos').onclick = function(){
	'use strict';
	discount_percent = prompt("Введите процент", 50);
	for (var i1 = 0; i1 < vc_collection.length; i1++){
			vc_active = vc_collection[i1].id;
	}
	var currentDiv3 = document.getElementById('newDiv3' + vc_active.slice(6, vc_active.length));
	var currentDiv3_percent = currentDiv3.innerHTML.substring(1,currentDiv3.innerHTML.length-1);
	var currentDiv4 = document.getElementById('newDiv4' + vc_active.slice(6, vc_active.length));
	for_discount = currentDiv4.innerHTML.slice(0,-2);
	var temp = document.getElementById('newDiv' + vc_active.slice(6, vc_active.length));
	cost = dict[temp.innerHTML.substring(6,9)];
	multiplicator = temp.innerHTML.substring(10,temp.length)
	currentDiv4.innerHTML = Math.round(for_discount*(1-(discount_percent/100))*100)/100 + "р.";
	currentDiv3.innerHTML = "|" + Math.round((1 - (for_discount*(1-(discount_percent/100))/cost))*100) + "%";
	count = (count - for_discount*multiplicator) + (for_discount*multiplicator*(1-(discount_percent/100))) ;  //OOOH MY GOOOOOOOOD!!! (c)Asking Alexandria
	count = Math.ceil(count*2)/2;
	document.getElementById('total').innerHTML = count + "р.";
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
		c2 = c2.substring(0,c2.length-2);
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
		c = c.substring(0,c.length-2);
		childs[i].innerHTML = Math.round((c - (c*(discount_percent/100)))*100)/100 + "р.";
	}
	
	count = count - (count*((discount_percent/100)));
	count = Math.ceil(count*2)/2;
	document.getElementById('total').innerHTML = count + "р.";
};
//СПЕЦИАЛЬНЫЙ БЛОК END

//ГОРЯЧИЕ КЛАВИШИ START

document.onkeydown = function(e){ //ENTER
	'use strict';
	if (e.keyCode === 13){
		multiplicator = 1;
		VC = document.getElementById('cheque_form').value;
		cost = dict[document.getElementById('cheque_form').value];
		if ((cost/1) === cost){
			text_fit++;
			if (text_fit <= 10){
				document.getElementById('under_output').style = "font-size: 2.7vh;";
			}
			if (text_fit > 10){
				document.getElementById('under_output').style = "font-size: 2.3vh;";
			}
			if (text_fit > 15){
				document.getElementById('under_output').style = "font-size: 2vh;";
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
			newDiv.innerHTML = "&nbsp;" + VC + ":1";
			output.appendChild(newDiv);
			newDiv2.innerHTML = "&nbsp;";
			output2.appendChild(newDiv2);
			newDiv3.innerHTML = "&nbsp;";
			output3.appendChild(newDiv3);
			newDiv4.innerHTML = cost + "р.";
			output4.appendChild(newDiv4);
			
			for(var i = 0; i<(vc_collection.length); i++){
				vc_collection[i].className = "vc_change";
			}
			newDiv.className = "vc_change_active";
			
			count += Math.ceil((cost*multiplicator)*2)/2;
			document.getElementById('total').innerHTML = count + "р.";
			return false;
		}
		else{
			alert('Артикул не найден');
		}
	}
	if (e.keyCode === 107){ //+
		for (var i1 = 0; i1 < vc_collection.length; i1++){
			vc_active = vc_collection[i1].id;
		}
		multiplicator = document.getElementById('cheque_form').value;
		currentDiv = document.getElementById(vc_active); 
		t = currentDiv.innerHTML.slice(10,currentDiv.length);
		output_str = currentDiv.innerHTML;
		document.getElementById('cheque_form').value = "";
		cost = dict[output_str.substring(6,9)];
		currentDiv.innerHTML = "&nbsp;" + output_str.substring(6,10) + multiplicator;
		count += (cost*multiplicator) - Math.ceil((cost*t)*2)/2;
		count = Math.ceil(count*2)/2;
		document.getElementById('total').innerHTML = count + "р.";
		for_discount = multiplicator*cost;
		if (multiplicator > +dict_for_error[output_str.substring(6,9)]){
			document.getElementById('output2').lastChild.innerHTML = "!";
		}
		else{
			document.getElementById('output2').lastChild.innerHTML = "&nbsp;";
		}
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
		for (var i1 = 0; i1 < vc_collection.length; i1++){
			vc_active = vc_collection[i1].id;
		}
		var removeDiv1 = document.getElementById(vc_active);
		var removeDiv2 = document.getElementById('newDiv2' + vc_active.slice(6, vc_active.length));
		var removeDiv3 = document.getElementById('newDiv3' + vc_active.slice(6, vc_active.length));
		var removeDiv4 = document.getElementById('newDiv4' + vc_active.slice(6, vc_active.length));
		output.removeChild(removeDiv1);
		output2.removeChild(removeDiv2);
		output3.removeChild(removeDiv3);
		output4.removeChild(removeDiv4);
		
		var cost_for_del = dict[removeDiv1.innerHTML.slice(6,9)];
		var multiplicator_for_del = removeDiv1.innerHTML.slice(10,removeDiv1.innerHTML.length);
		
		if (removeDiv3.innerHTML.substring(1,3) === "nb" ){
			count = count - (Math.ceil((cost_for_del*multiplicator_for_del)*2))/2;
			document.getElementById('total').innerHTML = count + "р.";
			return false;
		}
		else {
			count = count - (Math.ceil(((cost_for_del*multiplicator_for_del)*(1-(removeDiv3 .innerHTML.substring(1,3))/100))*2)/2);
			document.getElementById('total').innerHTML = count + "р.";
			return false;
		}
	}
	
	if (e.keyCode === 38){ // ArrowUp
		for (var i1 = 0; i1 < vc_collection.length; i1++){
			vc_active = vc_collection[i1].id;
		}
		var temp = document.getElementById('newDiv' + (vc_active.slice(6, vc_active.length) - 1)).className = 'vc_change_active';
		currentDiv = document.getElementById(vc_active).className = 'vc_change';
	}
	if (e.keyCode === 40){ // ArrowDown
	for (var i1 = 0; i1 < vc_collection.length; i1++){
			vc_active = vc_collection[i1].id;
		}
	var output_elems_collection = document.getElementById('output').childNodes.length;
	if ((+((vc_active.slice(6, vc_active.length)))+1) === output_elems_collection){
		document.getElementById('newDiv0').className = 'vc_change_active';
		currentDiv = document.getElementById(vc_active).className = 'vc_change';
	}
	else{
		var temp = document.getElementById('newDiv' + (+(vc_active.slice(6, vc_active.length)) + 1)).className = 'vc_change_active';
		currentDiv = document.getElementById(vc_active).className = 'vc_change';
	}
	}
};

//ГОРЯЧИЕ КЛАВИШИ END

//БОКОВОЕ МЕНЮ START

document.getElementById('back_menu_pro').onclick = function(){
	'use strict';
	if (d === 1){
		document.getElementById('sub_char_parent').style = 'margin-left:55vw;';
		document.getElementById('output_parent').style = 'margin-left:65%;';
		document.getElementById('arrow').src = "css/back.png";
		document.getElementById('back_menu_parent').style = 'margin-left:5vw;';
		d = 0;
	}
	else {
		document.getElementById('sub_char_parent').style = 'margin-left:30vw;';
		document.getElementById('output_parent').style = 'margin-left:40%;';
		document.getElementById('arrow').src = "css/back2.png";
		document.getElementById('back_menu_parent').style = 'margin-left:-50vw;';
		d = 1;
	}
};

//БОКОВОЕ МЕНЮ END

document.getElementById('menu_button').onclick = function(){
	'use strict';
	if (d2 === 1){
		document.getElementById('output_parent').style = "margin-top:110vh;"
		document.getElementById('sub_char_parent').style = "margin-top:110vh;"
		d2 = 0;
	}
	else {
		document.getElementById('output_parent').style = "margin-top:20vh;"
		document.getElementById('sub_char_parent').style = "margin-top:20vh;"
		d2 = 1;
	}
};

document.getElementById('login').onclick = function(){
	var pass = prompt('Тебя туда звали? Нужен пароль!');
	if (pass === "7437"){
		window.open("beta.html");
	}
	else{
		alert ('Так вот и не надо туда лезть!');
	}
};

document.getElementById('onoffswitch').onchange = function(){
	if (document.getElementById('myonoffswitch').checked == true){
		document.getElementById('xmas').style = "opacity:0;"
	}
	else {
		document.getElementById('xmas').style = "opacity:1;"
	}
}


﻿var VC = 0;
var cost_for_storno = 0;
var d = 1;
var t = 1;
var nbsp = "";
var for_discount = 0;
var discount_percent = 0;
var cost = 0;
var count = 0;
var output = document.getElementById('output');
var output2 = document.getElementById('output2');
var output3 = document.getElementById('output3');
var output4 = document.getElementById('output4');
var multiplicator = 1;
var text_fit = 0;
var vc_flag = false;
var vc_flag_memory = 0;
var dict = {};
	dict['101'] = 10;
	dict[102] = 7;
	dict[103] = 5;
	dict[104] = 3.5;
	dict[105] = 3;
	dict[106] = 2.5;
	dict[107] = 2.2;
	dict[111] = 14;
	dict[112] = 10;
	dict[113] = 8;
	dict[114] = 6;
	dict[115] = 5;
	dict[116] = 4;
	dict[117] = 3.2;
	dict[120] = 17;
	dict[121] = 14;
	dict[122] = 10;
	dict[123] = 7;
	dict[124] = 24;
	dict[125] = 20;
	dict[126] = 15;
	dict[127] = 12;
	dict[128] = 50;
	dict[129] = 60;
	dict[130] = 15;
	dict[131] = 20;
	dict[132] = 15;
	dict[133] = 400;
dict['001'] = 10;
dict['002'] = 7;
dict['003'] = 5;
dict['004'] = 3.5;
dict['005'] = 3;
dict['006'] = 2.5;
dict['007'] = 2.2;
dict['008'] = 14;
dict['009'] = 20;
dict['011'] = 14;
dict['012'] = 10;
dict['013'] = 8;
dict['014'] = 6;
dict['015'] = 5;
dict['016'] = 4;
dict['017'] = 3.2;
dict['020'] = 17;
dict['021'] = 14;
dict['022'] = 10;
dict['023'] = 7;
dict['024'] = 24;
dict['025'] = 20;
dict['026'] = 15;
dict['027'] = 12;
dict['029'] = 20;
dict['030'] = 30;
	dict[201] = 10;
	dict[202] = 7;
	dict[203] = 5;
	dict[204] = 3.5;
	dict[205] = 3;
	dict[206] = 2.5;
	dict[207] = 2.2;
	dict[208] = 14;
	dict[209] = 20;
	dict[211] = 14;
	dict[212] = 10;
	dict[213] = 8;
	dict[214] = 6;
	dict[215] = 5;
	dict[216] = 4;
	dict[217] = 3.2;
	dict[220] = 17;
	dict[221] = 14;
	dict[222] = 10;
	dict[223] = 7;
	dict[224] = 24;
	dict[225] = 20;
	dict[226] = 15;
	dict[227] = 12;
	dict[229] = 20;
	dict[230] = 30;
dict[301] = 10;
dict[302] = 7;
dict[303] = 5;
dict[304] = 3.5;
dict[305] = 3;
dict[306] = 2.5;
dict[307] = 2.2;
dict[311] = 14;
dict[312] = 10;
dict[313] = 8;
dict[314] = 6;
dict[315] = 5;
dict[316] = 4;
dict[317] = 3.2;
dict[320] = 17;
dict[321] = 14;
dict[322] = 10;
dict[323] = 7;
dict[324] = 24;
dict[325] = 20;
dict[326] = 15;
dict[327] = 12;
	dict[158] = 36;
	dict[159] = 32;
	dict[160] = 28;
	dict[161] = 24;
	dict[162] = 72;
	dict[163] = 64;
	dict[164] = 56;
	dict[165] = 48;
	dict[167] = 20;
	dict[168] = 40;
dict[258] = 36;
dict[259] = 32;
dict[260] = 28;
dict[261] = 24;
dict[262] = 72;
dict[263] = 64;
dict[264] = 56;
dict[265] = 48;
	dict[358] = 36;
	dict[359] = 32;
	dict[360] = 28;
	dict[361] = 24;
	dict[362] = 72;
	dict[363] = 64;
	dict[364] = 56;
	dict[365] = 48;
dict['058'] = 36;
dict['059'] = 32;
dict['060'] = 28;
dict['061'] = 24;
dict['062'] = 72;
dict['063'] = 64;
dict['064'] = 56;
dict['065'] = 48;
	dict[501] = 1.2;
	dict[502] = 2.5;
	dict[503] = 4;
	dict[504] = 5.5;
	dict[505] = 7;
	dict[506] = 10;
	dict[507] = 12;
	dict[518] = 20;
	dict[519] = 40;
	dict[538] = 36;
	dict[539] = 72;
	dict[521] = 2.5;
	dict[522] = 4.5;
	dict[523] = 8;
	dict[524] = 12;
	dict[525] = 14;
	dict[526] = 16;
	dict[527] = 18;
	dict[508] = 5.5;
	dict[509] = 10;
	dict[528] = 12;
	dict[529] = 16;
	dict[510] = 20;
	dict[511] = 2.5;
	dict[513] = 16;
	dict[514] = 100;
	dict[533] = 32;
	dict[535] = 7;
	dict[536] = 18;
	dict[537] = 20;
dict[150] = 1680;
dict[151] = 840;
dict[152] = 420;
dict[153] = 210;
	dict['040'] = 5;
	dict['041'] = 9;
	dict['044'] = 20;
	dict['045'] = 40;
	dict['046'] = 10;
	dict['047'] = 20;
dict[580] = 25;
dict[581] = 20;
dict[582] = 40;
dict[583] = 25;
dict[584] = 40;
dict[585] = 25;
	dict[401] = 30;
	dict[402] = 35;
	dict[403] = 40;
	dict[404] = 45;
	dict[405] = 50;
	dict[406] = 55;
	dict[407] = 60;
	dict[408] = 65;
	dict[410] = 25;
	dict[411] = 28;
	dict[412] = 30;
	dict[413] = 32;
	dict[414] = 34;
	dict[416] = 40;
	dict[417] = 42;
	dict[418] = 45;
	dict[419] = 48;
	dict[420] = 50;
	dict[421] = 52;
	dict[422] = 55;
	dict[424] = 60;
	dict[431] = 55;
	dict[432] = 60;
	dict[434] = 70;
	dict[435] = 80;
dict[460] = 100;
dict[461] = 100;
dict[462] = 120;
dict[463] = 50;
dict[464] = 50;
dict[465] = 60;
dict[466] = 30;
dict[467] = 30;
dict[469] = 25;
dict[470] = 25;
dict[480] = 3;
	dict['070'] = 0.85;
	dict['071'] = 0.75;
	dict['074'] = 1.50;
	dict['080'] = 15;
	dict['081'] = 15;
dict[170] = 0.85;
dict[171] = 0.75;
dict[174] = 1.50;
	dict[190] = 11;
	dict[191] = 13;
	dict[192] = 5.5;
	dict[193] = 15;
	dict[194] = 25;
	dict[195] = 3;
	dict[196] = 13;
dict[181] = 100;
dict[182] = 50;
dict[183] = 35;
dict[184] = 200;
dict[185] = 150;
dict[186] = 100;
	dict[801] = 10;
	dict[802] = 20;
	dict[803] = 40;
	dict[804] = 150;
dict[491] = 140;
dict[492] = 150;
dict[493] = 160;
dict[494] = 170;
dict[495] = 180;
dict[496] = 190;
dict[497] = 200;
dict[498] = 210;
dict[499] = 220;
dict[500] = 180;
	dict[600] = 30;
	dict[601] = 50;
	dict[602] = 60;
	dict[603] = 50;
	dict[604] = 80;
	dict[605] = 100;
dict[700] = 10;
dict[701] = 8;
dict[702] = 3;
dict[703] = 6;
dict[704] = 100;
dict[705] = 8;
dict[706] = 50;
dict[707] = 10;
dict[717] = 2500;
dict[720] = 100;
dict[721] = 170;
dict[740] = 0.5;
dict[762] = 2.5;
dict[770] = 1;
dict[771] = 0.5;
dict[772] = 0.5;
dict[773] = 0.5;
dict[774] = 5;
dict[775] = 50;
dict[776] = 15;
dict[777] = 20;
dict[779] = 500;
dict[781] = 100;
dict[782] = 20;
dict[783] = 120;
dict[784] = 40;
dict[785] = 200;

var dict_for_error = {};
	dict_for_error['101'] = 9;
	dict_for_error[102] = 49;
	dict_for_error[103] = 99;
	dict_for_error[104] = 499;
	dict_for_error[105] = 999;
	dict_for_error[106] = 4999;
	dict_for_error[111] = 9;
	dict_for_error[112] = 49;
	dict_for_error[113] = 99;
	dict_for_error[114] = 499;
	dict_for_error[115] = 999;
	dict_for_error[116] = 4999;
	dict_for_error[120] = 9;
	dict_for_error[121] = 49;
	dict_for_error[122] = 99;
	dict_for_error[124] = 9;
	dict_for_error[125] = 49;
	dict_for_error[126] = 99;
dict_for_error['001'] = 9;
dict_for_error['002'] = 49;
dict_for_error['003'] = 99;
dict_for_error['004'] = 499;
dict_for_error['005'] = 999;
dict_for_error['006'] = 4999;
dict_for_error['011'] = 9;
dict_for_error['012'] = 49;
dict_for_error['013'] = 99;
dict_for_error['014'] = 499;
dict_for_error['015'] = 999;
dict_for_error['016'] = 4999;
dict_for_error['020'] = 9;
dict_for_error['021'] = 49;
dict_for_error['022'] = 99;
dict_for_error['024'] = 9;
dict_for_error['025'] = 49;
dict_for_error['026'] = 99;
	dict_for_error[201] = 9;
	dict_for_error[202] = 49;
	dict_for_error[203] = 99;
	dict_for_error[204] = 499;
	dict_for_error[205] = 999;
	dict_for_error[206] = 4999;
	dict_for_error[211] = 9;
	dict_for_error[212] = 49;
	dict_for_error[213] = 99;
	dict_for_error[214] = 499;
	dict_for_error[215] = 999;
	dict_for_error[216] = 4999;
	dict_for_error[220] = 9;
	dict_for_error[221] = 49;
	dict_for_error[222] = 99;
	dict_for_error[224] = 9;
	dict_for_error[225] = 49;
	dict_for_error[226] = 99;
dict_for_error[301] = 9;
dict_for_error[302] = 49;
dict_for_error[303] = 99;
dict_for_error[304] = 499;
dict_for_error[305] = 999;
dict_for_error[306] = 4999;
dict_for_error[311] = 9;
dict_for_error[312] = 49;
dict_for_error[313] = 99;
dict_for_error[314] = 499;
dict_for_error[315] = 999;
dict_for_error[316] = 4999;
dict_for_error[320] = 9;
dict_for_error[321] = 49;
dict_for_error[322] = 99;
dict_for_error[324] = 9;
dict_for_error[325] = 49;
dict_for_error[326] = 99;
	dict_for_error['058'] = 5;
	dict_for_error['059'] = 19;
	dict_for_error['060'] = 49;
	dict_for_error['062'] = 5;
	dict_for_error['063'] = 19;
	dict_for_error['064'] = 49;
dict_for_error[158] = 5;
dict_for_error[159] = 19;
dict_for_error[160] = 49;
dict_for_error[162] = 5;
dict_for_error[163] = 19;
dict_for_error[164] = 49;
	dict_for_error[258] = 5;
	dict_for_error[259] = 19;
	dict_for_error[260] = 49;
	dict_for_error[262] = 5;
	dict_for_error[263] = 19;
	dict_for_error[264] = 49;
dict_for_error[358] = 5;
dict_for_error[359] = 19;
dict_for_error[360] = 49;
dict_for_error[362] = 5;
dict_for_error[363] = 19;
dict_for_error[364] = 49;
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
dict_for_error[720] = 20;
dict_for_error[721] = 20;




var currentDiv = 0; 
var output_str = 0;

//ЦИФРОВОЙ БЛОК START

document.getElementById('0').onclick = function(){
	'use strict';
	document.getElementById('cheque_form').value += 0;
};


document.getElementById('1').onclick = function(){
	'use strict';
	document.getElementById('cheque_form').value += 1;
};

document.getElementById('2').onclick = function(){
	'use strict';
	document.getElementById('cheque_form').value += 2;
};

document.getElementById('3').onclick = function(){
	'use strict';
	document.getElementById('cheque_form').value += 3;
};

document.getElementById('4').onclick = function(){
	'use strict';
	document.getElementById('cheque_form').value += 4;
};

document.getElementById('5').onclick = function(){
	'use strict';
	document.getElementById('cheque_form').value += 5;
};

document.getElementById('6').onclick = function(){
	'use strict';
	document.getElementById('cheque_form').value += 6;
};

document.getElementById('7').onclick = function(){
	'use strict';
	document.getElementById('cheque_form').value += 7;
};

document.getElementById('8').onclick = function(){
	'use strict';
	document.getElementById('cheque_form').value += 8;
};

document.getElementById('9').onclick = function(){
	'use strict';
	document.getElementById('cheque_form').value += 9;
};

//ЦИФРОВОЙ БЛОК END

//СПЕЦИАЛЬНЫЙ БЛОК START

document.getElementById('rst').onclick = function(){
	'use strict';
	alert(count);
};


document.getElementById('ctrn').onclick = function(){
	'use strict';
	text_fit -= 1;
	if (text_fit <= 10){
			document.getElementById('output_parent').style = "font-size: 3.3vh;"
	};
	if (text_fit > 10){
			document.getElementById('output_parent').style = "font-size: 2.5vh;"
	};
	if (text_fit > 15){
			document.getElementById('output_parent').style = "font-size: 2vh;"
	};
	var currentDiv1 = document.getElementById('output').lastChild;
	var output_str_for_s = currentDiv1.innerHTML;
	var multiplicator_for_s = currentDiv1.innerHTML.substring(10,12);
	output.removeChild(currentDiv1);
	var currentDiv2 = document.getElementById('output2').lastChild;
	document.getElementById('output2').removeChild(currentDiv2);
	var currentDiv3 = document.getElementById('output3').lastChild;
	if (currentDiv3.innerHTML.substring(1,3) === "nb" ){
		document.getElementById('output3').removeChild(currentDiv3);
		cost = dict[output_str_for_s.substring(6,9)];
		count = count - (Math.ceil((cost*multiplicator_for_s)*2))/2;
		document.getElementById('total').innerHTML = count + "р.";
		return false;
	}
	else {
		cost = dict[output_str_for_s.substring(6,9)];
		count = count - (Math.ceil(((cost*multiplicator_for_s)*(1-(currentDiv3.innerHTML.substring(1,3))/100))*2)/2);
		document.getElementById('total').innerHTML = count + "р.";
		document.getElementById('output3').removeChild(currentDiv3);
		return false;
	}
};

document.getElementById('VC').onclick = function(){
	'use strict';
	multiplicator = 1;
	VC = document.getElementById('cheque_form').value;
	cost = dict[document.getElementById('cheque_form').value];
	if ((cost/1) === cost){
		text_fit++;
		if (text_fit <= 10){
			document.getElementById('under_output').style = "font-size: 3.3vh;"
		};
		if (text_fit > 10){
			document.getElementById('under_output').style = "font-size: 2.5vh;"
		};
		if (text_fit > 15){
			document.getElementById('under_output').style = "font-size: 2vh;"
		};
		document.getElementById('cheque_form').value = "";
		var newDiv = document.createElement('div');
		var newDiv2 = document.createElement('div');
		var newDiv3 = document.createElement('div');
		newDiv2.innerHTML = cost + "р.";
		output2.appendChild(newDiv2);
		newDiv3.innerHTML = "&nbsp;";
		output3.appendChild(newDiv3);
		newDiv.innerHTML = "&nbsp;" + VC + ":1";
		output.appendChild(newDiv);
		count += Math.ceil((cost*multiplicator)*2)/2;
		document.getElementById('total').innerHTML = count + "р.";
		return false;
	}
	else{
		alert('Артикул не найден');
	}
};

document.getElementById('cng').onclick = function(){
	'use strict';
	t = multiplicator;
	currentDiv = document.getElementById('output').lastChild; 
	output_str = currentDiv.innerHTML;
	multiplicator = document.getElementById('cheque_form').value;
	document.getElementById('cheque_form').value = "";
	currentDiv.innerHTML = "&nbsp;" + output_str.substring(6,10) + multiplicator; //заменяем значение
	count += (cost*multiplicator) - (cost*t);
	count = Math.ceil(count*2)/2;
	document.getElementById('total').innerHTML = count + "р.";
	
};

document.getElementById('dPos').onclick = function(){
	'use strict';
	discount_percent = prompt("Введите процент", 50);
	var currentDiv = document.getElementById('output3').lastChild; 
	var currentDiv2 = document.getElementById('output2').lastChild; 
	var currentDiv3 = document.getElementById('output3').lastChild.innerHTML.slice(1,-7);
	if (currentDiv3/1 === 0){
		for_discount = document.getElementById('output2').lastChild.innerHTML.slice(0,-2);
		currentDiv2.innerHTML = Math.round(for_discount*(1-(discount_percent/100))*100)/100 + "р.";
		currentDiv.innerHTML = "|" + discount_percent + "%";
		count = (count - for_discount*multiplicator) + (for_discount*multiplicator*(1-(discount_percent/100))) ;  //OOOH MY GOOOOOOOOD!!! (c)Asking Alexandria
		count = Math.ceil(count*2)/2;
		document.getElementById('total').innerHTML = count + "р.";
	}
	else{
		for_discount = document.getElementById('output2').lastChild.innerHTML.slice(0,-2);
		var temp = document.getElementById('output').lastChild.innerHTML;
		cost = dict[temp.substring(6,9)];
		currentDiv2.innerHTML = Math.round(for_discount*(1-(discount_percent/100))*100)/100 + "р.";
		currentDiv.innerHTML = "|" + (1 - (for_discount*(1-(discount_percent/100))/cost))*100 + "%";
		count = (count - for_discount*multiplicator) + (for_discount*multiplicator*(1-(discount_percent/100))) ;  //OOOH MY GOOOOOOOOD!!! (c)Asking Alexandria
		count = Math.ceil(count*2)/2;
		document.getElementById('total').innerHTML = count + "р.";
	};
	
};

document.getElementById('dAll').onclick = function(){
	'use strict';
	discount_percent = prompt("Введите процент", 20);
	var childs = document.getElementById('output2').getElementsByTagName('div');
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
				document.getElementById('under_output').style = "font-size: 2.7vh;"
			};
			if (text_fit > 10){
				document.getElementById('under_output').style = "font-size: 2.3vh;"
			};
			if (text_fit > 15){
				document.getElementById('under_output').style = "font-size: 2vh;"
			};
			document.getElementById('cheque_form').value = "";
			var newDiv = document.createElement('div');
			newDiv.className = "vc_change";
			var newDiv2 = document.createElement('div');
			var newDiv3 = document.createElement('div');
			var newDiv4 = document.createElement('div');
			var newRadio = document.createElement('input');
			newRadio.type = "radio";
			newRadio.checked = "checked";
			newDiv.innerHTML = "&nbsp;" + VC + ":1";
			output.appendChild(newDiv);
			newDiv2.innerHTML = cost + "р.";
			output2.appendChild(newDiv2);
			newDiv3.innerHTML = "&nbsp;";
			output3.appendChild(newDiv3);
			newDiv4.innerHTML = "&nbsp;";
			output4.appendChild(newRadio);
			var vc_change_collect = document.getElementsByClassName("vc_change");
			for(var v = 0; v < vc_change_collect.length; v++ ){
				vc_change_collect[v].onclick = function(){
					this.style="background:rgba(0,0,0,0.3)";
					alert(v);
				}	
			}
					
			count += Math.ceil((cost*multiplicator)*2)/2;
			document.getElementById('total').innerHTML = count + "р.";
			return false;
		}
		else{
			alert('Артикул не найден');
		}
	}
	if (e.keyCode === 107){ //+
		t = multiplicator;
		multiplicator = document.getElementById('cheque_form').value;
		currentDiv = document.getElementById('output').lastChild; 
		output_str = currentDiv.innerHTML;
		document.getElementById('cheque_form').value = "";
		cost = dict[output_str.substring(6,9)];
		currentDiv.innerHTML = "&nbsp;" + output_str.substring(6,10) + multiplicator;
		count += (cost*multiplicator) - Math.ceil((cost*t)*2)/2;
		count = Math.ceil(count*2)/2;
		document.getElementById('total').innerHTML = count + "р.";
		for_discount = multiplicator*cost;
		if (multiplicator > +dict_for_error[output_str.substring(6,9)]){
			document.getElementById('output4').lastChild.innerHTML = "!";
		}
		else{
			document.getElementById('output4').lastChild.innerHTML = "&nbsp;";
		}
		return false;
	}
	
	if (e.keyCode === 110){
		text_fit -= 1;
		if (text_fit <= 10){
				document.getElementById('output_parent').style = "font-size: 3vh;"
		};
		if (text_fit > 10){
				document.getElementById('output_parent').style = "font-size: 2.5vh;"
		};
		if (text_fit > 15){
				document.getElementById('output_parent').style = "font-size: 2vh;"
		};
		var currentDiv1 = document.getElementById('output').lastChild;
		var output_str_for_s = currentDiv1.innerHTML;
		var multiplicator_for_s = currentDiv1.innerHTML.slice(10,length.output_str_for_s);
		output.removeChild(currentDiv1);
		var currentDiv2 = document.getElementById('output2').lastChild;
		document.getElementById('output2').removeChild(currentDiv2);
		var currentDiv3 = document.getElementById('output3').lastChild;
		var currentDiv4 = document.getElementById('output4').lastChild;
		document.getElementById('output4').removeChild(currentDiv4);
		if (currentDiv3.innerHTML.substring(1,3) === "nb" ){
			document.getElementById('output3').removeChild(currentDiv3);
			cost = dict[output_str_for_s.substring(6,9)];
			count = count - (Math.ceil((cost*multiplicator_for_s)*2))/2;
			document.getElementById('total').innerHTML = count + "р.";
			return false;
		}
		else {
			cost = dict[output_str_for_s.substring(6,9)];
			count = count - (Math.ceil(((cost*multiplicator_for_s)*(1-(currentDiv3.innerHTML.substring(1,3))/100))*2)/2);
			document.getElementById('total').innerHTML = count + "р.";
			document.getElementById('output3').removeChild(currentDiv3);
			return false;
		}
	}	
};

//ГОРЯЧИЕ КЛАВИШИ END

//БОКОВОЕ МЕНЮ START

document.getElementById('back_menu_pro').onclick = function(){
	'use strict';
	if (d === 1){
		document.getElementById('char_parent').style = 'margin-left:20%;';
		document.getElementById('sub_char_parent').style = 'margin-left:45%;';
		document.getElementById('output_parent').style = 'margin-left:60%;';
		document.getElementById('arrow').src = "css/back.png";
		d = 0;
	}
	else {
		document.getElementById('char_parent').style = 'margin-left:-30%;';
		document.getElementById('sub_char_parent').style = 'margin-left:25%;';
		document.getElementById('output_parent').style = 'margin-left:40%;';
		document.getElementById('arrow').src = "css/back2.png";
		d = 1;
	}
};

//БОКОВОЕ МЕНЮ END

document.getElementById('info').onclick = function(){
	'use strict'
	if (d === 1){
		document.getElementById('info_parent').style = 'width:70vw; height:80vh;bottom:10vh;right:20vw;opacity:1;';
		document.getElementById('output_parent').style = 'opacity:0.2;';
		document.getElementById('sub_char_parent').style = 'opacity:0.2;';
		document.getElementById('1_art').style = 'display:block; margin-left:2vw;margin-top:2vh;font-size:2vh;';
		document.getElementById('2_art').style = 'display:block; margin-left:2vw;margin-top:2vh;font-size:2vh;';
		document.getElementById('3_art').style = 'display:block; margin-left:2vw;margin-top:15vh;font-size:2vh;';
		document.getElementById('4_art').style = 'display:block; margin-left:50vw;margin-top:5vh;font-size:2vh;';
		d = 0;
	}
	else {
		document.getElementById('info_parent').style = 'width:10vw; height:3vh;opacity:0;';
		document.getElementById('output_parent').style = 'opacity:1';
		document.getElementById('sub_char_parent').style = 'opacity:1;';
		document.getElementById('sub_char_parent').style = 'opacity:1;';
		setTimeout(function toggle(){
			document.getElementById('1_art').style = 'display:none; margin-left:2vw;margin-top:2vh;font-size:2vh;';
			document.getElementById('2_art').style = 'display:none; margin-left:2vw;margin-top:2vh;font-size:2vh;';
			document.getElementById('3_art').style = 'display:none; margin-left:2vw;margin-top:15vh;font-size:2vh;';
			document.getElementById('4_art').style = 'display:none; margin-left:50vw;margin-top:5vh;font-size:2vh;'
		}, 500)
		d = 1;
	}
}

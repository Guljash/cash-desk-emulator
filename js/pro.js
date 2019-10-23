var VC = 0;
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
var multiplicator = 1;
var dict = {};
	dict[101] = 10;
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
	dict[358] = 32;
	dict[359] = 32;
	dict[360] = 28;
	dict[361] = 24;
	dict[362] = 72;
	dict[363] = 64;
	dict[364] = 56;
	dict[365] = 48;
dict[058] = 36;
dict[059] = 32;
dict[060] = 28;
dict[061] = 24;
dict[062] = 72;
dict[063] = 64;
dict[064] = 56;
dict[065] = 48;
	dict[501] = 1.2;
	dict[502] = 2.5;
	dict[503] = 4;
	dict[504] = 5.5;
	dict[505] = 7;
	dict[506] = 10;
	dict[507] = 12;
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
	dict[514] = 45;
	dict[533] = 32;
	dict[535] = 7;
	dict[536] = 18;
	dict[537] = 20;
dict[150] = 1680;
dict[151] = 840;
dict[152] = 420;
dict[153] = 210;
	dict[040] = 5;
	dict[041] = 9;
	dict[044] = 20;
	dict[045] = 40;
	dict[046] = 10;
	dict[047] = 20;
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
	dict[070] = 0.85;
	dict[071] = 0.75;
	dict[074] = 1.50;
	dict[080] = 15;
	dict[081] = 15;
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
dict[784] = 10;
dict[785] = 200;

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
	var currentDiv1 = document.getElementById('output').lastChild;
		output.removeChild(currentDiv1);
		var currentDiv2 = document.getElementById('output2').lastChild;
		document.getElementById('output2').removeChild(currentDiv2);
		var currentDiv3 = document.getElementById('output3').lastChild;
		alert(currentDiv3.innerHTML.substring(1,3));
		if (currentDiv3.innerHTML.substring(1,3) === "nb" ){
			document.getElementById('output3').removeChild(currentDiv3);
			count = count - cost*multiplicator;
			document.getElementById('total').innerHTML = count + "р.";
		}
		else {
			count = count - (cost*multiplicator*(1-(currentDiv3.innerHTML.substring(1,3))/100));
			document.getElementById('total').innerHTML = count + "р.";
			document.getElementById('output3').removeChild(currentDiv3);
		}
};

document.getElementById('VC').onclick = function(){
	'use strict';
	multiplicator = 1;
	VC = document.getElementById('cheque_form').value;
	cost = dict[document.getElementById('cheque_form').value];
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
	count += (cost*multiplicator);
	document.getElementById('total').innerHTML = count + "р.";
	for_discount = multiplicator*cost;
	return false;
};

document.getElementById('cng').onclick = function(){
	'use strict';
	t = multiplicator;
	multiplicator = document.getElementById('cheque_form').value;
	document.getElementById('cheque_form').value = "";
	var currentDiv = document.getElementById('output').lastChild; 
	var output_str = currentDiv.innerHTML; //берем значение последнего дочернего дива
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
	currentDiv2.innerHTML = cost*(1-(discount_percent/100)) + "р.";
	currentDiv.innerHTML = "|" + discount_percent + "%";
	count = (count - for_discount) + (for_discount*(1-(discount_percent/100))) ;
	count = Math.ceil(count*2)/2;
	document.getElementById('total').innerHTML = count + "р.";
	
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
		childs2[k].innerHTML =  "|" + dall_percent + "%" + "&nbsp;" ;
	}
	
	for(var i=0; i<childs.length; i++){
		var c = childs[i].innerHTML;
		c = c.substring(0,c.length-2);
		childs[i].innerHTML = c - (c*(discount_percent/100)) + "р.";
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
		count += (cost*multiplicator);
		document.getElementById('total').innerHTML = count + "р.";
		for_discount = multiplicator*cost;
		return false;
	}
	if (e.keyCode === 107){ //+
		t = multiplicator;
		multiplicator = document.getElementById('cheque_form').value;
		document.getElementById('cheque_form').value = "";
		var currentDiv = document.getElementById('output').lastChild; 
		var output_str = currentDiv.innerHTML;
		currentDiv.innerHTML = "&nbsp;" + output_str.substring(6,10) + multiplicator;
		count += (cost*multiplicator) - (cost*t);
		count = Math.ceil(count*2)/2;
		document.getElementById('total').innerHTML = count + "р.";
		for_discount = multiplicator*cost;
		return false;
	}
	
	if (e.keyCode === 110){
		var currentDiv1 = document.getElementById('output').lastChild;
		output.removeChild(currentDiv1);
		var currentDiv2 = document.getElementById('output2').lastChild;
		document.getElementById('output2').removeChild(currentDiv2);
		var currentDiv3 = document.getElementById('output3').lastChild;
		if (currentDiv3.innerHTML.substring(1,3) === "nb" ){
			document.getElementById('output3').removeChild(currentDiv3);
			count = count - cost*multiplicator;
			document.getElementById('total').innerHTML = count + "р.";
		}
		else {
			count = count - (cost*multiplicator*(1-(currentDiv3.innerHTML.substring(1,3))/100));
			document.getElementById('total').innerHTML = count + "р.";
			document.getElementById('output3').removeChild(currentDiv3);
		}
		var temp = document.getElementById('output').lastChild.innerHTML.substring(6,9);
		alert(temp);
		cost = dict[temp];
		return false;
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




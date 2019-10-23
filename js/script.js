var input =  document.getElementById('count_f');
var multiplicator = 120;
var d = 1;
var count = null;


input.oninput = function() {
    document.getElementById('PLU').innerHTML = input.value * multiplicator;
	document.getElementById('result').innerHTML = (input.value * multiplicator) * count + "р.";
}

show_window = function() {
    document.getElementById('count_body').style="margin-left:5%;margin-top:1%;height:90%;width:90%;cursor:default;opacity:0.9;"
	document.getElementById('count_f').style="display:block;"
	document.getElementById('sub').style="opacity:1;"
	document.getElementById('close').style="margin-top:0.3%; margin-left:90%;position:absolute;color:Gainsboro;font-size:3vw;cursor:pointer;display:block;"
	document.getElementById('A01text').style="opacity:0;"
    document.getElementById('A1text').style="opacity:0;"
	document.getElementById('A2text').style="opacity:0;"
	document.getElementById('A3text').style="opacity:0;"
	document.getElementById('A4text').style="opacity:0;"
	}

document.getElementById('count_body').onclick = function() { 
	if (d == 1) {
		document.getElementById('count_body').style="margin-left:5%;margin-top:1%;height:90%;width:90%;cursor:default;opacity:0.9;"
		document.getElementById('count_f').style="display:block;"
		document.getElementById('sub').style="opacity:1;"
		document.getElementById('close').style="margin-top:0.3%; margin-left:90%;position:absolute;color:Gainsboro;font-size:3vw;cursor:pointer;display:block;"
		document.getElementById('A01text').style="opacity:0;"
        document.getElementById('A1text').style="opacity:0;"
		document.getElementById('A2text').style="opacity:0;"
		document.getElementById('A3text').style="opacity:0;"
		document.getElementById('A4text').style="opacity:0;"
		d = 0
	}		
}

document.getElementById('A01').onclick = function() { 
	if (d == 1) {
		show_window()
		document.getElementById('water_text').innerHTML="A0"
		document.getElementById('text_count').innerHTML="170:"
		multiplicator = 120
		d = 0
		count = 0.85
	}		
}

document.getElementById('A1').onclick = function() { 
	if (d === 1) {
		show_window()
		document.getElementById('water_text').innerHTML="A1"
		document.getElementById('text_count').innerHTML="170:"
		multiplicator = 60
		d = 0
		count = 0.85
	}		
}

document.getElementById('A2').onclick = function() { 
	if (d == 1) {
		show_window()
		document.getElementById('water_text').innerHTML="A2"
		document.getElementById('text_count').innerHTML="171:"
		multiplicator = 42
		d = 0
		count = 0.75
	}		
}

document.getElementById('A3').onclick = function() { 
	if (d == 1) {
		show_window()
		document.getElementById('water_text').innerHTML="A3"
		multiplicator = 42
		d = 0
		count = 0.75
	}		
}


document.getElementById('close').onclick = function() { 
	if (d == 0) {
		document.getElementById('count_body').style="height:5%;width:5%;margin-right:50%;margin-top:43%;cursor:pointer;opacity:0.9;position:absolute;"
		document.getElementById('count_f').style="display:none;"
		document.getElementById('sub').style="display:none;"
		document.getElementById('close').style="margin-top:0.3%; margin-left:83%;position:absolute;color:Gainsboro;font-size:3vw;cursor:pointer;display:none;"
		document.getElementById('A01text').style="display:block;"
        document.getElementById('A1text').style="display:block;"
		document.getElementById('A2text').style="display:block;"
		document.getElementById('A3text').style="display:block;"
		document.getElementById('A4text').style="display:block;"
		d = 1
	}
}


var color_select = null
var d_for_mat = null

document.getElementById('color_form').onchange = function() {
    color_select = this.value
    if (color_select == "Grayscale") {
	    d_for_mat = 1
	}
	else {
	    d_for_mat = 0
	}
}

document.getElementById('back_menu').onmouseover = function() {
    this.style="width:15%;margin-left:42.5%;background-color:black;opacity:0.7;"
	document.getElementById('cs_color').style="opacity:1;font-size:70%;margin-left:8%;white-space:nowrap;"
	document.getElementById('color_form').style="display:block;"

	if (d_for_mat == 1) {
	    document.getElementById('cs_mat').style="opacity:0;font-size:65%;margin-left:8%;white-space:nowrap;"
		document.getElementById('parent').style="filter: grayscale(100%);transition:1s;"
	} else {
	    document.getElementById('cs_mat').style="opacity:1;font-size:65%;margin-left:8%;white-space:nowrap;"
		document.getElementById('parent').style="filter:grayscale(0%);transition:1s;"
		document.getElementById('mat_form').style="display:block;"
	}
}
document.getElementById('back_menu').onmouseout = function() {
    this.style="width:3%;margin-left:48.5%;opacity:0.7;"
    document.getElementById('cs_color').style="transition:1s;opacity:0;font-size:70%;margin-left:8%;white-space:nowrap;"
	document.getElementById('color_form').style="display:none;"
	document.getElementById('cs_mat').style="transition:1s;opacity:0;font-size:65%;margin-left:8%;white-space:nowrap;"
	document.getElementById('mat_form').style="display:none;"
	if (d_for_mat == 1) {
	    document.getElementById('cs_mat').style="opacity:0;font-size:65%;margin-left:8%;white-space:nowrap;"
		document.getElementById('mat_form').style="display:none;"
	}
}





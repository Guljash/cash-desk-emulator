var dl = 0;
var dr = 0
	
document.getElementById('left_main_button').onclick = function(){
	'use strict';
	if (dl === 0){
		dl = 1;
		document.getElementById('left_sub_button').style = 'height:40vh;';	
		document.getElementById('a4').style = 'opacity:1;transition:1.5s;';	
		document.getElementById('a3').style = 'opacity:1;transition:1.5s;';			
	}
	else{
		dl = 0
		document.getElementById('left_sub_button').style = 'height:0vh;';
		document.getElementById('a4').style = 'opacity:0;transition:0.5s;';
		document.getElementById('a3').style = 'opacity:0;transition:0.5s;';			
	}
};

document.getElementById('right_main_button').onclick = function(){
	'use strict';
	if (dr === 0){
		dr = 1;
		document.getElementById('right_sub_button').style = 'height:40vh;';
		document.getElementById('wfbw').style = 'opacity:1;transition:1.5s;';	
		document.getElementById('wfc').style = 'opacity:1;transition:1.5s;';		
	}
	else{
		dr = 0
		document.getElementById('right_sub_button').style = 'height:0vh;';
		document.getElementById('wfbw').style = 'opacity:0;transition:0.8s;';	
		document.getElementById('wfc').style = 'opacity:0;transition:0.8s;';
	}
};

document.getElementById('l_bot_main_button').onclick = function(){
	'use strict';
	if (dl === 0){
		dl = 1;
		document.getElementById('l_bot_sub_button').style = 'height:33vh;';	
		document.getElementById('scan_a4a3').style = 'opacity:1;transition:1.7s;';	
		document.getElementById('scan_a4a3_bw').style = 'opacity:1;transition:1.7s;';			
	}
	else{
		dl = 0
		document.getElementById('l_bot_sub_button').style = 'height:0vh;';
		document.getElementById('scan_a4a3').style = 'opacity:0;transition:0.5s;';
		document.getElementById('scan_a4a3_bw').style = 'opacity:0;transition:0.5s;';			
	}
};

document.getElementById('r_bot_main_button').onclick = function(){
	'use strict';
	if (dl === 0){
		dl = 1;
		document.getElementById('r_bot_sub_button').style = 'height:33vh;';	
		document.getElementById('vis_card').style = 'opacity:1;transition:1.7s;';			
	}
	else{
		dl = 0
		document.getElementById('r_bot_sub_button').style = 'height:0vh;';
		document.getElementById('vis_card').style = 'opacity:0;transition:0.5s;';	
	}
};
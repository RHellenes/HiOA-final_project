
function mobile_nav(){
	if(window.innerWidth < 1024){ 
		// Hindrer mobile_nav i å slå ut på desktop versjon
		console.log('Det kommer opp et varsel her, om classList, men det er ikke noe galt som skjer for brukeren.')
		// Hviser hele nav + blåfarge
		document.querySelector('.header').classList.toggle('open_menu')
		document.querySelector('nav').classList.toggle('block_nav')


		// Menu_icon
		document.querySelector('.line1').classList.toggle('white_bg');
		document.querySelector('.line1').classList.toggle('rotate1');
		document.querySelector('.icon_text').classList.toggle('white_text'); 
		document.querySelector('.icon_text').classList.toggle('move_away'); 
		document.querySelector('.line2').classList.toggle('white_bg'); 
		document.querySelector('.line2').classList.toggle('rotate2');
		

		// Logo

		//  document.querySelectorAll gir en nodeList, denne under lager den om til en array. 
		let logoArray = Array.prototype.slice.call(document.querySelectorAll('.st1'))
		
		// iterer over alle elementene i svg-filen slik at den gjør endringene på alle elementene. 
	 	for (let i = 0; i <= 13; i++) {
	 		logoArray[i].classList.toggle('white_svg_fill');
	 		// Denne vil gi et varsel i consolen at classList er "undefined". 
	 		// Finner ikke ut hvordan jeg skal løse det, men alt oppfører seg slik det skal.
	 	}	
	 	
	}
	
	else{

	}
	
};

// Video player delay

document.getElementById('laptop').addEventListener('ended',myHandler,false);

function myHandler(e){

	setTimeout(function(){
		document.getElementById('laptop').play();
	}, 2000);


};
document.getElementById('mobile').addEventListener('ended',myHandlerTwo,false);

function myHandlerTwo(e){

	setTimeout(function(){
		document.getElementById('mobile').play();
	}, 1000);


}


// 









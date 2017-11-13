
	function mobile_nav(){
		if(window.innerWidth < 1024){ 
			/*Hindrer mobile_nav i å slå ut på desktop versjon*/
			
				/*Hviser hele nav + blåfarge*/
				document.querySelector('.header').classList.toggle('open_menu')
				document.querySelector('nav').classList.toggle('block_nav')


				/*menu_icon*/
				document.querySelector('.line1').classList.toggle('white_bg');
				document.querySelector('.line1').classList.toggle('rotate1');
				document.querySelector('.icon_text').classList.toggle('white_text'); 
				document.querySelector('.icon_text').classList.toggle('move_away'); 
				document.querySelector('.line2').classList.toggle('white_bg'); 
				document.querySelector('.line2').classList.toggle('rotate2');
				
				
				

				/*Logo*/
			 	for (let i = 0; i <= 13; i++) {
			 		document.querySelectorAll('.st1')[i].classList.toggle('white_svg_fill');
			 	
			 	}	
			}
		
		else{

			}
	}
	/*function rmv_nav{

	}*/
/*	function resize(){
		if(window.innerWidth < 1024){
			document.querySelector('.header').classList.remove('open_menu')
		}
		else{

		}

	}*/


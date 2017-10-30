function sidebar() {

	document.querySelector('.header').classList.toggle('open_menu')

	/*menu_icon*/
	document.querySelector('.line1').classList.toggle('white_bg');
	document.querySelector('.icon_text').classList.toggle('white_text');
	document.querySelector('.line2').classList.toggle('white_bg');
	document.querySelector('.line3').classList.toggle('white_bg');
	document.querySelector('.second_line').classList.toggle('move_away');

	/*Logo*/
 	document.querySelector('.fill_color1').classList.toggle('white_svg_fill');
 	document.querySelector('.fill_color2').classList.toggle('white_svg_fill');
 	document.querySelector('.fill_color3').classList.toggle('white_svg_fill');
 	document.querySelector('.fill_color4').classList.toggle('white_svg_fill');
 	document.querySelector('.fill_color5').classList.toggle('white_svg_fill');
 	document.querySelector('.fill_color6').classList.toggle('white_svg_fill');

}


if(header.contains('.open_menu')){
	console.log("This works")
}


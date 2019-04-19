	
		$(".container").draggable();
		$( ".container" ).resizable();

			function getRandomColor() {
				var letters = '0123456789ABCDEF';
				var color = '#';
				for (var i = 0; i < 6; i++) {
				  color += letters[Math.floor(Math.random() * 16)];
				}
				return color;
			  }
    	
	
			function changeColors(id) {
				document.getElementById(id).onclick = function() {
					document.getElementById(id).style.backgroundColor =  getRandomColor();     
					    
				  }
			}

			changeColors("footer");
			changeColors("fifth");
			changeColors("fourth-block");
			changeColors("third-block");
			changeColors("second-block");
			changeColors("first-block");
			changeColors("header");
			changeColors("main");
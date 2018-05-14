$(function(){
	// Select table
	const table = $("#pixel_canvas");

	// When size is submitted by the user, call makeGrid()
	$('input[type=submit]').click(function(ev){
		ev.preventDefault(); //prevent refresh
		makeGrid();
	});

	// pick color and set it to td
	table.on("click", "td", function(){
		var color = "#" + $("#color_value").val();
		$(this).css("background-color", color);
	});

	// turn td back to white
	table.on("dblclick", "td", function(){
		$(this).css("background-color", "white");
	});

	//Reset button for table
	$("input[type=reset]").on("click", function(ev){
		ev.preventDefault(); //prevent refresh
		$("td").css("background-color", "white");
		makeGrid();
	});

	// Function
	function makeGrid(){
		table.children().remove(); //reset table
		// Select size input
		let columns = $("#input_height").val(); //for columns
		let rows = $("#input_width").val();	 //for rows
		for(let i = 0; i < columns; i++){
			if (columns < 50) {
				table.append("<tr></tr>");	
			} 
			for (let j = 0; j < rows; j++) {
				if (rows < 50){
					table.children().last().append("<td></td>");
				}
			}
		}
		// Set default color to TDs
		$("td").css("background-color", "white");
	}
});
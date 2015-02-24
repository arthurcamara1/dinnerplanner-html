var selectedController = function(c,view,model){
	
    $("#print").click(function() {
		c.update('preparation');
	});

    $("#back").click(function() {
		c.update('search');
	});

}
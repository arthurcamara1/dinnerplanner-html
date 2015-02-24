var summaryController = function(c,view,model){
	
	$("#guests").on("keyup", function(){
           var guests= $('#guests').val()
           model.setNumberOfGuests(guests);
           view.update();
    });

	$("#confirm").click(function() {
		c.update('overview');
	});

}
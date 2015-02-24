var summaryController = function(c,view,model){
	
	document.getElementById("guests").addEventListener("click", function(){
           var guests= $('#guests').val()
           model.setNumberOfGuests (guests);
           view.update();
        
    });

    document.getElementById("confirm").addEventListener("click", function(){
            c.update(2);
        
    });

}
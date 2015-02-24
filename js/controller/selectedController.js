var selectedController = function(c,view,model){
	

    document.getElementById("print").addEventListener("click", function(){
            c.update(3);
        
    });
    document.getElementById("back").addEventListener("click", function(){
            c.update(1);
        
    });

}
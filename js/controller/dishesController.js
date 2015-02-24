var dishesController = function(c,view,model){
	

    document.getElementById("starter").addEventListener("click", function(){
          	view.update("starter");
    });
    document.getElementById("main").addEventListener("click", function(){
          	view.update("main dish");
    });
    document.getElementById("dessert").addEventListener("click", function(){
          	view.update("dessert");
    });

}
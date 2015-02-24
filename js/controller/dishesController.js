var dishesController = function(c,view,model){
	

    document.getElementById("starter").addEventListener("click", function(){
    		c.update(1);
          	view.render("starter" ,"refresh");
    });
    document.getElementById("main").addEventListener("click", function(){
    		c.update(1);
          	view.render("main dish","refresh");
    });
    document.getElementById("dessert").addEventListener("click", function(){
    		c.update(1);
          	view.render("dessert","refresh");
    });

}
$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.addDishToMenu(2);
	model.addDishToMenu(100);
	model.addDishToMenu(1);
	//And create the needed controllers and views
	var c = new controller();
	c.update(0); 
	
	var hController = new homeController(c);
	var sumView = new summaryView($("#summary"),model, "main dish",0);
	var sumController = new summaryController(c,sumView,model);
	sumView.render();
	var dView = new dishesView($("#dishes"), model);
	var dController = new dishesController(c,dView,model);
	dView.render("starter");
	var dView1 = new dishesView($("#select"), model);
	//var d1Controller = new dishesView1Controller(dView1,model);
	dView1.render();
	var sView = new selecteddishesView($("#selected_dishes"), model);
	var sViewController = new selectedController(c,sView,model);
	sView.render();
	var dishView = new dishoverviewView($("#sdish"), model);
	//var oController = new overviewViewController(dishView,model);
	dishView.render();
	var prepView = new preparationView($("#prep"), model);
	var pController = new preparationController(c);
	prepView.render();
	
});

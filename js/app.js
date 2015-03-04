$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//And create the needed controllers and views
	var c = new controller();
	
	var hController = new homeController(c);
	var sumView = new summaryView($("#summary"),model, "main dish",0);
	var sumController = new summaryController(c,sumView,model);
	sumView.render();
	
	var dView = new dishesView($("#search"), model);
	var dController = new dishesController(c,dView,model);
	dView.render("starter");
	
	var sView = new selecteddishesView($("#overview"), model);
	var sViewController = new selectedController(c,sView,model);
	sView.render();
	
	var prepView = new preparationView($("#preparation"), model);
	var pController = new preparationController(c);
	prepView.render();

	//show home page first
	c.update('home'); 
	model.setNumberOfGuests(2);
	
});

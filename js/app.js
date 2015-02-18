$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var dView = new dishesView($("#dishes"), model);
	dView.render();
	var dView1 = new dishesView($("#select"), model);
	dView1.render();
	var sView = new selecteddishesView($("#selected_dishes"), model);
	sView.render();
	var dishView = new dishoverviewView($("#sdish"), model);
	dishView.render();
	
});

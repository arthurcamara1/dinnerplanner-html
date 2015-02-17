//ExampleView Object constructor
var totalpriceView = function(container, model) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responded to interaction)

    this.render = function() {
        //model.addDishToMenu(2);
		//model.addDishToMenu(100);
		var price = model.getTotalMenuPrice();
        container.append("Total Price: "+price+" SEK" );
    }
}
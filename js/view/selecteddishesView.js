//ExampleView Object constructor
var selecteddishesView = function(container, model) {

    this.render = function() {
        model.addDishToMenu(2);
		model.addDishToMenu(100);
		model.setNumberOfGuests(4);
		var dishes = model.getFullMenu();
        var price = model.getTotalMenuPrice();
        for (var i = 0; i < dishes.length; i++) {
            var dish = dishes[i];
			var price =model.getDishPrice(dish.id);
            container.append(dishTemplate(dish,price));
        };
    }
}

function sdishTemplate(dish,price) {
    var html = "<div class='dish col-md-2'>";
    html += "<div class='img' style='background-image: url(images/" + dish.image + ")'/>";
    html += "<p class='title'>" + dish.name + "</p>";
    html += "<p class='price'>" + price + "</p>";
    html += "</div>";
    return html;
}

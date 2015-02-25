//ExampleView Object constructor
var selecteddishesView = function(container, model) {
    
    //this will observe changes to the model
    model.addObserver(this);

    var selected_container = container.find("#selected_dishes"),
        guests_container = container.find("#overview_guests");

    this.render = function() {
        guests_container.html(model.getNumberOfGuests());

        selected_container.html("");
		var dishes = model.getFullMenu();
        var price = model.getTotalMenuPrice();
        var html;
        html = "<div class='doverview col-md-9'>";

        
        for (var i = 0; i < dishes.length; i++) {
            var dish = dishes[i];
            var dprice =model.getDishPrice(dish.id) * model.getNumberOfGuests();
            html += sdishTemplate(dish,dprice);
        };
        html += "</div>";
        html += "<div class='col-md-3'>";
        html += "<h4> Total Price: </h4>";
        html += "<p class='price'>$ " + price.toFixed(2) + "</p>";
        html += "</div>";
        selected_container.html(html);
    }

    this.update = function(changes) {
        if(changes.change == 'guests' ||
           changes.change == 'add' ||
           changes.change == 'remove' ) {
            this.render();
        }
    }
}

function sdishTemplate(dish,price) {
    var html = "<div class='dish col-md-3'>";
    html += "<div class='img' style='background-image: url(images/" + dish.image + ")'/>";
    html += "<p class='title'>" + dish.name + "</p>";
    html += "<p class='price'>$ " + price.toFixed(2) + "</p>";
    html += "</div>";
    return html;
}

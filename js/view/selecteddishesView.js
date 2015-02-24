//ExampleView Object constructor
var selecteddishesView = function(container, model) {
    model.addObserver(this);
    this.render = function() {
       
		var dishes = model.getFullMenu();
        var price = model.getTotalMenuPrice();
        var html;
        html = "<div class='doverview col-md-9'>";

        
        for (var i = 0; i < dishes.length; i++) {
            var dish = dishes[i];
            var dprice =model.getDishPrice(dish.id);
            html += sdishTemplate(dish,dprice);
        };
        html += "</div>";
        html += "<div class='col-md-3'>";
        html += "<h4> Total Price: </h4>";
        html += "<p class='price'>" + price + "</p>";
        html += "</div>";
        container.append(html);
                
        
    }
}

function sdishTemplate(dish,price) {
    var html = "<div class='dish col-md-3'>";
    html += "<div class='img' style='background-image: url(images/" + dish.image + ")'/>";
    html += "<p class='title'>" + dish.name + "</p>";
    html += "<p class='price'>" + price + "</p>";
    html += "</div>";
    return html;
}

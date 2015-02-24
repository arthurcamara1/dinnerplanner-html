//ExampleView Object constructor
var dishesView = function(container, model) {

    this.render = function(dish , action) {
        if (action==="refresh"){
            $( ".dish" ).remove();
        }
        var dishes = model.getAllDishes(dish);
        for (var i = 0; i < dishes.length; i++) {
            var dish = dishes[i];
            container.append(dishTemplate(dish));
        };
    }
}

function dishTemplate(dish) {
    var html = "<div class='dish col-md-2'>";
    html += "<div id='image" + dish.id + "' class='img' style='background-image: url(images/" + dish.image + ")'/>";
    html += "<p class='title'>" + dish.name + "</p>";
    html += "<p class='description'>" + dish.description + "</p>";
    html += "</div>";
    return html;
}

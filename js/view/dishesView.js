//ExampleView Object constructor
var dishesView = function(container, model) {

    //this will observe changes to the model
    model.addObserver(this);

    this.render = function(type, terms) {
        container.find('.dish').remove();
        terms = terms || "";
        var dishes = model.getAllDishes(type, terms);
        for (var i = 0; i < dishes.length; i++) {
            var dish = dishes[i];
            container.append(dishTemplate(dish));
        };
    }

    this.update = function(change) {
        if(change === "dish_type") {
            this.render(model.getCurrentType(), 'test');
        }
    }

    this.subpage = function(page) {
        $("#search .subpage").addClass('hidden');
        $("#search #"+page).removeClass('hidden');
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
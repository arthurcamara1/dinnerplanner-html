//ExampleView Object constructor
var preparationView = function(container, model) {

    //this will observe changes to the model
    model.addObserver(this);

    var dishes_container = container.find("#prep"),
        guests_container = container.find("#preparation_guests");

    this.render = function() {
        guests_container.html(model.getNumberOfGuests());
        dishes_container.html('');
        var dishes = model.getFullMenu();
        var html;
        html = "<div class=' preparation col-md-10'>";
        html += "<table>";
        for (var i = 0; i < dishes.length; i++) {
            var dish = dishes[i];
            html += pdishTemplate(dish);
        };
        html += "</table>";
        html += "</div>";
        dishes_container.html(html);
    }

    this.update = function(changes) {
        if(changes.change == 'guests' ||
           changes.change == 'add' ||
           changes.change == 'remove' ) {
            this.render();
        }
    }
}

function pdishTemplate(dish) {
    //var html = "<div class='dish col-md-2'>";
    var html = "<tr>";
    html += "<td>";
    html += " <img src= 'images/" + dish.image + "'>" ;
    html += "</td>";
    html += "<td>";
    html += "<h4>" + dish.name + "</h4>" ;
    html += dish.description;
    html += "</td>";

    //html += "<div id='prepimg' class='img' style='background-image: url(images/" + dish.image + ")'/>";
    //html += "</div>";
    //html = "<div class='dish col-md-8 col-md-offset-2'>";
    //html += "<p class='title'>" + dish.name + "</p>";
    //html += "<p class='description'>" + dish.description + "</p>";
    //html += "</div>";
    html += "</tr>";
    return html;
}

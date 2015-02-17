//ExampleView Object constructor
var dishoverviewView = function(container, model) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responded to interaction)

    this.render = function() {

		var dish = model.getDish(1);
        container.append(overview(dish));   
    }
}

function overview(dish) {
    var html = "<div class= 'col-md-12'>";
    html += "<p class='title'>" + dish.name + "</p>";
    html += "<div class='img' style='background-image: url(images/" + dish.image + ")'/>";
    html += "<p class='description'>" + dish.description + "</p>";
    html += "</div>";
    return html;
}

//ExampleView Object constructor
var dishesView = function(container, model) {

    //this will observe changes to the model
    model.addObserver(this);

    var dishes_container = container.find("#dishes");
    var selected_dish_container = container.find("#sdish");

    this.render = function(type, terms) {
        dishes_container.html('');
        terms = terms || "";
        var dishes = model.getAllDishes(type, terms);
        for (var i = 0; i < dishes.length; i++) {
            var dish = dishes[i];
            dishes_container.append(dishTemplate(dish));
        };
    }

    this.update = function(changes) {
        if(changes.change === "dish_type") {
            this.render(changes.type, changes.filter);
        }
        if(changes.change === "dish_subpage") {
            $("#search .subpage").addClass('hidden');
            $("#search #"+page).removeClass('hidden');
        }
        if(changes.change === "guests") {
            this.renderDish();
        }
    }

    this.subpage = function(page) {
        if(page === 'search_dish_overview') {
            this.renderDish();
        }

        $("#search .subpage").addClass('hidden');
        $("#search #"+page).removeClass('hidden');

    }

    this.renderDish = function() {

        var html,html1="";
        var dish = model.getDish(model.getCurrentDish());
        var guests= model.getNumberOfGuests();
        var price= guests * model.getDishPrice(model.getCurrentDish());
        html= overview(dish);
        html += "<button id='sback' class='btn btn-warning'>Back to Select Dish</button>";
        html += "</div>";
        html +="<div class='col-md-offset-5 ingr-table'>";
        html +="<h3>Ingredients for "+guests+" people</h3>";
        for (var i = 0; i < dish.ingredients.length; i++) {
            var ing = dish.ingredients[i];
            html1= html1+ ingredientsTemplate(ing,guests);
        }
        html = html + "<table id=ingredients>" + html1 ;
        html += " <tr style= 'border-top: 1px solid #000000'> <td colspan='2' style= 'text-align: left' >";
        html += " <button id='confirm_dish' data-dish='"+dish.id+"' class='btn btn-warning'>Confirm Dish</button> </td> <td> SEK </td>";
        html += " <td></td><td>$ " + price.toFixed(2) + " </td> </tr>" ;
        html +="</table> </div>";
        selected_dish_container.html(html);
          
    }


}

function dishTemplate(dish) {
    var html = "<div class='dish col-md-3' data-dish='"+dish.id+"'>";
    html += "<div id='image" + dish.id + "' class='img' style='background-image: url(images/" + dish.image + ")'/>";
    html += "<p class='title'>" + dish.name + "</p>";
    html += "<p class='description'>" + dish.description.substring(0,60) + "...</p>";
    html += "</div>";
    return html;
}

function overview(dish) {
    var html = "<div class='dish col-md-5'>";
    html += "<p class='title'>" + dish.name + "</p>";
    html += "<div class='img' style='background-image: url(images/" + dish.image + ")'/>";
    html += "<p class='description'>" + dish.description + "</p>";
    return html;
}

function ingredientsTemplate(ing,guests) {
    var html = "<tr>";
    html += "<td>" + ing.quantity * guests + " " + ing.unit + "</td>";
    html += "<td>" + ing.name + "</td>";
    html += "<td> SEK <td>";
    html += "<td>$ " + (ing.price*guests).toFixed(2) + "</td>";
    html += "</tr>";
    return html;
}
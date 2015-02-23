//ExampleView Object constructor
var dishoverviewView = function(container, model) {

    this.render = function() {

		var html,html1="";
        var dish = model.getDish(100);
        var guests= model.getNumberOfGuests();
        var price= guests * model.getDishPrice(100);
        html=overview(dish);
        html += "<button class='btn btn-warning'>Back to Select Dish</button>";
        html += "</div>";
        html +="<div class='col-md-offset-4 ingr-table'>";
        html +="<h3>Ingredients For 4 people</h3>";
        for (var i = 0; i < dish.ingredients.length; i++) {
            var ing = dish.ingredients[i];
            html1= html1+ ingredientsTemplate(ing,guests);
        }
        html = html + "<table id=ingredients>" + html1 ;
        html += " <tr style= 'border-top: 1px solid #000000'> <td colspan='2' style= 'text-align: left' >";
        html += " <button class='btn btn-warning'>Confirm Dish</button> </td> <td> SEK </td>";
        html += " <td></td><td>" + price + " </td> </tr>" ;
        html +="</table> </div>";
        container.append(html);

          
    }
}

function overview(dish) {
    var html = "<div class='dish col-md-4'>";
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
    html += "<td>" + ing.price*guests + "</td>";
    html += "</tr>";
    return html;
}
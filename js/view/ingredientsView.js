//ExampleView Object constructor
var ingredientsView = function(container, model) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responded to interaction)
   
    this.render = function() {
       // model.setNumberOfGuests(4);
		var dish = model.getDish(100);
		var guests= model.getNumberOfGuests();
         var t= "<table style='border: 1px solid black>";
        container.append(t);
        for (var i = 0; i < dish.ingredients.length; i++) {
            var ing = dish.ingredients[i];
            container.append(ingredientsTemplate(ing,guests));
        }
        t = "</table>";
        container.append(t);
       
    }
    

}

function ingredientsTemplate(ing,guests) {
    var html = "<tr>";
    html += "<th>" + ing.quantity * guests + " " + ing.unit + "</th>";
    html += "<th>" + ing.name + "</th>";
    html += "<th> SEK <th>";
    html += "<th>" + ing.price*guests + "</th>";
    html += "</tr>";
    return html;
}

//ExampleView Object constructor
var summaryView = function(container, model,dish,id) {

    this.render = function() {
        var dishes = model.getFullMenu();
        var price = model.getTotalMenuPrice();
        var guests = model.getNumberOfGuests();
        if (guests===undefined){
            guests=0;
        }
        var dprice=0;
        var html = "<table class='table'>" ;
        html += "<table class='table'>";
        html += "<thead>";
        html += "<tr>";
        html += "<th></th>";
        html += "<th>Dish Name</th>";
        html += "<th>Cost</th>";
        html += "</tr>";
        html += "</thead>";
        html += "<tbody>";
        for (var i = 0; i < dishes.length; i++) {
            var mdish = dishes[i];
            dprice = model.getDishPrice(mdish.id);
            html += (menudishTemplate(mdish,guests,dprice));
            dprice=0;
        };
        html += "</tbody>";
        html += "<tfoot>";
        html += "<tr>";
        html += "<th></th>";
        html += "<th>Pending</th>";
        if (id===0){
            html += "<th> 0 </th>";
        }else{
            html += "<th>" + model.getDishPrice(id) + "</th>";
        }
        html += "</tr>";
        html += "<tr>";
        html += "<th></th>";
        html += "<th>SEK</th>";
        html += "<th>" + price + "</th>";
        html += "</tr>";
        html += "</tfoot>";
        html += "</table>";
        
        container.append(html);
    }

    this.update = function(type) {
        $( ".table" ).remove();
        this.render();
    }
}

function menudishTemplate(dish,guests,price) {
    var html = "<tr>";
    html += "<th>" + guests + "</th>";
    html += "<th>" + dish.name + "</th>";
    html += "<th>" + price + "</th>";
    html += "</tr>";
    return html;
}
//ExampleView Object constructor
var summaryView = function(container, model,dish,id) {

    //this will observe changes to the model
    model.addObserver(this);

    var container_summary = container.find("#summary_table");
    var container_guests = container.find("#guests");
    var confirm_button = container.find("#confirm");

    this.render = function() {


        var dishes = model.getFullMenu();
        var price = model.getTotalMenuPrice();
        var guests = model.getNumberOfGuests();
        var pending = model.getCurrentPendingValue() * guests;
        if (guests===undefined){
            guests=0;
        }
        var dprice=0;

        container_summary.html('');
        if(!container_guests.is(":focus")) {
            container_guests.val(guests);
        }

        html = "<thead>";
        html += "<tr>";
        html += "<th></th>";
        html += "<th>Dish Name</th>";
        html += "<th>Cost</th>";
        html += "</tr>";
        html += "</thead>";
        html += "<tbody>";
        for (var i = 0; i < dishes.length; i++) {
            var mdish = dishes[i];
            dprice = model.getDishPrice(mdish.id) * guests;
            html += (menudishTemplate(mdish,guests,dprice));
            dprice=0;
        };
        html += "</tbody>";
        html += "<tfoot>";
        html += "<tr>";
        html += "<th></th>";
        html += "<th>Pending</th>";
        html += "<th>$ " + (pending).toFixed(2) + "</th>";
        html += "</tr>";
        html += "<tr>";
        html += "<th></th>";
        html += "<th>SEK</th>";
        html += "<th>$ " + (price + pending).toFixed(2) + "</th>";
        html += "</tr>";
        html += "</tfoot>";
        
        container_summary.html(html);

        if(guests > 0 && price > 0) {
            confirm_button.removeClass('hidden');
        } else {
            confirm_button.addClass('hidden');
        }
    }

    this.update = function(changes) {
        if(changes.change == 'guests' ||
           changes.change == 'add' ||
           changes.change == 'pending'||
           changes.change == 'remove' ) {
            this.render();
        }
    }
}

function menudishTemplate(dish,guests,price) {
    var html = "<tr>";
    html += "<td>" + guests + "</td>";
    html += "<td>" + dish.name + "</td>";
    html += "<td>$ " + price.toFixed(2) + "<span class='remove_dish' data-dish='"+dish.id+"'>x</span></td>";
    html += "</tr>";
    return html;
}
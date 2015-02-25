var dishesController = function(c, view, model) {

    $("#type").on('change', function() {
        var type = $("#type").val();
        model.setCurrentType(type);
    });

    $("#search_dishes_field").on('keyup', function() {
        var terms = $("#search_dishes_field").val();
        model.setCurrentFilter(terms);
    });

    $("#dishes").on('click', '.dish', function() {
        var dish = parseInt($(this).attr("data-dish"), 10);
        model.setCurrentDish(dish);
        view.subpage('search_dish_overview');
    });

    $("#sdish").on('click', '#sback', function() {
        view.subpage('search_dishes');
    });

    $("#sdish").on('click', '#confirm_dish', function() {
        var dish = parseInt($(this).attr("data-dish"), 10);
        model.addDishToMenu(dish);
        view.subpage('search_dishes');
    });

}
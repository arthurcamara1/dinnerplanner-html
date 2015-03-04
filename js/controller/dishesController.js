var dishesController = function(c, view, model) {

    view.find("#type").on('change', function() {
        var type = $("#type").val();
        model.setCurrentType(type);
    });

    view.find("#search_dishes_field").on('keyup', function() {
        var terms = $("#search_dishes_field").val();
        model.setCurrentFilter(terms);
    });

    view.find("#dishes").on('click', '.dish', function() {
        var dish = parseInt($(this).attr("data-dish"), 10);
        model.setCurrentDish(dish);
        var value = model.getDishPrice(dish);
        console.log(value);
        model.setCurrentPendingValue(value);
        view.subpage('search_dish_overview');
    });

    view.find("#sdish").on('click', '#sback', function() {
        model.setCurrentPendingValue(0);
        view.subpage('search_dishes');
    });

    view.find("#sdish").on('click', '#confirm_dish', function() {
        var dish = parseInt($(this).attr("data-dish"), 10);
        model.addDishToMenu(dish);
        model.setCurrentPendingValue(0);
        view.subpage('search_dishes');
    });

    view.find("#summary_table").on('click', '.remove_dish', function() {
        var dish = parseInt($(this).attr("data-dish"), 10);
        model.removeDishFromMenu(dish);
    });

}
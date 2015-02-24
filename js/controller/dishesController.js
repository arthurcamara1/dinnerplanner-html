var dishesController = function(c, view, model) {

    $("#type").on('change', function() {
        var type = $("#type").val();
        model.setCurrentType(type);
    });

    $("#dishes").on('click', '.dish', function() {
        view.subpage('search_dish_overview');
    });

}
//DinnerModel Object constructor
var DinnerModel = function(initial_type) {

    var _observers = [];
    this.addObserver = function(observer) {
        _observers.push(observer);
    };


    var notifyObservers = function(changes) {
        for (var i = 0; i < _observers.length; i++) {
            _observers[i].update(changes);
        };
    };

    this.num_guests;
    this.current_type = 'starter';
    this.current_filter = '';
    this.current_dish = 1;
    this.selected_dishes = [];
    this.all_ingredients;
    this.total_menu_price;
    this.current_pending_value = 0;

    this.setCurrentType = function(type) {
        this.current_type = type;
        notifyObservers({
            change: "dish_type",
            type: this.current_type,
            filter: this.current_filter
        });
    }

    this.setCurrentFilter = function(filter) {
        this.current_filter = filter;
        notifyObservers({
            change: "dish_type",
            type: this.current_type,
            filter: this.current_filter
        });
    }

    this.getCurrentType = function() {
        return this.current_type;
    }
    this.getCurrentFilter = function() {
        return this.current_filter;
    }

    this.setCurrentDish = function(dish) {
        this.current_dish = dish;
        notifyObservers({
            change: "selected_dish",
            dish: this.current_dish
        });
    }

    this.getCurrentDish = function() {
        return this.current_dish;
    }

    this.setCurrentPendingValue = function(value) {
        this.current_pending_value = value;
        notifyObservers({
            change: "pending",
            pending: value
        });
    }

    this.getCurrentPendingValue = function() {
        return this.current_pending_value;
    }

    this.setNumberOfGuests = function(num) {
        this.num_guests = parseInt(num,10) || 0;
        notifyObservers({
            change: "guests",
            number: num
        });
    }

    // should return 
    this.getNumberOfGuests = function() {
        //TODO Lab 2
        if (this.num_guests === undefined) {
            return 0;
        } else return this.num_guests;
    }

    //Returns the dish that is on the menu for selected type 
    this.getSelectedDish = function(type) {
        //TODO Lab 2
        var index;
        for (index = 0; index < this.selected_dishes.length; index++) {
            id1 = this.selected_dishes[index].id;
            if (this.getDish(id1).type === type) {
                return this.selected_dishes[index];
            }
        }
        return null;

    }

    //Returns all the dishes on the menu.
    this.getFullMenu = function() {
        //TODO Lab 2
        return this.selected_dishes;
    }

    //Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function() {
        //TODO Lab 2
        var index;
        this.all_ingredients = [];
        for (index = 0; index < this.selected_dishes.length; index++) {
            this.all_ingredients = this.all_ingredients.concat(this.selected_dishes[index].ingredients);
        }
        return this.all_ingredients;
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getTotalMenuPrice = function() {
        //TODO Lab 2
        this.total_menu_price = 0;
        var guests = this.getNumberOfGuests();
        var ingr = this.getAllIngredients();
        var index;
        for (index = 0; index < ingr.length; index++) {
            this.total_menu_price = ingr[index].price * guests + this.total_menu_price;
        }
        return this.total_menu_price;
    }

    this.getDishPrice = function(id) {
        //TODO Lab 2
        var price = 0;
        var dish = this.getDish(id);
        var index;
        for (index = 0; index < dish.ingredients.length; index++) {
            price += dish.ingredients[index].price;
        }
        return price;
    }

    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function(id) {

    	// for(var i=0; i<this.selected_dishes.length; i++) {
    	// 	id1 = this.selected_dishes[i].id;
    	// 	if(id1 == id) return;
    	// }

    	// this.selected_dishes.push(this.getDish(id));
    	// notifyObservers({
     //        change: "add",
     //        dishes: this.selected_dishes
     //    });

        // TODO Lab 2 
        var index,
            id1,
            flag = 0;
        if (this.selected_dishes.length === 0) this.selected_dishes[0] = this.getDish(id)
        else {
            for (index = 0; index < this.selected_dishes.length; index++) {
                id1 = this.selected_dishes[index].id;
                if (this.getDish(id1).type === this.getDish(id).type) {
                    this.selected_dishes[index] = this.getDish(id);
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) this.selected_dishes[this.selected_dishes.length] = this.getDish(id);
        }
        notifyObservers({
            change: "add",
            dishes: this.selected_dishes
        });
    }

    //Removes dish from menu
    this.removeDishFromMenu = function(id) {
        //TODO Lab 2
        var index;
        for (index = 0; index < this.selected_dishes.length; index++) {
            if (this.selected_dishes[index].id === id)
                this.selected_dishes.splice(index, 1);
        }
        notifyObservers({
            change: "remove"
        });
    }

    //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
    //you can use the filter argument to filter out the dish by name or ingredient (use for search)
    //if you don't pass any filter all the dishes will be returned
    this.getAllDishes = function(type, filter) {
        return $(dishes).filter(function(index, dish) {
            var found = true;
            if (filter) {
                found = false;
                filter = filter.toLowerCase();
                var name = dish.name.toLowerCase();
                if (name.indexOf(filter) != -1) {
                    found = true;
                } else {
                    $.each(dish.ingredients, function(index, ingredient) {
                        var ing = ingredient.name.toLowerCase();
                        if (ing.indexOf(filter) != -1) {
                            found = true;
                        }
                    });
                }
            }
            return dish.type == type && found;
        });
    }

    //function that returns a dish of specific ID
    this.getDish = function(id) {
        for (key in dishes) {
            if (dishes[key].id == id) {
                return dishes[key];
            }
        }
    }


    // the dishes variable contains an array of all the 
    // dishes in the database. each dish has id, name, type,
    // image (name of the image file), description and
    // array of ingredients. Each ingredient has name, 
    // quantity (a number), price (a number) and unit (string 
    // defining the unit i.e. "g", "slices", "ml". Unit
    // can sometimes be empty like in the example of eggs where
    // you just say "5 eggs" and not "5 pieces of eggs" or anything else.
    var dishes = [{
        'id': 1,
        'name': 'French toast',
        'type': 'starter',
        'image': 'toast.jpg',
        'description': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
        'ingredients': [{
            'name': 'eggs',
            'quantity': 0.5,
            'unit': '',
            'price': 10
        }, {
            'name': 'milk',
            'quantity': 30,
            'unit': 'ml',
            'price': 6
        }, {
            'name': 'brown sugar',
            'quantity': 7,
            'unit': 'g',
            'price': 1
        }, {
            'name': 'ground nutmeg',
            'quantity': 0.5,
            'unit': 'g',
            'price': 12
        }, {
            'name': 'white bread',
            'quantity': 2,
            'unit': 'slices',
            'price': 2
        }]
    }, {
        'id': 2,
        'name': 'Sourdough Starter',
        'type': 'starter',
        'image': 'sourdough.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'active dry yeast',
            'quantity': 0.5,
            'unit': 'g',
            'price': 4
        }, {
            'name': 'warm water',
            'quantity': 30,
            'unit': 'ml',
            'price': 0
        }, {
            'name': 'all-purpose flour',
            'quantity': 15,
            'unit': 'g',
            'price': 2
        }]
    }, {
        'id': 3,
        'name': 'Baked Brie with Peaches',
        'type': 'starter',
        'image': 'bakedbrie.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'round Brie cheese',
            'quantity': 10,
            'unit': 'g',
            'price': 8
        }, {
            'name': 'raspberry preserves',
            'quantity': 15,
            'unit': 'g',
            'price': 10
        }, {
            'name': 'peaches',
            'quantity': 1,
            'unit': '',
            'price': 4
        }]
    }, {
        'id': 100,
        'name': 'Meat balls',
        'type': 'main dish',
        'image': 'meatballs.jpg',
        'description': "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
        'ingredients': [{
            'name': 'extra lean ground beef',
            'quantity': 115,
            'unit': 'g',
            'price': 20
        }, {
            'name': 'sea salt',
            'quantity': 0.7,
            'unit': 'g',
            'price': 3
        }, {
            'name': 'small onion, diced',
            'quantity': 0.25,
            'unit': '',
            'price': 2
        }, {
            'name': 'garlic salt',
            'quantity': 0.7,
            'unit': 'g',
            'price': 2
        }, {
            'name': 'Italian seasoning',
            'quantity': 0.6,
            'unit': 'g',
            'price': 3
        }, {
            'name': 'dried oregano',
            'quantity': 0.3,
            'unit': 'g',
            'price': 3
        }, {
            'name': 'crushed red pepper flakes',
            'quantity': 0.6,
            'unit': 'g',
            'price': 3
        }, {
            'name': 'Worcestershire sauce',
            'quantity': 6,
            'unit': 'ml',
            'price': 7
        }, {
            'name': 'milk',
            'quantity': 20,
            'unit': 'ml',
            'price': 4
        }, {
            'name': 'grated Parmesan cheese',
            'quantity': 5,
            'unit': 'g',
            'price': 8
        }, {
            'name': 'seasoned bread crumbs',
            'quantity': 15,
            'unit': 'g',
            'price': 4
        }]
    }, {
        'id': 101,
        'name': 'MD 2',
        'type': 'main dish',
        'image': 'bakedbrie.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ingredient 1',
            'quantity': 1,
            'unit': 'pieces',
            'price': 8
        }, {
            'name': 'ingredient 2',
            'quantity': 15,
            'unit': 'g',
            'price': 7
        }, {
            'name': 'ingredient 3',
            'quantity': 10,
            'unit': 'ml',
            'price': 4
        }]
    }, {
        'id': 102,
        'name': 'MD 3',
        'type': 'main dish',
        'image': 'meatballs.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ingredient 1',
            'quantity': 2,
            'unit': 'pieces',
            'price': 8
        }, {
            'name': 'ingredient 2',
            'quantity': 10,
            'unit': 'g',
            'price': 7
        }, {
            'name': 'ingredient 3',
            'quantity': 5,
            'unit': 'ml',
            'price': 4
        }]
    }, {
        'id': 102,
        'name': 'MD 4',
        'type': 'main dish',
        'image': 'meatballs.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ingredient 1',
            'quantity': 1,
            'unit': 'pieces',
            'price': 4
        }, {
            'name': 'ingredient 2',
            'quantity': 12,
            'unit': 'g',
            'price': 7
        }, {
            'name': 'ingredient 3',
            'quantity': 6,
            'unit': 'ml',
            'price': 4
        }]
    }, {
        'id': 200,
        'name': 'Chocolat Ice cream',
        'type': 'dessert',
        'image': 'icecream.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ice cream',
            'quantity': 100,
            'unit': 'ml',
            'price': 6
        }]
    }, {
        'id': 201,
        'name': 'Vanilla Ice cream',
        'type': 'dessert',
        'image': 'icecream.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ice cream',
            'quantity': 100,
            'unit': 'ml',
            'price': 6
        }]
    }, {
        'id': 202,
        'name': 'Strawberry',
        'type': 'dessert',
        'image': 'icecream.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ice cream',
            'quantity': 100,
            'unit': 'ml',
            'price': 6
        }]
    }];

}
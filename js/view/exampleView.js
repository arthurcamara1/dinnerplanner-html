//ExampleView Object constructor
var ExampleView = function (container,model) {
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)
 
 this.AllDishesimg1 = container.find("#AllDishesimg1");
 this.AllDishesnm1 = container.find("#AllDishesnm1");
 this.AllDishesdes1 = container.find("#AllDishesdes1");
 this.AllDishesimg2 = container.find("#AllDishesimg2");
 this.AllDishesnm2 = container.find("#AllDishesnm2");
 this.AllDishesdes2 = container.find("#AllDishesdes2");
 this.AllDishesimg3 = container.find("#AllDishesimg3");
 this.AllDishesnm3 = container.find("#AllDishesnm3");
 this.AllDishesdes3 = container.find("#AllDishesdes3");
 var dishes= model.getAllDishes("starter");
 this.AllDishesimg1.html("<img src=images\\" + dishes[0].image + " style=\"width:140px;height:140px\">");
 this.AllDishesnm1.html(dishes[0].name);
 this.AllDishesdes1.html(dishes[0].description);
 this.AllDishesimg2.html("<img src=images\\" + dishes[1].image + " style=\"width:140px;height:140px\">");
 this.AllDishesnm2.html(dishes[1].name);
 this.AllDishesdes2.html(dishes[1].description);
 this.AllDishesimg3.html("<img src=images\\" + dishes[2].image + " style=\"width:140px;height:140px\">");
 this.AllDishesnm3.html(dishes[2].name);
 this.AllDishesdes3.html(dishes[2].description);
}
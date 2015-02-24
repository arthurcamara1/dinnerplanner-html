var controller = function(){

	this.update = function(page) {

        //hide all pages
        $('.page').addClass('hidden');
        //show our target page
        $("#"+page).removeClass('hidden');
        
    }	
}
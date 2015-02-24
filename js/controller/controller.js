var controller = function(){

	this.update = function(id) {
    	//home page
    	if(id===0){
			document.getElementById("home").style.display="inline";
    		document.getElementById("search").style.display="none";
    		document.getElementById("overview").style.display="none";
    		document.getElementById("preparation").style.display="none";
    		document.getElementById("dish_overview").style.display="none";
    	}
    	//search page
		else if(id===1){
            document.getElementById("home").style.display="none";
            document.getElementById("search").style.display="inline";
            document.getElementById("overview").style.display="none";
            document.getElementById("preparation").style.display="none";
            document.getElementById("dish_overview").style.display="none";

    	} 
    	//overview of selected dihes
    	else if(id===2){
            document.getElementById("home").style.display="none";
            document.getElementById("search").style.display="none";
            document.getElementById("overview").style.display="inline";
            document.getElementById("preparation").style.display="none";
            document.getElementById("dish_overview").style.display="none";

    	} 
    	//preparation instructions
    	else if(id===3){
            document.getElementById("home").style.display="none";
            document.getElementById("search").style.display="none";
            document.getElementById("overview").style.display="none";
            document.getElementById("preparation").style.display="inline";
            document.getElementById("dish_overview").style.display="none";

    	} 
    	//dish overview
    	else if(id===4){
            document.getElementById("home").style.display="none";
            document.getElementById("search").style.display="none";
            document.getElementById("overview").style.display="none";
            document.getElementById("preparation").style.display="none";
            document.getElementById("dish_overview").style.display="inline";

    	} 
    }	
}
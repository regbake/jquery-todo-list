// on the click of the button, there should be a thing that is added into the screen
//this should be equal to the user input from the start
//there should be a way to delete the items

var clickSubmit = $("#submitButton");
var newItem = $("#listItem");
//var findDiv = $("div");

clickSubmit.on("click", function(){
	//document.querySelector("p").innerHTML = newItem.value;
	$("#container").append('<div class="listDiv"><p>' + newItem.val() + '</p></div>');
	addDivInfo();
	newItem.val("");
	newItem.focus();
	});

function addDivInfo() {
	$("#container").children().css("backgroundColor", "rgba(240,230,250,.8");
	$("#container").children().on("click", "p", function(e){
		///find a way to reference div and remove it here  
		//e.target.parent.remove
		e.target.remove();
	})
}


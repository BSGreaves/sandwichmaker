

var SandwichMaker = (function(oldSandwichMaker){



	var button = document.getElementById("button");
	var checkboxes = document.querySelectorAll("input.option"); //Grabs a nodeList of all checkboxes
	var selectedAddons = [];

	for (let i = 0; i < checkboxes.length; i++) {
		checkboxes[i].addEventListener("change", function(e) { //If there's a change
			requestToppingPrice(e); //Adjust the price
		});
	};

	function requestToppingPrice (e) {
		switch (e.target.name) { //checks the type (bread, cheese, etc)
			case "bread": //Each case activates a different function
				SandwichMaker.addBread(e.target.id, e.target.checked);
				break;
			case "cheese":
				SandwichMaker.addCheese(e.target.id, e.target.checked);
				break;
			case "veggie": 
				SandwichMaker.addVeggie(e.target.id, e.target.checked);
				break;
			case "meat": 
				SandwichMaker.addMeat(e.target.id, e.target.checked);
				break;
			case "condiment": 
				SandwichMaker.addCondiment(e.target.id, e.target.checked);
				break;
			default:
				console.log("error in requestToppingPrice");
				break;
			};
	};

	return oldSandwichMaker;

})(SandwichMaker || {})

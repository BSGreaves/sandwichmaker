var SandwichMaker = (function(oldSandwichMaker){
	
	var breadPrices = {
		wheat: 1.50,
		white: 1.50,
		sourdough: 2.00,
		glutenFree: 2.50
	};

	oldSandwichMaker.getBreadPrices = function() {
		return breadPrices;
	}

	oldSandwichMaker.addBread = function(id, checked) { //either adds or subtracts from the final price by taking the id of the option and getting its price
		if (checked === true) { //"checked" is e.target.checked passed in from requestToppingPrice
			SandwichMaker.adjustPrice("add", breadPrices[id]); //adjustPrice needs to know whether or not to add or subtract the topping price from the final price
		}
		if (checked === false) {
			SandwichMaker.adjustPrice("subtract", breadPrices[id]);
		}
	};

	return oldSandwichMaker;
})(SandwichMaker || {});
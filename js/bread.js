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
		if (checked === true) { 
			SandwichMaker.adjustPrice("add", breadPrices[id]);
		}
		if (checked === false) {
			SandwichMaker.adjustPrice("subtract", breadPrices[id]);
		}
	};

	return oldSandwichMaker;
})(SandwichMaker || {});
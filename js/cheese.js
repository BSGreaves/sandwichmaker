var SandwichMaker = (function(oldSandwichMaker){
	
	var cheesePrices = {
		gouda: 1.00,
		swiss: 1.00,
		whiteCheddar: 1.25,
		american: 0.75
	};

	oldSandwichMaker.getCheesePrices = function() {
		return cheesePrices;
	}

	oldSandwichMaker.addCheese = function(id, checked) {
		if (checked === true) {
			SandwichMaker.adjustPrice("add", cheesePrices[id]);
		}
		if (checked === false) {
			SandwichMaker.adjustPrice("subtract", cheesePrices[id]);
		}
	};

	return oldSandwichMaker;
})(SandwichMaker || {});
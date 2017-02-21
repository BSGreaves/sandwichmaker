var SandwichMaker = (function(oldSandwichMaker){
	
	var veggiePrices = {
		tomato: .50,
		lettuce: .50,
		bellPepper: .50,
		onion: 0.50
	};

	oldSandwichMaker.getVeggiePrices = function() {
		return veggiePrices;
	}

	oldSandwichMaker.addVeggie = function(id, checked) {
		if (checked === true) {
			SandwichMaker.adjustPrice("add", veggiePrices[id]);
		}
		else {
			SandwichMaker.adjustPrice("subtract", veggiePrices[id]);
		}
	};

	return oldSandwichMaker;
})(SandwichMaker || {});
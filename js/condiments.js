var SandwichMaker = (function(oldSandwichMaker){
	
	var condimentPrices = {
		mayo: .25,
		mustard: .25,
		hotSauce: .25,
		ranch: .25
	};

	oldSandwichMaker.getCondimentPrices = function() {
		return condimentPrices;
	}

	oldSandwichMaker.addCondiment = function(id, checked) {
		if (checked === true) {
			SandwichMaker.adjustPrice("add", condimentPrices[id]);
		}
		if (checked === false) {
			SandwichMaker.adjustPrice("subtract", condimentPrices[id]);
		}
	};

	return oldSandwichMaker;
})(SandwichMaker || {});
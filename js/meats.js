var SandwichMaker = (function(oldSandwichMaker) {

    var meatPrices = {
        ham: 1.00,
        chicken: 1.00,
        turkey: 1.25,
        roastBeef: 0.75
    };

    oldSandwichMaker.getMeatPrices = function() {
        return meatPrices;
    }

    oldSandwichMaker.addMeat = function(id, checked) {
        if (checked === true) {
            SandwichMaker.adjustPrice("add", meatPrices[id]);
        } else {
            SandwichMaker.adjustPrice("subtract", meatPrices[id]);
        }
    };

    return oldSandwichMaker;
})(SandwichMaker || {});
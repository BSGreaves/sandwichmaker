var SandwichMaker = (function() {
    var finalPrice = 0;
    var finalPriceDiv = document.getElementById("finalPrice");

    return {
        adjustPrice: function(math, price) { //this function is called by the IIFE augmentors
            if (math === "add") {
                finalPrice += price;
            }
            if (math === "subtract") {
                finalPrice -= price;
            }
            finalPriceDiv.innerHTML = "$" + finalPrice.toFixed(2);
        },
    }
})();
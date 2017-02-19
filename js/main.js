var button = document.getElementById("button");
var checkBoxes = document.querySelectorAll("[id^=opt]");
var selectedAddons = [];


button.addEventListener("click", function(){
	determineSelectedAddons(checkBoxes);
});

function determineSelectedAddons (nodeList) {
	for (var i = 0; i < nodeList.length ; i++) {
		if (nodeList[i].checked === true) {
			selectedAddons.push(nodeList[i])
		}
	}
	console.log(selectedAddons);
};

// function calculatePrice ()
var button = document.getElementById("button");
var checkBoxes = document.querySelectorAll("[id^=opt]");
var testClass = document.getElementsByClassName("test");
var selectedAddons = [];



// var test;
// console.log(allIds);

// // allIds.forEach(function(each, key){
// // 	console.log(key);
// // 	console.log(each);
// // 	var test = key;

// // });

// for (var value of allIds.value){
// 	console.log(value);
// };

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


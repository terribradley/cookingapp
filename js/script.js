var gallons = function(number1){
	return number1 / 0.26417;
}

var cups = function(number2){
	return number2 / 0.0625;
}

var number1 = parseInt(prompt("Enter volume in gallons"));
var result = gallons(number1).toFixed(2);
alert(result);

var number2 = parseInt(prompt("Enter volume in cups"));
var result = cups(number2).toFixed(4);
alert(result);

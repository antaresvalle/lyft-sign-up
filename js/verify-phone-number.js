/* 
 VERIFY PHONE NUMBER
*/

// GETS URL PARAMETER

var getCode = window.location.search.substring(1);
var splitCode = getCode.split("&");
var pair = splitCode[0].split("=");
var codeValue = pair[1];

validationNumber = codeValue;
console.log(validationNumber);

$('#validate').click(function (evt){
	generateValidationNumber();
});

getViewElements('#btn-next-phone', '#verify');

// Disables the NEXT Button on load
buttonElement.prop('disabled', true);

inputElement.keyup(function (evt) {
	validateInput(evt.target, 3);
});

buttonElement.click(function (evt){
	window.location.href='user-data.html';
});

$('#return').click(function(evt){
	window.location.href='sign-up.html';
});
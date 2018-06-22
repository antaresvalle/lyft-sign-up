/* 
 SIGNUP
*/
getViewElements('#btn-next-phone', '#phone');

// Disables the NEXT Button on load
buttonElement.prop('disabled', true);

inputElement.keyup(function (evt) {
	validateInput(evt.target, 10);
});

buttonElement.click(function (evt){
	generateValidationNumber();
	window.location.href='verify-phone-number.html?code='+code;
});

$('#return').click(function(evt){
	window.location.href='../index.html';
});
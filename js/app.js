var inputElement;
var buttonElement;
var validationNumber = 0;
var code = '';

function getViewElements(targetBtnID, targetInputID) {
	inputElement = $(targetInputID);
	buttonElement = $(targetBtnID);
}

function validateNIP(nipInput) {
	if (nipInput.value === validationNumber){
		changeNextBtnState(buttonElement, false);
		console.log('heres the number activation');
	} else {
		console.log('not the same code');
	}
}

/*
	Validates if the input field 
	has a value in it
	if TRUE activates NEXT Stage button
*/

function validateInput(inputDomElement, characterCount) {
	if (inputDomElement.value.length === characterCount) {
		if (inputDomElement.type === 'tel') {
			validateNIP(inputDomElement);
		} else {

			changeNextBtnState(buttonElement, false);
		}
	} else {
		changeNextBtnState(buttonElement, true);
	}
}

/*
	If the conditions are met
	This function activates the NEXT Stage Button
*/
function changeNextBtnState(nextButton, state) {
	nextButton.prop('disabled', state);
}

function generateValidationNumber() {
	for(var k=1; k<=3; k++) {
		var minNum = 48;
		var maxNum = 57;
		var char = String.fromCharCode(Math.floor(Math.random() * (minNum - maxNum) + maxNum));
		code += char;
	}
	validationNumber = code;
	alert('LAB-'+code)
	console.log(code);
}



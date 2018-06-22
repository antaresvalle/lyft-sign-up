/* 
 DATA-USER
*/

function validateForm() {
	var isValid = true;
	$('#btn-next-phone').prop('disabled', false);


	$('.form-field').each(function() {
  	// console.log($(this).val());
  	if ( $(this).val() === '' || $(this).val().length < 3){
  		isValid = false;
  		$('#btn-next-phone').prop('disabled', true);
  	}
  });
	return isValid;
}

// function resetFields(){
// 	$('.form-field').each(function() {
//   	$(this).val('');
  	
//   });
// }

  
$('#conditionsCheck').click(function (evt) {
	console.log('validadndo de nuevo');
	validateForm();
	console.log(validateForm());
});


console.log(validateForm());


$('#btn-next-phone').click(function (evt){
	// resetFields();
	validateForm()
	window.location.href='success.html';
});

$('#return').click(function(evt){
	window.location.href='verify-phone-number.html';
});
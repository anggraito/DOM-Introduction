
//function validasi(){
	var inputUsername = document.getElementById('username');
	var inputPassword = document.getElementById('password');
	var confirmPassword = document.getElementById('confirmPassword');
	var inputEmail = document.getElementById('email');
	var confirmEmail = document.getElementById('confirmEmail');
	var submitData = document.getElementById('form-registration');
	submitData.addEventListener('submit', function(event) {
		event.preventDefault();
	if (inputUsername.value == "" || inputPassword.value == "" || confirmPassword.value == "" || inputEmail.value == "" || confirmEmail.value == "") {
		if(inputUsername.value == "" && inputPassword.value == "" ){
		  	alert('username kosong')
		}
		if(inputUsername.value != "" && inputPassword.value == "" ) {
		  	alert('Password mana boleh kosong');
		}
		if(inputPassword.value != "" && confirmPassword.value == "") {
		  	alert('Confirm Password diperlukan');
		}
		if(inputPassword.value != "" && confirmPassword.value != ""){
			if(inputPassword.value === confirmPassword.value && inputEmail.value == "" ) {
			  	alert('Email wajib diisi');
			}
			else if(inputPassword.value !== confirmPassword.value && inputEmail.value == ""){
				alert('Password tidak sama');
			}
		}
		if(inputEmail.value != "" && confirmEmail.value == "") {
		   alert('Confirm Email diperlukan');
		   if(inputEmail.value !== confirmEmail.value ){
				alert("Email belum sama");
			}
		}
		// if(inputEmail.value != "" && confirmEmail.value != ""){
		// 	if(inputEmail.value !== confirmEmail.value ){
		// 		alert("Email belum sama");
		// 	}
		// 	else{
		// 		alert('yeay')
		// 	}
		// }
	}
	else if(inputUsername.value != "" && inputPassword.value === confirmPassword.value && inputEmail.value === confirmEmail.value ){
		alert('BERHASIL');
	}
	});
	
//}
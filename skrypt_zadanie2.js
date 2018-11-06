//Krzysztof Nyczka
window.onload = function load(){
	document.getElementById('form').onsubmit = checkForm;
	document.getElementById('email').onblur= checkEmail;
	document.getElementById('nrkonta').onblur= checkNrkonta;
	document.getElementById('pesel').onblur= checkPesel;
	document.getElementById('data').onblur= checkData;
}

function checkData (){
	var data = document.getElementById('data');
	//var reg = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
	//https://stackoverflow.com/questions/5465375/javascript-date-regex-dd-mm-yyyy
	var regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
	if(regex.test(data.value) == false) {
		data.style.border = "thick red solid";
		return false;
	} else {
		data.style.border = "thick green solid";
		return true;
	}
	
}

function checkEmail(){
	var email = document.getElementById('email');
	//https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression
	var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
	
	if(regex.test(email.value) == false) {
		email.style.border = "thick red solid";
		return false;
	} else {
		email.style.border = "thick green solid";
		return true;
	}	
}

function checkNrkonta(){
	var nrkonta = document.getElementById('nrkonta');
	
	//http://regexlib.com/UserPatterns.aspx?authorid=1d3fa406-2141-49eb-b8ed-f35f8cc5e737&AspxAutoDetectCookieSupport=1
	var regex = /^PL\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}|PL\d{26}/g;
	
	if(regex.test(nrkonta.value) == false) {
		nrkonta.style.border = "thick red solid";
		return false;
	} else {
		nrkonta.style.border = "thick green solid";
		return true;
	}
}

function checkPesel(){
	var pesel = document.getElementById('pesel');
//https://ipsec.pl/data-protection/2012/european-personal-data-regexp-patterns.html
	var regex = /^[0-9]{4}[0-3]{1}[0-9}{1}[0-9]{5}/g;
	if(regex.test(pesel.value) == false) {
		pesel.style.border = "thick red solid";
		return false;
	} else {
		pesel.style.border = "thick green solid";
		return true;
	}
}

function checkForm(){
	if((checkData && checkEmail && checkNrkonta && checkPesel)==true){
		alert('Formularz wypełniony poprawnie');
		return true;
	}
	else {
		alert('Wpisano błędne dane');
		return false;
	}
}
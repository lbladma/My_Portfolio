// validate_email function compliments of w3schools.com Source: (http://www.w3schools.com/jS/js_form_validation.asp)
xxx=document.form[0].agerange;
function validate_required(field,alerttxt)
{
	with (field)
	{
		if (value==null||value=="")
		{
		alert(alerttxt);return false;
		}
		else
		{
		return true;
		}
	}
}
function check_char(field)
{
	re = /^[a-zA-Z]{1,40}$/;
	return re.test(field);
}
function check_msg(field)
{
	re = /^.{1,300}$/;
	return re.test(field);
}
function validate_email(field, alerttxt){
	with (field) {
		apos = value.indexOf("@");
		dotpos = value.lastIndexOf(".");
		if (apos < 1 || dotpos - apos < 2) {
			alert(alerttxt);
			return false;
		}
		else {
			return true;
		}
	}
}
function validate_checked(field,alerttxt)
{
	for (x=0; x < field.length; x++)
	{
		if (field[x].checked == 1)
		{
			return true;
		}
	}
	alert(alerttxt);
	return false;			
}

function cvalidate(thisform)
{
//	var blnValid = false;
//	var ctl = document.getElementById("fname");
	with (thisform) 
	if ((validate_required(fname, "Enter First name!") == false)) {
		fname.focus();		
		return false;		
	}
	else if (check_char(fname.value) == false) {
		fname.focus();
		alert("First name not a valid! All charaters must be Alpha [A-z].")
		return false;
	}
	else if (validate_required(lname, "Enter Last name!") == false) {
		lname.focus();
		return false;
	}
	else if (check_char(lname.value) == false) {
		lname.focus();
		alert("Last name not a valid! All charaters must be Alpha [A-z].")
		return false;
	}
	else if (validate_email(email, "Not a valid e-mail address! Needs to be in form a@b.com") == false) {
		email.focus();
		return false;
	}
	else if (validate_required(msg1, "Enter a message!") == false) {
	msg1.focus();
	return false;
	}
	else if (check_msg(msg1.value) == false){
		msg1.focus();
		alert("Message can only contain 300 charaters including spaces.")
		return false;		
	}	

}

function reloadPage(){
  window.location.reload();
}




var formValidation=true;

function validateRequired(fieldId,message){
	
	
	if(!document.getElementById(fieldId) ||  document.getElementById(fieldId).value.length==0){
		formValidation=false;
		addErrorMessage(message);
	}
	
}

function validateFormat(fieldId,regexp,message){
	
}

function invalidateForm(message){
	formValidation=false;
	addErrorMessage(message);
}


function addErrorMessage(message){
	
	if(!window.document.body.firstChild.id && window.document.body.firstChild.id!="errorMessages"){
		
		var newErrorMessages = document.createElement("div");
		newErrorMessages.id="errorMessages";
		newErrorMessages.className="error"
		var errorList = document.createElement("ul");
		newErrorMessages.appendChild(errorList);
		window.document.body.insertBefore(newErrorMessages,window.document.body.firstChild);
	}
	
	var errorMessages=document.getElementById("errorMessages").firstChild;
	var newErrorMessageItem = document.createElement("li");
	var errorMessage = document.createTextNode(message);
	newErrorMessageItem.appendChild(errorMessage);
	errorMessages.appendChild(newErrorMessageItem);
}

function removeErrorMessages(){
	if(!document.getElementById("errorMessages")){
		
	}else{
		document.body.removeChild(document.getElementById("errorMessages"));
	}
	formValidation=true;
}



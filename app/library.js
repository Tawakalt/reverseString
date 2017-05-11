'use strict';   

// Declaing the function 
const reverseString = (argumentSupplied) =>{
	//checking if the argument supplied is a string
	if (typeof(argumentSupplied) === 'string'){
		// if empty string
		if (argumentSupplied === '')
			return null;
		//if string is not empty
		else{
			let newString = "";
		    for (let counter = argumentSupplied.length - 1; counter >= 0; counter--)
		        newString += argumentSupplied[counter];
		    //if palindrome
	    	if (newString == argumentSupplied)
		    	return true;
		    //if not palindrome
	    	else
	      		return newString;
		}
	}
	//if argument supplied is not a string
	else 
		return "Arguments must be a string";
}
module.exports = reverseString
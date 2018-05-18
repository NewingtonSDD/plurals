/* const input=document.getElementById('input'); */
/* const output=document.getElementById('output'); */
/* const status=document.getElementById('status'); */

/* 
Given a non-negative integer quantity Q and a word, the correct phrase to print is either
 "no" and the plural of the word, if Q is zero;
 "one" and the singular of the word, if Q is 1; or
 the quantity as a decimal integer and the plural of the word, otherwise.
*/
function processItem(qty, singular) {
	if (qty === 0) {
  	return 'no ' + makePlural(singular);
  } else if (qty === 1) {
  	return 'one ' + singular;
  } else {
  	return qty + ' ' + makePlural(singular);
  }
}
/*
To form the plural of a word, use the following rules that cover common cases:
 If the word ends in "s", "x", "z", "ch" or "sh", append "es";
 if the word ends in "o" preceded by a consonant (that is, not "a", "e", "i", "o", "u" or "y" in this context),
append "es";
 if the word ends in "y" preceded by a consonant, remove the "y" and append "ies";
 if the word ends in "fe" preceded by a letter other than another "f", remove the "fe" and append "ves";
 if the word ends in "f" preceded by a letter other than another "f", remove the "f" and append "ves"; or
 append "s" otherwise.
*/
function makePlural(singular) {

	if(singular.endsWith('s') || 
  	singular.endsWith('x') || 
    singular.endsWith('z') || 
    singular.endsWith('ch') || 
    singular.endsWith('sh')
  ) {
   return singular + 'es';
  } else if (singular.endsWith('o') && !'aeiouy'.includes(singular.slice(-2,-1))) {
  	return singular + 'es';
  } else {
		return singular + 's';
  }
}

function processInput() {
  const inputList = input.value.split('\n');  
  /* console.log(inputList) */;
  
  const count = +inputList[0];
  // console.log(typeof count);
  
  for(let i=1; i<=count; i++) {
  	const item = inputList[i].split(' ');
    const qty = +item[0];
    const singular = item[1];
    
    //console.log(qty, singular);   
    const result = processItem(qty, singular);
    output.innerHTML += result;
    output.innerHTML += '<br />'
    
  }
  status.innerHTML = 'finsihed';
}
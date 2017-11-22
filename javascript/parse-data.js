(function(){
  let demoData = document.getElementById("demo");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(jsonString);

  /*
    EXERCISE 01:
    Rewrite this to make it *loop* through all the lecturers' names.
	
	Clue: use "for key in..." and try to work out the syntax
    (Note the ES6 'template literal' syntax - you can add HTML tags)
  */
  
  // set theData here to an empty string
  
  // create a loop around this line with "for ... in" (look it up)_
  
  
  let theData = "";
    
  for (lec in obj.lecturers){
	theData += `<td>${obj.lecturers[lec].firstName} ${obj.lecturers[lec].lastName}
	${obj.lecturers[lec].roomNumber} ${obj.lecturers[lec].emailAddress}</td>`;
  }

  // end the for loop here
  
  // populates the chosen element's content with the data:
  demoData.innerHTML = theData; 

  /*
    EXERCISE 02:
    Once you have looped through all the data, present the 
    results on the page, styled with CSS.
  */
}());

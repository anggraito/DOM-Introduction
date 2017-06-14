
var fillMeElement = document.getElementById("fill-me");
var changeAllElements = document.getElementsByClassName("change-all-of-me");
var titleElements = document.getElementById("container").getElementsByTagName("h2");

// fill-me
var fillMeElementContent = fillMeElement.innerHTML;
console.log( fillMeElementContent);

fillMeElement.innerHTML = 'HALO';
var newFillMeElement = fillMeElement.innerHTML;
console.log(newFillMeElement);

// change-all-of-me
for( var i=0; i < changeAllElements.length; i++){
 	var allChangeAllElement = changeAllElements[i];
 	allChangeAllElement.innerHTML = 'HALO JUGA!';
 	var allChangeAllElementContent = allChangeAllElement.innerHTML;
 	console.log(allChangeAllElementContent);
}

var titleElementContent = titleElements[0].innerHTML;
console.log(titleElementContent);

titleElements[0].innerHTML = 'Apa kabar?';
var newTitleElement = titleElements[0].innerHTML;
console.log(newTitleElement);




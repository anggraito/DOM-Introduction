var body = document.body;

var main = document.getElementById('main');
body.appendChild(main);

var insideMain = document.createElement('div');
insideMain.setAttribute('id','content');
main.appendChild(insideMain);

var judul = document.createElement('h4');
judul.setAttribute('class','question-wrap')
var judulText = document.createTextNode('Hai Nama');
judul.appendChild(judulText);
insideMain.appendChild(judul);

var divQuest = document.createElement('div');
divQuest.setAttribute('id','question');
insideMain.appendChild(divQuest);

var question = document.createElement('p');
question.setAttribute('class','quest');
var questionText = document.createTextNode('Pertanyaan isi disini');
question.appendChild(questionText);
divQuest.appendChild(question);

var option1 = document.createElement('input');
option1.setAttribute('type','radio');
var optionText1 = document.createTextNode('hai');
option1.appendChild(optionText1);
divQuest.appendChild(option1);
var br = document.createElement('br');
divQuest.appendChild(br);

var option2 = document.createElement('input');
option2.setAttribute('type','radio');
var optionText2 = document.createTextNode('hai2');
option2.appendChild(optionText2);
divQuest.appendChild(option2);
var br = document.createElement('br');
divQuest.appendChild(br);

var option3 = document.createElement('input');
option3.setAttribute('type','radio');
var optionText3 = document.createTextNode('hai3');
option3.appendChild(optionText3);
divQuest.appendChild(option3);
var br = document.createElement('br');
divQuest.appendChild(br);
var option4 = document.createElement('input');
option4.setAttribute('type','radio');
var optionText4 = document.createTextNode('hai4');
option4.appendChild(optionText4);
divQuest.appendChild(option4);
var br = document.createElement('br');
divQuest.appendChild(br);










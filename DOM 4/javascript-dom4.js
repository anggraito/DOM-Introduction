var body = document.body;
var main = document.getElementById('main');
body.appendChild(main);
var insideMain = document.createElement('div');
insideMain.setAttribute('id','content');
main.appendChild(insideMain);

// var insideContent = document.createElement('div');
// insideContent.setAttribute('class','content-post');
// insideMain.appendChild(insideContent);

// var classContentPost = "";
// for(var i=0; i< classContentPost.length; i++){
// 	classContentPost += '<div class="content-post"></div>';
// }
// var insideContent = document.getElementById('content');
// classContentPost = '<div class="content-post"></div>';
// insideContent.innerHTML = classContentPost;
// document.insideMain.appendChild(insideContent);

var insideContent = document.createElement('div');
insideContent.setAttribute('class','content-post');
insideMain.appendChild(insideContent);
document.getElementById('content').appendChild(insideContent);

var h1 = document.createElement('h1');
var h1Text = document.createTextNode('Judul Post');
h1.appendChild(h1Text);
insideContent.appendChild(h1);

var span = document.createElement('span');
var spanText = document.createTextNode('Published on 12 May 2016');
span.appendChild(spanText);
insideContent.appendChild(span);

var paragraf = document.createElement('p');
var textParagraf = document.createTextNode('Lorem ipsum Dolor sit amet');
paragraf.appendChild(textParagraf);
insideContent.appendChild(paragraf);

var buttonShare = document.createElement('button');
buttonShare.setAttribute('class','share-post-btn');
var buttonText = document.createTextNode('Share this Post');
buttonShare.appendChild(buttonText);
buttonShare.addEventListener('click', function(){
	alert('You have shared this post!!!')
});
insideContent.appendChild(buttonShare);

var insideContent2 = document.createElement('div');
insideContent2.setAttribute('class','content-post');
insideMain.appendChild(insideContent2);
document.getElementById('content').appendChild(insideContent);


var h1 = document.createElement('h1');
var h1Text = document.createTextNode('Judul Post');
h1.appendChild(h1Text);
insideContent2.appendChild(h1);

var span = document.createElement('span');
var spanText = document.createTextNode('Published on 13 May 2016');
span.appendChild(spanText);
insideContent2.appendChild(span);

var paragraf = document.createElement('p');
var textParagraf = document.createTextNode('Lorem ipsum Dolor sit amet amet jabang bayek');
paragraf.appendChild(textParagraf);
insideContent2.appendChild(paragraf);

var buttonShare = document.createElement('button');
buttonShare.setAttribute('class','share-post-btn');
var buttonText = document.createTextNode('Share this Post');
buttonShare.appendChild(buttonText);
buttonShare.addEventListener('click', function(){
	alert('You have shared this post!!!')
});
insideContent2.appendChild(buttonShare);



//harusny bisa diulang dong?
// for(var i = 0; i < insideContent.length; i++) {
//   var currentContenElement         = insideContent[i];
//   var currentContentElementContent  = currentContentElement.innerHTML;
//   //console.log('' + i + '' + currentContentElementContent);
// }
//return currentContentElementContent;








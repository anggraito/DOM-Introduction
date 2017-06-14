//children, parentNode, nextElementSibling, previousElementSibling, dan innerHTML()

var eldest = document.getElementById('eldest-parent'); 
var nexPrev = document.getElementById('a-child');

// var eldestContent = eldest.children[0].innerHTML;
// console.log(eldestContent);
// var eldestChild = eldest.children[0];
// eldestChild.innerHTML = 'Diakses Melalui Eldest Parent';
// console.log(eldestChild);

console.log(eldest.children[0]);
eldest.children[0].innerHTML = 'Diakses Melalui Eldest Parent';
var newEldest = eldest.children[0].innerHTML;
console.log(newEldest);

console.log(nexPrev.previousElementSibling.innerHTML);
nexPrev.previousElementSibling.innerHTML = 'Diakses Melalui a Child';
var prev = nexPrev.previousElementSibling.innerHTML;
console.log(prev);

console.log(nexPrev.nextElementSibling.innerHTML);
nexPrev.nextElementSibling.innerHTML = 'Diakses Melalui a Child';
var next = nexPrev.nextElementSibling.innerHTML;
console.log(next);
//------alternative console work but why in View Mode not change's-------
// console.log(nexPrev.previousElementSibling);
// var prev = nexPrev.previousElementSibling;
// prev = 'Diakses Melalui a Child';
// console.log(prev);
// console.log(nexPrev.nextElementSibling);
// var next = nexPrev.nextElementSibling.innerHTML;
// next = 'Diakses Melalui a Child';
// console.log(next);
console.log(nexPrev.parentNode.parentNode.nextElementSibling);
nexPrev.parentNode.parentNode.nextElementSibling.innerHTML = 'Diakses Melalui a Child';
var parentBot = nexPrev.parentNode.parentNode.nextElementSibling.innerHTML;
console.log(parentBot);











// // // console.dir(document);
// // console.log(document.domain); // domain
// // console.log(document.URL); //URL
// // console.log(document.title); // title of the page
// // document.title = 'Event Listeners';
// // console.log(document.title); // title changed
// // console.log(document.head); // will output the document's head;
// // console.log(document.body); // will output the document's body;
// // console.log(document.all) // will output an array of documents collection (what's in the DOM);
// // console.log(document.all[10]);

// // console.log(document.forms); // get all the forms from the page; [array];
// // console.log(document.links); // all links [array];

// // get Element By Id

// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');

// // textContent and innerText

// headerTitle.textContent = 'Hello'; 
// headerTitle.innerText = 'Hello Again';
// console.log(headerTitle);

// // innerHTML

// headerTitle.innerHTML = '<h3>Hello h1 </h3>';
// // this will not change the structure of the H1, instead of that, the innerHTML will add another node into the H1
// // like a span (inner, in the interior);
// console.log(headerTitle);

// // Changing the CSS style (camelCase);
// header.style.borderBottom = '3px solid #000';


// // get elements ByClassName

// let items = document.getElementsByClassName('list-group-item'); // a Node of elements
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// console.log(items[1]);

// // important . adding a bgcCol to the 'items' will not work; because it is a DOM COllection, we need to
// // loop through them

// // Proper Way to iterate through 'items';
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'red';
// }


// // get elements byTagName (exactly like the ClassName);

// let li = document.getElementsByTagName('li'); // a Node of elements
// console.log(li);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// console.log(items[1]);

// // important . adding a bgcCol to the 'items' will not work; because it is a DOM COllection, we need to
// // loop through them

// // Proper Way to iterate through 'items';
// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'orange';
// }


// Query Selector works only for the first element that is selected (the selector wich is used can be anything)
// from (tags, ids, classes, etc);

let header = document.querySelector('#main-header');
header.style.borderBottom = '3px solid #000';

let input = document.querySelector('input');
input.value = 'Hello World'; // added a value to this input;

let submit = document.querySelector('input[type="submit"]');
submit.style.color = '#fff';
submit.value = 'Change';

// will grab the frist li item from the group;
let item = document.querySelector('.list-group-item');
item.style.color = 'orange';

// will grab the last li item from the group;
let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'red';

// will grab the second li item from the group;
let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'red';


// Query Selector All - similiar like tagName/className;

let titles = document.querySelectorAll('.title'); //array

// selecting all the odd ones (odd is a css selector);
let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');


// iterate through the odds items;
for (var i = 0; i < odd.length; i++) {
    odd[i].style.color = 'purple';
}














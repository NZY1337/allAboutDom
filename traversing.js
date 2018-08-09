// TRAVERSING THE DOM


/*
understanding the ParentNode and Siblings (copii);

<header id="main-header" class="bg-success text-white p-4 mb-3">
    <div class="container">
        <h2>Hello World </h2>
    </div>
    <h1 id="header-title">Item Lister <span style="display:none">123</span></h1>
</header>

    header - parent
    div, h1 - children
    the parentNode for div or h1 is header
    the children for parent are h1 and div

*/

// grabs the first ul item with the id of 'items'
let itemList = document.querySelector('#items');

// ParentNode
// console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'lightgray';

// ParentElement - the same
// console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'orange';


// children
// all the children of ul-listItem
// console.log(itemList.children);
// console.log(itemList.children[1]); // Item 
itemList.children[1].style.backgroundColor = 'purple';

// firstElementChild
// console.log(itemList.firstElementChild);
itemList.firstElementChild.style.backgroundColor = 'red';
itemList.firstElementChild.textContent = 'hello ONE';

// lastElementChild

// console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor = 'beige';
itemList.lastElementChild.textContent = 'hello LAST';

// nextElementSibling
console.log(itemList.nextElementSibling); // null - doesn't have one, we need to add one from HTML

// previousElementSibling
// console.log(itemList.previousElementSibling); //h2
itemList.previousElementSibling.style.color = '#fff';


// Creating a DIV ELEMENT
let newDiv = document.createElement('div');
newDiv.className = 'hello'; // add class
newDiv.id = 'hello-1'; // add id
newDiv.setAttribute('title', 'hello div'); //add attr

// add text node
let newDivText = document.createTextNode('Hello you are going to learn JavaScript - traversing the DOM');

// add text to div
newDiv.appendChild(newDivText);

// The insertBefore() method inserts a node as a child, right before an existing child, which you specify.
// so if we have a child, we need to select the child's parent first, right ?
// insert the newDiv
// node.insertBefore(newnode, existingnode)

let container = document.querySelector('header  .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDivText, h1);
// container.appendChild(newDivText);


/////////////////// EXAMPLE append child ///////////////////

let newLi = document.createElement('li');
let newLiText = document.createTextNode('Item N');
newLi.className = 'list-group-item';
newLi.appendChild(newLiText);
let whereToInsert = document.querySelector('ul');
whereToInsert.appendChild(newLi);
    
/////////////////// EXAMPLE insertBefore ///////////////////

let newLiItem = document.createElement('li');
let newLiItemText = document.createTextNode('Item insertedBefore');
newLiItem.className = 'list-group-item';
newLiItem.appendChild(newLiItemText);
console.log(newLiItem);


let newLiItemLocation = document.querySelector('#main ul'); // selecting the nodeParent

// method 1
// newLiItemLocation.insertBefore(newLiItem, liItem);
// let liItem = document.querySelector('ul li:nth-child(3)'); //selecting the child

// method 2
newLiItemLocation.insertBefore(newLiItem, newLiItemLocation.children[3]);
































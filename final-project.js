// get form 1)
let form = document.getElementById('addForm');

// get ul 2)
let itemsList = document.getElementById('items');

// get the filter 3)
let filter = document.getElementById('filter');

// create the eventListener for form
form.addEventListener('submit', addItem);

// create the eventListener for removeButton
itemsList.addEventListener('click', removeItem);

// create the eventListener for filter
filter.addEventListener('keydown', filterItems);


// 1) create the addItem function
function addItem(e) {
    e.preventDefault();
   
    // get the input's value
    let item = document.getElementById('item').value;

    // create new Li
    let newItem = document.createElement('li');

    // give a class to this new created 'li'
    newItem.className = 'list-group-item';
    
    // append the 'item' like a textNode to the new Li
    newItem.appendChild(document.createTextNode(item));

    // create the remove button
    let removeBtn = document.createElement('button');

    // add classes to this button
    removeBtn.className = 'btn btn-danger btn-sm float-right delete';
    
    // create a textNode for the button
    removeBtn.appendChild(document.createTextNode('x'));

    // append button the the new Li
    newItem.appendChild(removeBtn);

    // append NewLi to the Ul items list
    itemsList.appendChild(newItem);
}


// 2) create the removeItem function
function removeItem(e) {
    e.preventDefault();

    if (e.target.classList.contains('delete')) { // if the item which is clicked has the class 'delete'
        console.log(1); 
        // create a variable which contains the parent of the clicked element
        let removedItem = e.target.parentElement;
        // remove that item with removeChild because that item is a child of the UL(where the ul is the parent of this element);
        itemsList.removeChild(removedItem);
    }
}

// 3) create the filterItems function

function filterItems(e) {
    // convert text to lowerCase
    // e.target = the elementh which triggers the event
    // in this case e.target = 'filter' var

    let text = e.target.value.toLowerCase();

    // get all the li items
    let items = document.getElementsByTagName('li');
    
    // convert the li node list to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
  
}


///////////// CONVERTING NODES TO ARRAY  /////////////
let array = document.querySelectorAll('#array_ul li');
// console.log(array);

let convert = Array.from(array);
// console.log(convert);

convert.forEach(function(arr){
    // console.log(arr);
});






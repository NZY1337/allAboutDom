
// Events Listeners

// VAR 1

function buttonClicked(e) {
    // console.log('you have clicked the button');
    console.log(e.target); // the element who did the trick
    console.log(e.target.id); //gets the id
    console.log(e.target.className); // gets the className;
    console.log(e.target.classList); // gets the classname like an array;

    //var 1
    /*
        let output = document.getElementById('output');
        let createH2  = document.createElement('h3');
        createH2.setAttribute('style', 'color:orange;text-transform:uppercase');
        let createH2Text = document.createTextNode('This is an output');
        createH2.appendChild(createH2Text);
        output.appendChild(createH2);
    */

    //var 1
        let output = document.getElementById('output');
        output.innerHTML = '<h6> This is an Output</h6>';

        let targetId = document.getElementById('targetId');
        targetId.innerHTML = '<h6>' + ' This is a ' + e.target.id + '</h6>';

        let pos = document.getElementById('position');
        position.innerHTML = e.clientX; // or clientY
    
}


let btn = document.getElementById('button');
btn.addEventListener('click', buttonClicked);


// VAR 2
btn.addEventListener('click', function() {
    // console.log('the button is now clicked');
});

// VAR 3

function getClicked() {
    /*  
        let x = document.getElementById('button');
        x.addEventListener('click', function() {
            console.log('the button you have clicked is very happy');

            // changing the header's content
            document.getElementById('header-title').textContent = 'Changed';
            document.querySelector('#main').setAttribute('style', 
                'color: red; background-color: beige; padding-bottom: 2px; margin: 3px;'
            );
        });
    */
}

getClicked();


let box = document.getElementById('box');
box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');

itemInput.addEventListener('keydown', runEvent);




function runEvent(e) {
    //console.log('EVENT TYPE: ' + e.type);
    console.log(e.target.value);
    let output2 = document.getElementById('output_2');
    // output2.innerHTML = '<h3>Mouse X: ' + e.offsetX  + '</h3>' +'<h3> Mouse Y : ' + e.offsetY + '</h3>';

    // something very cool
    // document.body.style.backgroudColor = 'rgb(' + e.offsetX + "," + e.offsetY + ", 40)";


}


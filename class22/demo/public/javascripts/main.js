document.addEventListener('DOMContentLoaded', main);

function main() {
    var count = 0;
    var button = document.querySelector('#content > button')
    console.log(button);

    button.addEventListener('click', clickHandler);

    function clickHandler(evt) {
        var contentDiv = document.getElementById('content');
        var p = document.createElement('p'); 
        var ele = document.createTextNode('hello ' + count + ', ' + evt.x + ', ' + evt.y); 

        p.appendChild(ele);
        contentDiv.appendChild(p);
        count += 1;
        button.removeEventListener('click', clickHandler);
        console.log('after remove');
    
    }
}


document.addEventListener("DOMContentLoaded", main);
function main() {
    var count = 0;
    var btn = document.querySelector(".clicky");
    btn.addEventListener("click", handleClick);

    var socket = io();
    socket.on('connect', onConnect); 

    function onConnect() {
        console.log('connected'); 
    }

    
    function handleClick(evt) {
        socket.emit('pushed', count);
        count += 1;
    }

}

/*
document.addEventListener("DOMContentLoaded", main);

function main() {
    var socket = io();
    socket.on('connect', onConnect);

    function onConnect() {
        console.log('connected')
    }

}
*/

/*
document.addEventListener("DOMContentLoaded", main);
function main() {
    var socket = io();

    socket.on('connect', onConnect);

    function onConnect() {
        socket.emit('foo', 'my message');
    }


}
*/

document.addEventListener("DOMContentLoaded", function() {
    var btn = document.querySelector("button");     
    btn.addEventListener("click", handleClick);        
    var socket = io();
    socket.on("chat message", onMessage);

    function onMessage(msg) {
        console.log('received msg from server', msg);
        document.body.appendChild(document.createTextNode(msg));
    }

    function handleClick(evt) {
        var msg = document.querySelector("#chatMessage").value; 
        console.log(msg);
        socket.emit("chat message", msg);

    }    
});

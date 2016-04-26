document.addEventListener("DOMContentLoaded", main);
function main() {
    var socket = io();

    socket.on('connect', onConnect);

    function onConnect() {
        socket.emit('foo', 'my message');
    }


}

document.addEventListener("DOMContentLoaded", main);

function main(evt) {
    window.setInterval(getMessages, 1000);
    console.log("dom is loaded !!!!");
    var btn = document.querySelector('button');
    btn.addEventListener('click', handleClick);
    var sendBtn  = document.querySelector("#sendBtn");
    sendBtn.addEventListener("click", handleSend);
}

function getMessages() {
    console.log("MOAR MESSAGES")
    var req = new XMLHttpRequest();
    // var url = "http://localhost:3000/json"
    var url = "http://localhost:3000/api/messages"
    // var url = "http://data.nba.com/data/15m/json/cms/noseason/game/20160205/0021500754/boxscore.json"
    req.open("GET", url, true);
    req.addEventListener("load", handleLoad);
    req.send();
    // error handling

    function handleLoad(evt) {
        console.log("load event triggered");
        if(req.status == 200) {
            var data = JSON.parse(req.responseText);
            console.log(data);
            Array.prototype.forEach.call(data, function(obj) {
                document.body.appendChild(document.createTextNode(obj.text));
            });
        }
        
    }
}

function handleSend(evt) {
    evt.preventDefault();

    var req = new XMLHttpRequest();
    req.open('POST', '/api/message');
    req.addEventListener('load', function() {
        console.log(req.responseText);
    });

    req.addEventListener('error', function() {
        console.log(req.responseText);
    });

    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    // url encoded.... name value pairs
    // name=value
    var data = 'message=' + document.querySelector("#textField").value;
    req.send(data);
}

function handleClick(evt) {
    var req = new XMLHttpRequest();
    // var url = "http://localhost:3000/json"
    var url = "http://localhost:3000/api/messages"
    // var url = "http://data.nba.com/data/15m/json/cms/noseason/game/20160205/0021500754/boxscore.json"
    req.open("GET", url, true);
    req.addEventListener("load", handleLoad);
    req.send();
    // error handling

    function handleLoad(evt) {
        console.log("load event triggered");
        if(req.status == 200) {
            var data = JSON.parse(req.responseText);
            console.log(data);
            Array.prototype.forEach.call(data, function(obj) {
                document.body.appendChild(document.createTextNode(obj.text));
            });
        }
        
    }
}

document.addEventListener("DOMContentLoaded", main);

function main() {
    console.log("DOM Content loaded");
    var btn  = document.querySelector("#btn");
    btn.addEventListener("click", onClick);
}

function onClick(evt) {
    console.log('clicked', this);
    evt.preventDefault();
    // grab value from input field
    var username = document.querySelector("#username").value;
    console.log('username', username);

    var req = new XMLHttpRequest();
    var url = "/api/foo";
    req.open('POST', url, true);
    
    req.addEventListener('load', function() {
        console.log(req.responseText);    
        var preElement = document.createElement('pre');
        //preElement.appendChild(document.createTextNode());
        preElement.textContent = req.responseText;
        document.body.appendChild(preElement);
    });
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=ISO-8859-1');
    req.send('bar=' + username);
}
/*
// we want this url:
// https://api.github.com/users/jversoza/repos
// on submitting form that has text field that represents username
// send a background request to the api endpoint
document.addEventListener("DOMContentLoaded", main);

function main() {
    console.log("DOM Content loaded");
    var btn  = document.querySelector("#btn");
    btn.addEventListener("click", onClick);
}

function onClick(evt) {
    console.log('clicked', this);
    evt.preventDefault();
    // grab value from input field
    var username = document.querySelector("#username").value;
    console.log('username', username);

    // send the xmlhttprequest
    // this is for a GET!
    // 1. create new object
    var req = new XMLHttpRequest();
    var url = "https://api.github.com/users/" + username + "/repos";

    console.log('url', url);
    // 2. configure it
    req.open('GET', url, true);
    
    // 3. specify event handlers (load, error)
    req.addEventListener('load', function() {
        console.log(req.responseText);    
        var preElement = document.createElement('pre');
        //preElement.appendChild(document.createTextNode());
        preElement.textContent = req.responseText;
        document.body.appendChild(preElement);

        var data = JSON.parse(req.responseText);
        console.log(data);    
    });
    // 4. actually send the request
    // add stuff to the dom
    req.send();
}
*/












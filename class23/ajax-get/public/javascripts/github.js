document.addEventListener("DOMContentLoaded", main);
function main(evt) {
   var rateLimitBtn = document.querySelector('#rate-limit-btn');
   var usernameBtn = document.querySelector('#username-btn');
   rateLimitBtn.addEventListener('click', handleRateLimitClick);
   usernameBtn.addEventListener('click', handleUsernameClick);
}
function handleUsernameClick(evt) {
    evt.preventDefault();
    console.log("username clicked");
    // get the value of the input field
    var username = document.querySelector('#username').value;
    console.log(username);
    // create the object
    var req = new XMLHttpRequest();

    // configure
    var url = "https://api.github.com/users/" + username + "/repos"
    req.open("GET", url);

    req.addEventListener('load', function(evt) {
        console.log('loaded repos');
        var data = JSON.parse(req.responseText);
        console.log(data);
    });

    // send
    req.send();


}
function handleRateLimitClick() {
    console.log("rate limit button clicked");
    // create the object
    var req = new XMLHttpRequest();

    // configure
    var url = "https://api.github.com/rate_limit"
    req.open("GET", url);

    req.addEventListener('load', function(evt) {
        console.log(req.status);
        console.log(req.responseText);
        var rateLimitDiv = document.querySelector('#rate-limit');
        rateLimitDiv.appendChild(document.createTextNode(req.responseText));
    });
    // send
    req.send();


}

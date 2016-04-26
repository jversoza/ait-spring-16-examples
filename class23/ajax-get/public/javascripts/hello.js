document.addEventListener("DOMContentLoaded", main);

function main(evt) {
    console.log("dom is loaded !!!!");
    var btn = document.querySelector('button');
    btn.addEventListener('click', handleClick);
}

function handleClick(evt) {
    var req = new XMLHttpRequest();
    // var url = "http://localhost:3000/hello.json"
    var url = "http://data.nba.com/data/15m/json/cms/noseason/game/20160205/0021500754/boxscore.json"
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
                document.body.appendChild(document.createTextNode(obj.message));
            });
        }
        
    }
}

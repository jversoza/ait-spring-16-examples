var React = require('react');
var Game = React.createClass({
    render: function() {
        var dice = [];
        for(var i = 0; i < 5; i++) {
            // when dynamically creating child nodes
            // react must have unique id for each
            // child
            dice.push(<Die key={i} />);
        }
        return <div id="game">{dice}</div>
    },
});

var Die = React.createClass({
    render: function() {
        return <div className='die'></div>
    }
});

module.exports = Game;

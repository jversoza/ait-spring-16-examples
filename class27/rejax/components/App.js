var React = require('react');

var Filter = React.createClass({
    render: function() {
        return (
        <div id="filterForm">
            <input type="text" />
            <input type="submit" value="Filter!" onClick={this.handleClick} />
        </div>
        );        
    },

    handleClick: function() {
        var director = document.querySelector('input[type="text"]').value; 
        this.props.filter('/api/movies?director=' + director);
    }
});

var MovieList = React.createClass({
    render: function() {
        var listItems = this.props.movies.map(function(movie) {
            return <li>{movie.title} - {movie.director}</li>
        });
        return <ul>{listItems}</ul>
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Filter filter={this.filter} />
                <MovieList movies={this.state.movies} />
            </div>
        );
    },

    getInitialState: function() {
        return {
            movies: [],
            req: undefined
        } 
    },

    componentWillMount: function() {
        this.filter('/api/movies');
    },

    filter: function(url) {
        var req = new XMLHttpRequest();
        req.open('GET', url, true);
        // WAT? ...this in an anonymous function set
        // explicitly to object
        req.addEventListener('load', (function() {
            var movies = JSON.parse(req.responseText);
            this.setState({
                movies: movies 
            }); 
        }).bind(this));
        req.send();
    },

});




module.exports = App;

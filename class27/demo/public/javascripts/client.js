var MyComponent = React.createClass({
    render: function() {
        //return React.createElement('h1', {}, 'hello');
        return <h1>goodbye!</h1>
    }
});

ReactDOM.render(
    React.createElement(MyComponent),
    document.getElementById('app')
);

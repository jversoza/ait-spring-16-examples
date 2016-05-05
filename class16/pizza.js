// /pizza/medium-thin-1

toppings of the toppings for the pizza
crust
size

/pizza/:slug

Pizza.findOne({slug:req.params.slug})

// /pizza/large-thin-1
// /pizza/large-thin-2
// all go ot same route handler
// slug
// human readable unique identifier
// that substitutues spaces with dashes
// and adds a number to make an name unique
//


var mongooseUrlSlugs = require('mongoose-url-slugs')
var mongoose = require('mongoose');

var Topping = new mongoose.Schema({
    name: {type: String, required: true},
    extra: Boolean
});

var Pizza = new mongoose.Schema({
    size: {type: String, required: true, enum:['small', 'medium', 'large']},           
    toppings: [Topping],
    crust: String,
});

// {size:'small', crust:'thin', toppings:[{name:'mushroom', extra:false}]}
//{size:'medium', crust:'chicago', toppings:[{name:'mushroom', extra:false},{name:'pepperoni', extra:true} ]}

//{id: 2, size:'small', crust:'thin'}
//{name:'foo', extra:false, pizza_id: 2}
Pizza.plugin(mongooseUrlSlugs('size crust'));

// Toppings
mongoose.model('Pizza', Pizza);
mongoose.model('Topping', Pizza);

mongoose.connect('mongodb://localhost/pizzadb');

Pizza = mongoose.model('Pizza'); // constructor

Topping = mongoose.model('Topping'); // constructor

/*
var p = new Pizza({
    size: 'medium',
    crust: 'chicago'// ,
});
p.save(function(err, savedPizza, count){
    console.log(err, savedPizza, count);
});
*/

/*
var p = new Pizza({
    size: 'small',
    crust: 'thin',
    // we're new Topping... we're just creating an object
    toppings: [{name:'mushroom', extra: false}]
});
p.save(function(err, savedPizza, count){
    console.log(err, savedPizza, count);
});
*/

Pizza.findOne({slug:'small-thin'}, function(err, p, count){
    // p represents a single pizza object, small-thin
    //console.log(p);
    p.toppings.push({name:'pineapple', extra:true});
    p.save(function(err, addedToppingPizza, count){
        console.log(addedToppingPizza);    
    })
});


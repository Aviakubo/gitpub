const express = require('express');
console.log(express);

const drinks = require('./models/drinks');
const food = require('./models/food');

const app = express();

app.get('/', (req,res) => {
    res.send("Welcome to GitPub");
});

app.get('/drinks', (req, res) => {
    res.render("drinks_index.ejs", {allDrinks: drinks});
});

app.get('/drinks/:indexOfDrinksArray', (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.indexOfDrinksArray]
    });
});

app.get('/food', (req, res) => {
    res.render('food_index.ejs', {allFood: food});
});

app.get('/food/:indexOfFoodArray', (req, res) => {
    res.render('food_show.ejs', {
        food: food[req.params.indexOfFoodArray]
    });
});

app.listen(3000);
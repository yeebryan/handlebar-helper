const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

let app = express();

app.set('view engine', 'hbs');

app.use(express.static('public'));

wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts')

hbs.handlebars.registerHelper('ifEquals', function(arg1, arg2, options)
{
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

app.get('/', function(req, res){
    res.render('index');
})

app.get('/fruits', function(req,res){
    let fav = 'carrot';
    res.render('fruits.hbs', {
        'fruits': ['apple', 'banana', 'carrot'],
        'favFruit': fav
    })
})

app.listen(3000, ()=> console.log('Server Started'))

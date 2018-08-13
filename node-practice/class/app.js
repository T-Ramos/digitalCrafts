let express = require('express');
let app = express();


app.get('/', function(request, response){
    response.send('Hello, world!');
})


app.get('/cats', function(request, response){
    response.send(`Meow`);
})



app.get('/dogs', function(request, response){
    response.send('Woof');
})

app.get('/cats_and_dogs', function(request, response){
    response.send('Living together');
})

app.get('/greet', function(request, response){
    var name = request.param('name');
    response.send(`Hello, ${name}!`);
})

//creating a server
app.listen(8000, function(){
    console.log('listening on port 8000');
})

app.get('/hello1', function(req, res){

    var name = req.query.name || 'world';
    var year = req.query.year;
    res.send('Hello ' + name + "! You were born in " + (2018-year) + '.');
    
});
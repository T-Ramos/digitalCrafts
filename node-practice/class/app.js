let express = require('express');
let app = express();


app.get('/', function(request, response){
    response.send('hello world!');
})


app.get('/about', function(request, response){
    response.send(`<h1>a;lkfja;ldjfaiodfja</h1>, if;elkajdoijaklfjaopidjflakejfopaidjfpoiejapojflkadjfl;e`);
})



app.get('/faq', function(request, response){
    response.send('frequently asked questions');
})


//creating a server
app.listen(3000, function(){
    console.log('listening on port 3000');
})
const express = require('express');
const port = 2002;
const app = express();
const db = require('./config/mongoose');

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('assets'));

app.use('/', require('./routes/index') );



app.listen(port, function(err){
    if(err){
        console.log("error while connecting to server");
        return;
    }

    console.log("server connected on port:", port);
})
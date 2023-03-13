const express = require('express');
const port = 2002;
const app = express();

const Ejslayout= require('express-ejs-layouts');


app.set("view engine", "ejs");
app.set("views", "./views");

app.set("layout extractStyles", true)
app.set("layout extractScripts", true)
app.use(express.static('assets'));
app.use(Ejslayout);
app.use('/', require('./routes/index') );



app.listen(port, function(err){
    if(err){
        console.log("error while connecting to server");
        return;
    }

    console.log("server connected on port:", port);
})
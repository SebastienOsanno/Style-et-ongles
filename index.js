// require dotenv to import our extern variables
require('dotenv').config();

// We call express
const express = require('express');

const app = express();

// We initialize ejs to haeve our views

app.set("view engine", "ejs");
app.set("views", "./app/views");

// We set our statics files

app.use(express.static('public'));


// We are calling our port via .env

const port = process.env.PORT;

// We set our router

const router = require('./app/router');

// We set the routing
app.use(router);

// We are listenning our port

app.listen(port, () => {
    console.log(`I listen on the port ${port}`);
})
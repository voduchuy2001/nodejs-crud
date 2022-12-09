import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './routes/web';
require('dotenv').config();
var morgan = require('morgan')

let app = express();

// check middleware
app.use((req, res, next)=> {
    console.log(">>> Run into middleware");
    console.log(req.method);
    next();
});

//config app
app.use(morgan('combined'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);

app.use((req, res) => {
    return res.render("errors/404.ejs");
});

let port = process.env.PORT || 6969;

app.listen(port, () => {
    //callback
    console.log("Nodejs is runing on the port : " + port)
})
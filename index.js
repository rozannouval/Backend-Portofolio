const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {

});

//import library CORS 
const cors = require('cors')

//use cors 
app.use(cors())

//import body parser
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`);
});
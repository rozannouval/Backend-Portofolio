const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    return (
        <h1>test</h1>
    )
})
const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send({ hi: 'there'});
});

//whenever heroku runs app, enviornment variables
//look and see if they have declared a port for us to use

const PORT = process.env.PORT || 5000;
app.listen(PORT);

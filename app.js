const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'pug'); //pug is used as template engine.
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, './public')));

let userCount = 0;



app.get('/', (req, res) => {
    res.render('index', {
        title: "Portfolio | Prosenjit",
        name: "PROSENJIT BARMAN PROSEN",
        visitor: userCount++,
    });
})



const port = 3000;

app.listen(port, () => {
    console.log(`The Server is running on port ${port}`)
});
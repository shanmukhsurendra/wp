var express = require('express');
var app = express();
var todocontroller = require('./controllers/todocontroller');
app.set('view engine', 'ejs');
app.use(express.static('./public'));
todocontroller(app);
// localhost:300/assets/styles.css
app.listen(3000);
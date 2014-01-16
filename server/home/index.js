var express = require('express'),
    path = require('path'),
    app = module.exports = express();

app.set('views', '../client/home/');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, '../../client/bundles')));

app.get('/', function( req, res ){
    res.render('index');
});

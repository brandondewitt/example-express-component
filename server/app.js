var express = require('express'),
    app = express();

//mount
app.use(require('./home'));

app.listen(3000);
console.log('app listening on port 3000');

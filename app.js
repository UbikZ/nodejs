// Elements dependencies
express = require('express');
path = require('path');
stylus = require('stylus');
loader = require('express-load');

// Web engine instance
app = express();

// Load environment conf
require('./utils/confLoader')(loader, 'config', app);

// Load MVC
loader('model').then('model/dao').then('controller').then('routes').into(app);

// Run & listen on port
app.listen(app.get('port'), function () {
    console.log('%s running in %s mode on port %s', app.get('title'), app.get('env'), app.get('port'));
    console.log('Views render are using <%s> in %s', app.get('view engine'), app.get('views'))
});

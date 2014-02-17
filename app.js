// Main elements to load before conf
express = require('express');
loader = require('express-load');

// Create server
app = express();
server = app.get('http').createServer(app);

// Load all conf
require('./utils/conf_loader')(loader, 'config', app);

// Init socket and binding events
require('./utils/init_socket')(server);

// Load MVC
loader('model').then('model/dao').then('controller').then('routes').into(app);

// Run & listen on port
server.listen(app.get('port'), function () {
    console.log('%s running in %s mode on port %s', app.get('title'), app.get('env'), app.get('port'));
    console.log('Views render are using <%s> in %s', app.get('view engine'), app.get('views'))
});

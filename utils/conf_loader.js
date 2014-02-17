module.exports = function(loader, conf, app){
    loader(conf).into(app);
    for (var environment in app.config) {
        app.configure(environment, function () {
            for (var type in app.config[environment]) {
                switch (type) {
                    case 'modules':
                        for (var key in app.config[environment][type]) {
                            app.set(key, require(app.config[environment][type][key]));
                        }
                        break;
                    case 'engine':
                        for (var key in app.config[environment][type]) {
                            app.engine(key, app.config[environment][type][key]);
                        }
                        break;
                    case 'set':
                        for (var key in app.config[environment][type]) {
                            app.set(key, app.config[environment][type][key]);
                        }
                        break;
                    case 'use':
                        for (var key in app.config[environment][type]) {
                            app.use(app.config[environment][type][key]);
                        }
                        break;
                    case 'database':
                        connection = mysql.createConnection(app.config[environment][type]);
                        break;
                    default:
                        console.error("Error in loading");
                        break;
                }
            }
        });
    }
};
module.exports = {
    modules: {
        'http': 'http',
        'path': 'path',
        'socket': 'socket.io',
        'auth': 'passport',
        'mysql': 'node-mysql',
        'ejs': 'ejs'
    },
    engine:{
        'html':app.get('ejs').renderFile
    },
    set:{
        'title':'development',
        'env' : 'dev',
        'view engine':'ejs',
        'port':8080
    },
    use: [
        express.favicon(),
        express.logger('dev'),
        express.json(),
        express.urlencoded(),
        express.methodOverride(),
        express.cookieParser(),
        express.bodyParser(),
        express.session({secret: 'session_namespace_dev'}),
        express.static(path.join(__dirname, '../public'))
    ],
    database: {
        host: 'localhost:8080',
        user: 'root',
        password: ''
    }
};

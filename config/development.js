module.exports = {
    engine:{
        'html':require('ejs').renderFile
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
        stylus.middleware(path.join(__dirname, 'public')),
        express.static(path.join(__dirname, 'public'))
    ]
};

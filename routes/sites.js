module.exports = function(app) {

    /* Load of controllers */
    var site = app.controller.site;
    var user = app.controller.user;

    /* Mapping Routes - Controllers */
    app.get('/', site.index);
    app.get('/user', user.listAction);
    app.get('/user/get/:name', user.getAction);
    app.get('/user/add/', user.addAction);
};

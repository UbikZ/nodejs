// Packages
var DAOUser = app.model.dao.user;
var User = app.model.User;

module.exports = {
    listAction:function (req, res) {
        res.send("List all users");
    },

    addAction:function (req, res) {
        res.send("Add one user");
    },

    getAction:function (req, res) {
        var message = "No param sent";
        if (req.params.name != '') {
            var user = DAOUser.getUserByName(req.params.name);
            if (user instanceof User) {
                message = "One user found : " + user.getName() + " - " + user.getEmail();
            } else {
                message = "0 user found";
            }
        }
        res.send(message);
    }
};

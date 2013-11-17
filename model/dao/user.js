// Fixture example (private)
var users = [
    {name: 'Gabriel', email: 'gm@github.fr'},
    {name: 'Prenom', email: 'pn@github.fr'}
];

// convert fixtures in User collection (private)
var loadFixtures = function() {
    var result = new Array();
    for (var user in users) {
        var tempUser = new app.model.User();
        tempUser.setName(users[user]['name']);
        tempUser.setEmail(users[user]['email']);
        result.push(tempUser);
    }
    return result;
};

module.exports = {
    // Find one user by name
    getUserByName: function(_name) {
        var result = undefined;
        var users = loadFixtures();

        try {
            for (var user in users) {
                if (users[user].getName() == _name) {
                    result = users[user];
                }
            }
        } catch (e) {
            console.error(e);
        }
        return result;
    }
};


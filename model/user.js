module.exports = function() {
    // Class example
    function User() {}

    User.prototype.setName = function(_name) {
        this.name = _name;
    };

    User.prototype.getName = function() {
        return this.name;
    };

    User.prototype.setEmail = function(_email) {
        this.email = _email;
    };

    User.prototype.getEmail = function() {
        return this.email;
    };

    return User;
};

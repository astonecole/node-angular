const basicAuth = require('express-basic-auth');

module.exports = (users) => {
    users = users || {
        'admin': 'secret'
    };

    return basicAuth({
        users: users,
        challenge: true
    });
};

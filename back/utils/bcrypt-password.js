const bcrypt = require('bcrypt');

exports.hash = plainTextPassword => {
    return bcrypt.hash(plainTextPassword, 10);
};

exports.verify = (plainTextPassword, hash) => {
    return bcrypt.compare(plainTextPassword, hash);
};

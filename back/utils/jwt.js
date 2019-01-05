const conf = require('../config').load();
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = 'sdf34@dsf5sdrzeuoPU3BS78R?SDKLSD5df58sdf6-SDF5jkfdkjsJH';

exports.generateToken = (user, callback) => {
    jwt.sign(
        {
            id: user.id,
            username: user.name
        },
        JWT_SECRET_KEY,
        {
            algorithm: 'HS256',
            expiresIn: conf.security.jwt.expiresIn
        },
        callback
    );
};

exports.checkToken = (token, callback) => {
    jwt.verify(
        token,
        JWT_SECRET_KEY,
        callback
    );
};

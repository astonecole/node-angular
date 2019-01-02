const config = require('../config').load();
const UserService = require('../services/UserService');
const jwt = require('../utils/jwt');

exports.register = (req, res) => {
    UserService.register(req.body)
        .then(
            user => {
                res.status(201).json(user);
            },
            err => {
                console.log(err.original.sqlMessage || err);
                res.status(500).json({ message: "Internal Server Error" });
            }
        );
};

/**
 * @see https://github.com/auth0/node-jsonwebtoken#usage
 */
exports.authentication = (req, res) => {
    UserService.authenticate(req.body).then(
        user => {
            jwt.generateToken(user, (err, token) => {
                res.cookie('token', token, {
                    path: '/',
                    maxAge: 12 * 3600000,
                    httpOnly: true,
                    secure: true
                });
                res.json(user);
            });
        },
        err => {
            res.status(401).json({ message: err.message });
        }
    );
};

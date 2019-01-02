const jwt = require('../utils/jwt');

module.exports = (req, res, next) => {
    jwt.checkToken(req.cookies.token, (err, decoded) => {
        if (err) {
            res.status(401).json({ message: err.message });
        } else {
            if (!req.payload) {
                req.payload = decoded;
            }
            next();
        }
    });
};
